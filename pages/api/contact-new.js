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

    // Step 3: Save to local JSON file as backup (fallback only if database fails)
    if (!databaseResult) {
      const submissionsFile = path.join(process.cwd(), 'contact-submissions.json');
      try {
        let submissions = [];
        
        if (fs.existsSync(submissionsFile)) {
          const fileContent = fs.readFileSync(submissionsFile, 'utf8');
          submissions = JSON.parse(fileContent);
        }

        submissions.push({
          ...submission,
          database_id: null,
          saved_to_database: false,
          fallback_reason: 'Database save failed'
        });
        
        fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
      } catch (backupError) {
        throw new Error('Both database and backup storage failed');
      }
    }

    // Step 4: Send Email Notifications
    try {
      // Check if we have email configuration
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('⚠️ Email configuration missing. Skipping email notifications.');
      } else {
        // Create email transporter
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        // Verify SMTP connection
        await transporter.verify();

        // Email attachments for nodemailer
        const emailAttachments = attachments.map(att => ({
          filename: att.originalName,
          path: att.path
        }));

        // Send notification email to admin
        const adminMailOptions = {
          from: process.env.SMTP_FROM,
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form Submission: ${formData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Submission ID:</strong> ${submissionId || 'Local backup only'}</p>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Reason:</strong> ${formData.reason}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
            <p><strong>Submitted:</strong> ${new Date(submission.timestamp).toLocaleString()}</p>
            ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s)</p>` : ''}
            <p><strong>IP Address:</strong> ${submission.ip_address}</p>
            <hr>
            <p><em>Powered by Docuweave Contact System with Supabase</em></p>
          `,
          attachments: emailAttachments
        };

        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to user
        const userMailOptions = {
          from: process.env.SMTP_FROM,
          to: formData.email,
          subject: 'Thank you for contacting Docuweave',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Thank you for your message!</h2>
              <p>Dear ${formData.name},</p>
              <p>Thank you for contacting Docuweave. We have received your message and will get back to you within 24 hours.</p>
              
              ${submissionId ? `<p><strong>Your submission reference:</strong> <code>${submissionId}</code></p>` : ''}
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #374151;">Your Message Details</h3>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Service Type:</strong> ${formData.reason}</p>
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 4px;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <p>We appreciate your interest in our documentation services. Our team will review your requirements and respond with tailored recommendations.</p>
              
              <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                <p style="margin: 0;"><strong>Best regards,</strong></p>
                <p style="margin: 5px 0;">The Docuweave Team</p>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">Professional Documentation Services</p>
              </div>
            </div>
          `
        };

        await transporter.sendMail(userMailOptions);
      }

    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      // Don't fail the entire request if emails fail
    }

    // Step 5: Cleanup temporary files
    try {
      for (const attachment of attachments) {
        if (fs.existsSync(attachment.path)) {
          fs.unlinkSync(attachment.path);
        }
      }
    } catch (cleanupError) {
      console.error('⚠️ Cleanup warning:', cleanupError);
    }

    // Success response
    res.status(200).json({ 
      message: 'Form submitted successfully!',
      submissionId: submissionId || submission.timestamp,
      savedToDatabase: databaseResult ? true : false,
      system: 'Supabase + Email + Backup'
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
