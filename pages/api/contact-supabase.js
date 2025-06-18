import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { contactService } from '../../lib/contactService.js';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let submissionId = null;

  try {
    // Parse form data including files
    const form = formidable({
      uploadDir: './uploads',
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      multiples: true, // Allow multiple files
    });

    const [fields, files] = await form.parse(req);
    
    // Extract form data (formidable returns arrays)
    const formData = {
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
      subject: Array.isArray(fields.subject) ? fields.subject[0] : fields.subject,
      reason: Array.isArray(fields.reason) ? fields.reason[0] : fields.reason,
      message: Array.isArray(fields.message) ? fields.message[0] : fields.message,
    };

    // Process attachments
    const attachments = [];
    if (files.attachments) {
      const fileArray = Array.isArray(files.attachments) ? files.attachments : [files.attachments];
      
      for (const file of fileArray) {
        if (file && file.size > 0) {
          
          // Ensure uploads directory exists
          const uploadsDir = path.join(process.cwd(), 'uploads');
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }

          attachments.push({
            originalName: file.originalFilename,
            filename: path.basename(file.filepath),
            path: file.filepath,
            size: file.size,
            mimetype: file.mimetype
          });
        }
      }
    }

    // Create submission object with additional metadata
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      attachments,
      ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      user_agent: req.headers['user-agent']
    };

    // Step 1: Save to Supabase Database (Primary storage)
    let databaseResult = null;
    try {
      databaseResult = await contactService.saveSubmission(submission);
      submissionId = databaseResult.id;

      // Step 2: Upload attachments to Supabase Storage
      if (attachments.length > 0 && submissionId) {
        for (const attachment of attachments) {
          try {
            const fileBuffer = fs.readFileSync(attachment.path);
            await contactService.uploadAttachment(
              fileBuffer,
              attachment.originalName,
              submissionId,
              attachment.mimetype
            );
          } catch (uploadError) {
            // Continue with other attachments
          }
        }
      }

    } catch (dbError) {
      // Continue with fallback storage
    }

    // Step 3: Save to local JSON file as backup (fallback)
    const submissionsFile = path.join(process.cwd(), 'contact-submissions.json');
    try {
      let submissions = [];
      
      if (fs.existsSync(submissionsFile)) {
        const fileContent = fs.readFileSync(submissionsFile, 'utf8');
        submissions = JSON.parse(fileContent);
      }

      submissions.push({
        ...submission,
        database_id: submissionId,
        saved_to_database: databaseResult ? true : false
      });
      
      fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
    } catch (backupError) {
      // Continue with email sending
    }

    // Success response
    res.status(200).json({ 
      message: 'Form submitted successfully!',
      submissionId: submissionId || submission.timestamp,
      savedToDatabase: databaseResult ? true : false
    });

  } catch (error) {
    
    // Try to cleanup files on error
    if (submissionId) {
      try {
        // If we have a submission ID but failed later, log it for manual cleanup
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
    }

    res.status(500).json({ 
      message: 'Failed to submit form. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}
