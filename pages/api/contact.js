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
  let databaseResult; // Declare databaseResult to avoid ReferenceError

  try {
    console.log('📨 Processing contact form submission...');
    
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

    console.log('📝 Form data received:', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      reason: formData.reason
    });

    // Process attachments
    const attachments = [];
    if (files.attachments) {
      const fileArray = Array.isArray(files.attachments) ? files.attachments : [files.attachments];
      
      for (const file of fileArray) {
        if (file && file.size > 0) {
          console.log(`📎 Processing attachment: ${file.originalFilename} (${file.size} bytes)`);
          
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
    };    // Step 1: Save to Supabase Database
    try {
      console.log('💾 Saving to Supabase database...');
      databaseResult = await contactService.saveSubmission(submission);
      submissionId = databaseResult.id;
      console.log('✅ Successfully saved to database with ID:', submissionId);

      // Step 2: Upload attachments to Supabase Storage
      if (attachments.length > 0 && submissionId) {
        console.log('📎 Uploading attachments to Supabase Storage...');
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
            console.error(`❌ Failed to upload ${attachment.originalName}:`, uploadError);
            // Continue with other attachments
          }
        }
      }

    } catch (dbError) {
      console.error('❌ Database save failed:', dbError);
      throw new Error('Failed to save submission to database');
    }

    // Step 5: Cleanup temporary files
    try {
      for (const attachment of attachments) {
        if (fs.existsSync(attachment.path)) {
          fs.unlinkSync(attachment.path);
        }
      }
      console.log('🧹 Temporary files cleaned up');
    } catch (cleanupError) {
      console.error('⚠️ Cleanup warning:', cleanupError);
    }

    // Success response
    res.status(200).json({ 
      message: 'Form submitted successfully!',
      submissionId: submissionId || submission.timestamp,
      savedToDatabase: databaseResult ? true : false,
      system: 'Supabase Only'
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    
    // Try to cleanup files on error
    if (submissionId) {
      try {
        // If we have a submission ID but failed later, log it for manual cleanup
        console.log(`⚠️ Partial submission created with ID: ${submissionId}`);
      } catch (cleanupError) {
        console.error('❌ Cleanup error:', cleanupError);
      }
    }

    res.status(500).json({ 
      message: 'Failed to submit form. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}
