# 🚀 Supabase Integration Setup Guide

This guide will help you set up Supabase as the database backend for your Docuweave contact form system.

## 📋 Prerequisites

- A Supabase account (free at [supabase.com](https://supabase.com))
- Your existing Docuweave project with email configuration

## 🎯 Setup Steps

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up/Login to your account
3. Click "New project"
4. Choose your organization
5. Fill in project details:
   - **Name**: `docuweave-contact-system`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
6. Click "Create new project"
7. Wait for setup to complete (~2 minutes)

### 2. Configure Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the contents from `database/schema.sql`
4. Paste into the SQL editor
5. Click "Run" to execute the schema
6. You should see success messages for tables and indexes creation

### 3. Create Storage Bucket

1. Go to **Storage** in the sidebar
2. Click "Create a new bucket"
3. Set bucket name: `contact-attachments`
4. Make it **Public** (for file access)
5. Click "Create bucket"

### 4. Get API Keys

1. Go to **Settings** > **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key
   - **service_role** key (⚠️ Keep this secret!)

### 5. Update Environment Variables

1. Copy `.env.example` to `.env.local` (if not already done)
2. Add your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
ADMIN_API_KEY=generate_a_secure_random_string_here

# Keep your existing email settings...
```

### 6. Test the Integration

Run the test script to verify everything works:

```bash
npm run test-supabase
```

If successful, you should see:
- ✅ Database connection: Working
- ✅ Submission save: Working  
- ✅ File upload: Working
- ✅ Data fetch: Working
- ✅ Status update: Working

## 🔧 Using the New System

### Contact Form Endpoint

Your contact form now has dual endpoints:

1. **Original**: `/api/contact` (email + JSON backup)
2. **Enhanced**: `/api/contact-supabase` (database + email + backup)

To switch to Supabase, update your form action to use the new endpoint.

### Admin Dashboard API

Access submitted forms via API:

```bash
# Get submissions (replace YOUR_ADMIN_KEY)
curl -H "Authorization: Bearer YOUR_ADMIN_KEY" \
     http://localhost:3000/api/admin/supabase-submissions

# Update submission status
curl -X PUT \
     -H "Authorization: Bearer YOUR_ADMIN_KEY" \
     -H "Content-Type: application/json" \
     -d '{"submissionId":"uuid-here","status":"read"}' \
     http://localhost:3000/api/admin/supabase-submissions
```

## 📊 Database Schema

### Tables Created

1. **`contact_submissions`** - Main form submissions
   - `id`, `name`, `email`, `subject`, `reason`, `message`
   - `status`, `ip_address`, `user_agent`, `attachments_count`
   - `created_at`, `updated_at`

2. **`contact_attachments`** - File attachments
   - `id`, `submission_id`, `original_name`, `storage_path`
   - `public_url`, `file_size`, `mime_type`, `uploaded_at`

### Storage Bucket

- **`contact-attachments`** - Stores uploaded files
- Public access for file downloads
- Organized by submission ID folders

## 🔐 Security Features

- **Row Level Security (RLS)** enabled
- **Service role** authentication for API operations
- **Input validation** and sanitization
- **File type** and size restrictions
- **Error handling** with fallback to local storage

## 🚀 Production Deployment

### Environment Variables

Ensure these are set in your production environment:

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
ADMIN_API_KEY=your_secure_production_admin_key
```

### Backup Strategy

The system includes multiple backup layers:

1. **Primary**: Supabase database (with automatic backups)
2. **Secondary**: Local JSON file backup
3. **Email**: Notification emails as additional backup

## 📈 Monitoring & Analytics

Access your data through:

1. **Supabase Dashboard** - Real-time data viewer
2. **API Endpoints** - Programmatic access
3. **Admin Dashboard** - Custom management interface (to be built)
4. **Email Notifications** - Immediate alerts

## 🆘 Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check your `.env.local` file
   - Ensure no extra spaces in variable values

2. **"Failed to save submission"**
   - Verify database schema is created
   - Check Supabase project is active
   - Validate API keys are correct

3. **"File upload failed"**
   - Ensure storage bucket exists
   - Check bucket is public
   - Verify file size limits

### Getting Help

1. Check Supabase logs in dashboard
2. Run `npm run test-supabase` for diagnostics
3. Review console logs during form submission
4. Check email notifications are working

## 🎉 Benefits of Supabase Integration

✅ **Reliable Data Storage** - PostgreSQL database with automatic backups
✅ **File Management** - Secure cloud storage for attachments  
✅ **Real-time Dashboard** - View and manage submissions easily
✅ **Scalable** - Handles growth from startup to enterprise
✅ **Cost-effective** - Generous free tier, pay-as-you-scale
✅ **Analytics Ready** - Easy integration with analytics tools
✅ **Compliance Friendly** - GDPR compliant with data controls

Your contact form system is now production-ready with enterprise-grade features! 🚀
