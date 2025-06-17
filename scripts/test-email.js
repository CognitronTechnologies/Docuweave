// Email configuration test script
// Run with: node scripts/test-email.js

const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

async function testEmailConfig() {
  console.log('🧪 Testing email configuration...\n');

  // Check environment variables
  const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\nPlease check your .env.local file');
    return;
  }

  console.log('✅ Environment variables found');
  console.log(`   SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`   SMTP User: ${process.env.SMTP_USER}`);
  console.log(`   Email From: ${process.env.EMAIL_FROM || process.env.SMTP_USER}`);
  console.log(`   Email To: ${process.env.EMAIL_TO || process.env.SMTP_USER}\n`);
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Test connection
    console.log('🔄 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful\n');

    // Send test email
    console.log('📧 Sending test email...');
    const testEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
      subject: '✅ Docuweave Email Test - Success!',
      html: `
        <h2>🎉 Email Configuration Test Successful!</h2>
        <p>Your Docuweave contact form email configuration is working correctly.</p>
        <p><strong>Configuration details:</strong></p>
        <ul>
          <li>SMTP Host: ${process.env.SMTP_HOST}</li>
          <li>SMTP Port: ${process.env.SMTP_PORT || '587'}</li>
          <li>From Email: ${process.env.EMAIL_FROM || process.env.SMTP_USER}</li>
          <li>To Email: ${process.env.EMAIL_TO || process.env.SMTP_USER}</li>
        </ul>
        <p>Your contact form submissions will now be delivered via email!</p>
        <hr>
        <p><small>This is an automated test email from your Docuweave setup.</small></p>
      `,
      text: `
        Email Configuration Test Successful!
        
        Your Docuweave contact form email configuration is working correctly.
        
        Configuration details:
        - SMTP Host: ${process.env.SMTP_HOST}
        - SMTP Port: ${process.env.SMTP_PORT || '587'}
        - From Email: ${process.env.EMAIL_FROM || process.env.SMTP_USER}
        - To Email: ${process.env.EMAIL_TO || process.env.SMTP_USER}
        
        Your contact form submissions will now be delivered via email!
      `
    };

    await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log(`📬 Check ${process.env.EMAIL_TO || process.env.SMTP_USER} for the test message\n`);

    console.log('🎉 Email configuration test completed successfully!');
    console.log('Your contact form is ready to send emails.');

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('   - Username and password are correct');
      console.error('   - If using Gmail, enable 2FA and use App Password');
      console.error('   - Account allows SMTP access');
    } else if (error.code === 'ENOTFOUND') {
      console.error('\n💡 SMTP server not found. Please check:');
      console.error('   - SMTP_HOST is correct');
      console.error('   - Internet connection is working');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Please check:');
      console.error('   - SMTP_PORT is correct (usually 587 or 465)');
      console.error('   - Firewall allows SMTP connections');
    }
  }
}

// Run the test
testEmailConfig().catch(console.error);
