// Test Contact Form API directly
// Run with: node scripts/test-contact-form.js

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

// Import the contact form logic (simplified version)
const nodemailer = require('nodemailer');
const fs = require('fs').promises;

async function testContactFormSubmission() {
  console.log('🧪 Testing Contact Form Submission...\n');

  // Create test submission data
  const testSubmission = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Contact Form',
    reason: 'General Inquiry',
    message: 'This is a test message from the contact form testing script.',
    attachments: [],
    timestamp: new Date().toISOString()
  };

  try {
    // Test 1: Save to JSON file (backup)
    console.log('📝 Testing local backup save...');
    const submissionsFile = path.join(__dirname, '../contact-submissions.json');
    
    let submissions = [];
    try {
      const data = await fs.readFile(submissionsFile, 'utf8');
      submissions = JSON.parse(data);
    } catch (err) {
      // File doesn't exist yet, start with empty array
      console.log('   Creating new submissions file...');
    }

    submissions.push(testSubmission);
    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
    console.log('✅ Local backup saved successfully\n');

    // Test 2: Send email notification
    console.log('📧 Testing email notification...');
    
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('❌ Email configuration missing. Skipping email test.');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test SMTP connection
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Send notification email
    const emailHtml = `
      <h2>🔥 New Contact Form Submission (TEST)</h2>
      <p><strong>Name:</strong> ${testSubmission.name}</p>
      <p><strong>Email:</strong> ${testSubmission.email}</p>
      <p><strong>Subject:</strong> ${testSubmission.subject}</p>
      <p><strong>Reason:</strong> ${testSubmission.reason}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px;">
        ${testSubmission.message.replace(/\n/g, '<br>')}
      </div>
      <p><strong>Submitted:</strong> ${testSubmission.timestamp}</p>
      <hr>
      <p><small>This is a test submission from your contact form testing script.</small></p>
    `;

    const notificationEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
      subject: `${process.env.EMAIL_SUBJECT_PREFIX || '[Contact]'} ${testSubmission.subject} (TEST)`,
      html: emailHtml,
      text: `
        New Contact Form Submission (TEST)
        
        Name: ${testSubmission.name}
        Email: ${testSubmission.email}
        Subject: ${testSubmission.subject}
        Reason: ${testSubmission.reason}
        
        Message:
        ${testSubmission.message}
        
        Submitted: ${testSubmission.timestamp}
      `
    };

    await transporter.sendMail(notificationEmail);
    console.log('✅ Notification email sent successfully!');

    // Send confirmation email to user
    console.log('📧 Sending confirmation email to user...');
    
    const confirmationEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: testSubmission.email,
      subject: 'Thank you for contacting Docuweave (TEST)',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${testSubmission.name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p><strong>Your message details:</strong></p>
        <ul>
          <li><strong>Subject:</strong> ${testSubmission.subject}</li>
          <li><strong>Reason:</strong> ${testSubmission.reason}</li>
          <li><strong>Submitted:</strong> ${new Date(testSubmission.timestamp).toLocaleString()}</li>
        </ul>
        <p>Best regards,<br>The Docuweave Team</p>
        <hr>
        <p><small>This is a test confirmation email. If you did not submit this form, please ignore this email.</small></p>
      `,
      text: `
        Thank you for your message!
        
        Hi ${testSubmission.name},
        
        We've received your message and will get back to you soon.
        
        Your message details:
        - Subject: ${testSubmission.subject}
        - Reason: ${testSubmission.reason}
        - Submitted: ${new Date(testSubmission.timestamp).toLocaleString()}
        
        Best regards,
        The Docuweave Team
      `
    };

    await transporter.sendMail(confirmationEmail);
    console.log('✅ Confirmation email sent successfully!\n');

    console.log('🎉 Contact Form Test Completed Successfully!');
    console.log('📬 Check your email for:');
    console.log(`   1. Notification email at: ${process.env.EMAIL_TO || process.env.SMTP_USER}`);
    console.log(`   2. Confirmation email at: ${testSubmission.email}`);
    console.log(`📁 Test submission saved to: ${submissionsFile}`);

  } catch (error) {
    console.error('❌ Contact form test failed:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Email authentication failed. Please check your credentials.');
    } else if (error.code === 'ENOTFOUND') {
      console.error('\n💡 SMTP server not found. Please check SMTP_HOST.');
    }
  }
}

// Run the test
testContactFormSubmission().catch(console.error);
