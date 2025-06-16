-- Supabase Database Schema for Docuweave Contact System
-- Execute this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    reason VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    ip_address INET,
    user_agent TEXT,
    attachments_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact_attachments table
CREATE TABLE IF NOT EXISTS contact_attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID NOT NULL REFERENCES contact_submissions(id) ON DELETE CASCADE,
    original_name VARCHAR(255) NOT NULL,
    storage_path VARCHAR(500) NOT NULL,
    public_url TEXT,
    file_size INTEGER NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_attachments_submission_id ON contact_attachments(submission_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for attachments (run this separately if needed)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('contact-attachments', 'contact-attachments', true);

-- Row Level Security (RLS) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_attachments ENABLE ROW LEVEL SECURITY;

-- Policy to allow service role to do everything
CREATE POLICY "Service role can manage contact submissions" ON contact_submissions
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage contact attachments" ON contact_attachments
    FOR ALL USING (auth.role() = 'service_role');

-- Policy to allow authenticated users to read their own submissions (optional for admin panel)
CREATE POLICY "Users can read submissions" ON contact_submissions
    FOR SELECT USING (true);

CREATE POLICY "Users can read attachments" ON contact_attachments
    FOR SELECT USING (true);

-- Create a view for easy querying with attachments
CREATE OR REPLACE VIEW contact_submissions_with_attachments AS
SELECT 
    cs.*,
    COALESCE(
        json_agg(
            json_build_object(
                'id', ca.id,
                'original_name', ca.original_name,
                'public_url', ca.public_url,
                'file_size', ca.file_size,
                'mime_type', ca.mime_type,
                'uploaded_at', ca.uploaded_at
            )
        ) FILTER (WHERE ca.id IS NOT NULL), 
        '[]'::json
    ) AS attachments
FROM contact_submissions cs
LEFT JOIN contact_attachments ca ON cs.id = ca.submission_id
GROUP BY cs.id, cs.name, cs.email, cs.subject, cs.reason, cs.message, cs.status, cs.ip_address, cs.user_agent, cs.attachments_count, cs.created_at, cs.updated_at
ORDER BY cs.created_at DESC;

-- Insert sample data (optional - remove in production)
-- INSERT INTO contact_submissions (name, email, subject, reason, message) 
-- VALUES ('Test User', 'test@example.com', 'Test Subject', 'general-inquiry', 'This is a test message.');

COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
COMMENT ON TABLE contact_attachments IS 'Stores file attachments linked to contact submissions';
COMMENT ON VIEW contact_submissions_with_attachments IS 'View that joins submissions with their attachments for easy querying';
