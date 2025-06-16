# Docuweave

This project uses **Supabase** as the backend for all contact form submissions and file uploads.

## Key Features
- Contact form submissions are stored in Supabase (PostgreSQL)
- File attachments are uploaded to Supabase Storage
- No email notification system or local JSON backup is used
- Modern, scalable, and production-ready

## Environment Setup
See `.env.example` for required environment variables. Only Supabase credentials are needed.

## Database
See `database/schema.sql` for the schema to set up your Supabase project.

## Testing
Use the script:
```
npm run test-supabase
```
to verify Supabase integration.

## Admin
See `pages/api/admin/supabase-submissions.js` for API access to submissions.

---

**All legacy email and local backup systems have been removed.**