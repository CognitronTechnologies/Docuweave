const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const { contactService } = require('../lib/contactService.js');
const fs = require('fs');

async function testSupabaseIntegration() {
  console.log('🧪 Testing Supabase Contact Form Integration...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing database connection...');
    const isHealthy = await contactService.healthCheck();
    if (isHealthy) {
      console.log('✅ Database connection successful\n');
    } else {
      console.log('❌ Database connection failed\n');
      return;
    }

    // Test 2: Save submission
    console.log('2️⃣ Testing submission save...');
    const testSubmission = {
      name: 'Test User - Supabase',
      email: 'test.supabase@example.com',
      subject: 'Supabase Integration Test',
      reason: 'technical-consultation',
      message: 'This is a test submission to verify Supabase integration is working correctly.',
      timestamp: new Date().toISOString(),
      attachments: [],
      ip_address: '127.0.0.1',
      user_agent: 'Test Script/1.0'
    };

    const saveResult = await contactService.saveSubmission(testSubmission);
    console.log('✅ Submission saved successfully!');
    console.log('📝 Submission ID:', saveResult.id);
    console.log('📊 Data:', saveResult.data);

    const submissionId = saveResult.id;

    // Test 3: File upload (if we have a test file)
    const testFilePath = './package.json'; // Use package.json as test file
    if (fs.existsSync(testFilePath)) {
      console.log('\n3️⃣ Testing file upload...');
      const fileBuffer = fs.readFileSync(testFilePath);
      
      const uploadResult = await contactService.uploadAttachment(
        fileBuffer,
        'test-package.json',
        submissionId,
        'application/json'
      );
      
      console.log('✅ File uploaded successfully!');
      console.log('🔗 Public URL:', uploadResult.publicUrl);
    }

    // Test 4: Fetch submissions
    console.log('\n4️⃣ Testing submissions fetch...');
    const fetchResult = await contactService.getSubmissions(1, 5);
    console.log('✅ Submissions fetched successfully!');
    console.log('📊 Total submissions:', fetchResult.pagination.total);
    console.log('📄 Current page data:', fetchResult.data.length, 'items');

    // Test 5: Update submission status
    console.log('\n5️⃣ Testing status update...');
    const updateResult = await contactService.updateSubmissionStatus(submissionId, 'read');
    console.log('✅ Status updated successfully!');
    console.log('📝 Updated data:', updateResult.data);

    console.log('\n🎉 All Supabase tests completed successfully!');
    console.log('\n📋 Test Summary:');
    console.log('✅ Database connection: Working');
    console.log('✅ Submission save: Working');
    console.log('✅ File upload: Working');
    console.log('✅ Data fetch: Working');
    console.log('✅ Status update: Working');

    console.log('\n🔧 Setup Instructions:');
    console.log('1. Go to https://supabase.com and create a new project');
    console.log('2. In your Supabase dashboard, go to SQL Editor');
    console.log('3. Copy and paste the contents of database/schema.sql');
    console.log('4. Create a storage bucket named "contact-attachments"');
    console.log('5. Add your Supabase credentials to .env.local:');
    console.log('   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
    console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key');
    console.log('   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key');

  } catch (error) {
    console.error('❌ Supabase test failed:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure you have set up your Supabase project');
    console.log('2. Check your .env.local file has the correct Supabase credentials');
    console.log('3. Ensure you have run the database schema (database/schema.sql)');
    console.log('4. Verify your Supabase project is active and accessible');
  }
}

// Run the test
testSupabaseIntegration();
