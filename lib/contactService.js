const { supabaseAdmin } = require('./supabase.js')
const { v4: uuidv4 } = require('uuid')

/**
 * Contact submission service for handling database operations
 * Provides production-grade error handling and logging
 */
class ContactService {
  constructor() {
    this.tableName = 'contact_submissions'
    this.bucketName = 'contact-attachments'
  }

  /**
   * Save contact submission to database
   * @param {Object} submission - Contact form data
   * @returns {Promise<Object>} Database response
   */
  async saveSubmission(submission) {
    try {
      
      const submissionData = {
        id: uuidv4(),
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
        reason: submission.reason,
        message: submission.message,
        created_at: new Date().toISOString(),
        status: 'new',
        ip_address: submission.ip_address || null,
        user_agent: submission.user_agent || null,
        attachments_count: submission.attachments ? submission.attachments.length : 0
      }

      const { data, error } = await supabaseAdmin
        .from(this.tableName)
        .insert([submissionData])
        .select()
        .single()

      if (error) {
        throw new Error(`Failed to save submission: ${error.message}`)
      }

      return { success: true, data, id: data.id }

    } catch (error) {
      console.error('💥 Error saving submission:', error)
      throw error
    }
  }

  /**
   * Upload file attachment to Supabase Storage
   * @param {Buffer} fileBuffer - File buffer data
   * @param {string} fileName - Original file name
   * @param {string} submissionId - Related submission ID
   * @param {string} mimeType - File MIME type
   * @returns {Promise<Object>} Upload response
   */
  async uploadAttachment(fileBuffer, fileName, submissionId, mimeType) {
    try {
      
      // Generate unique filename to prevent conflicts
      const fileExtension = fileName.split('.').pop()
      const uniqueFileName = `${submissionId}/${uuidv4()}.${fileExtension}`

      const { data, error } = await supabaseAdmin.storage
        .from(this.bucketName)
        .upload(uniqueFileName, fileBuffer, {
          contentType: mimeType,
          upsert: false
        })

      if (error) {
        throw new Error(`Failed to upload file: ${error.message}`)
      }

      // Get public URL for the uploaded file
      const { data: urlData } = supabaseAdmin.storage
        .from(this.bucketName)
        .getPublicUrl(uniqueFileName)

      const attachmentRecord = {
        submission_id: submissionId,
        original_name: fileName,
        storage_path: uniqueFileName,
        public_url: urlData.publicUrl,
        file_size: fileBuffer.length,
        mime_type: mimeType,
        uploaded_at: new Date().toISOString()
      }

      // Save attachment metadata to database
      const { data: attachmentData, error: attachmentError } = await supabaseAdmin
        .from('contact_attachments')
        .insert([attachmentRecord])
        .select()
        .single()

      if (attachmentError) {
        // Try to clean up uploaded file
        await this.deleteFile(uniqueFileName)
        throw new Error(`Failed to save attachment metadata: ${attachmentError.message}`)
      }

      return { 
        success: true, 
        data: attachmentData,
        publicUrl: urlData.publicUrl 
      }

    } catch (error) {
      console.error('💥 Error uploading attachment:', error)
      throw error
    }
  }

  /**
   * Get all submissions with pagination
   * @param {number} page - Page number (1-based)
   * @param {number} limit - Items per page
   * @returns {Promise<Object>} Paginated submissions
   */
  async getSubmissions(page = 1, limit = 50) {
    try {
      const offset = (page - 1) * limit

      const { data, error, count } = await supabaseAdmin
        .from(this.tableName)
        .select(`
          *,
          contact_attachments (
            id,
            original_name,
            public_url,
            file_size,
            mime_type
          )
        `, { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) {
        throw new Error(`Failed to fetch submissions: ${error.message}`)
      }

      return {
        success: true,
        data,
        pagination: {
          page,
          limit,
          total: count,
          pages: Math.ceil(count / limit)
        }
      }

    } catch (error) {
      console.error('💥 Error fetching submissions:', error)
      throw error
    }
  }

  /**
   * Update submission status
   * @param {string} submissionId - Submission ID
   * @param {string} status - New status (new, read, replied, archived)
   * @returns {Promise<Object>} Update response
   */
  async updateSubmissionStatus(submissionId, status) {
    try {
      const { data, error } = await supabaseAdmin
        .from(this.tableName)
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', submissionId)
        .select()
        .single()

      if (error) {
        throw new Error(`Failed to update submission: ${error.message}`)
      }

      return { success: true, data }

    } catch (error) {
      console.error('💥 Error updating submission:', error)
      throw error
    }
  }

  /**
   * Delete a file from storage
   * @param {string} filePath - File path in storage
   * @returns {Promise<Object>} Delete response
   */
  async deleteFile(filePath) {
    try {
      const { error } = await supabaseAdmin.storage
        .from(this.bucketName)
        .remove([filePath])

      if (error) {
        throw new Error(`Failed to delete file: ${error.message}`)
      }

      return { success: true }

    } catch (error) {
      console.error('💥 Error deleting file:', error)
      throw error
    }
  }

  /**
   * Health check for database connection
   * @returns {Promise<boolean>} Connection status
   */
  async healthCheck() {
    try {
      const { data, error } = await supabaseAdmin
        .from(this.tableName)
        .select('count')
        .limit(1)

      return !error
    } catch (error) {
      console.error('💥 Database health check failed:', error)
      return false
    }
  }
}

// Export singleton instance
exports.contactService = new ContactService()
