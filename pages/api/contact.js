import formidable from 'formidable';
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
  let databaseResult;

  try {
    console.log('📨 Processing contact form submission...');
    // Use formidable in-memory (no uploadDir)
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      multiples: true,
      allowEmptyFiles: true,
      minFileSize: 0,
    });

    const [fields, files] = await form.parse(req);

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

    // Process attachments (in-memory)
    const attachments = [];
    if (files.attachments) {
      const fileArray = Array.isArray(files.attachments) ? files.attachments : [files.attachments];
      for (const file of fileArray) {
        if (file && file.size > 0) {
          // file._writeStream.buffer is not always available; use file.toBuffer() if formidable supports it
          let fileBuffer;
          if (typeof file.toBuffer === 'function') {
            fileBuffer = await file.toBuffer();
          } else if (file._writeStream && file._writeStream.buffer) {
            fileBuffer = file._writeStream.buffer;
          } else {
            // fallback: read from temp file (may not work on Vercel)
            fileBuffer = null;
          }
          attachments.push({
            originalName: file.originalFilename,
            size: file.size,
            mimetype: file.mimetype,
            buffer: fileBuffer,
          });
        }
      }
    }

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      attachments,
      ip_address: req.headers['x-forwarded-for'] || req.connection?.remoteAddress,
      user_agent: req.headers['user-agent']
    };

    // Step 1: Save to Supabase Database
    try {
      console.log('💾 Saving to Supabase database...');
      databaseResult = await contactService.saveSubmission(submission);
      submissionId = databaseResult.id;
      console.log('✅ Successfully saved to database with ID:', submissionId);

      // Step 2: Upload attachments to Supabase Storage
      if (attachments.length > 0 && submissionId) {
        console.log('📎 Uploading attachments to Supabase Storage...');
        for (const attachment of attachments) {
          if (attachment.buffer) {
            await contactService.uploadAttachment(
              attachment.buffer,
              attachment.originalName,
              submissionId,
              attachment.mimetype
            );
          }
        }
      }
    } catch (err) {
      console.error('❌ Error saving submission or uploading attachments:', err);
      return res.status(500).json({ message: 'Failed to save submission or upload attachments.' });
    }

    return res.status(200).json({ message: 'Submission received', id: submissionId });
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return res.status(500).json({ message: 'Error processing contact form.' });
  }
}
