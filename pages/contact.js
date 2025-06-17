import SEO from '../components/SEO'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon, TagIcon, DocumentTextIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/outline'

const contactReasons = [
  { value: '', label: 'Select a reason' },
  { value: 'product-ready-docs', label: 'Product-ready docs' },
  { value: 'scale-knowledge', label: 'Scale your team\'s knowledge' },
  { value: 'dev-first-content', label: 'Grow with dev-first content' },
  { value: 'modern-docs-stack', label: 'Modern docs stack' },
  { value: 'optimize-scale', label: 'Optimize & scale docs' },
  { value: 'on-demand-expertise', label: 'On-demand docs expertise' },
  { value: 'general-inquiry', label: 'General inquiry' },
  { value: 'other', label: 'Other' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [reason, setReason] = useState('')
  const [attachments, setAttachments] = useState([])
  const [submissionResult, setSubmissionResult] = useState(null)

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setAttachments(prev => [...prev, ...files])
  }

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const formData = new FormData(e.target)
      
      // Add all attachments to FormData
      attachments.forEach(file => {
        formData.append('attachments', file)
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setSubmissionResult(result)
      } else {
        throw new Error(result.message || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Docuweave | Start Your Documentation Project"
        description="Get in touch with Docuweave’s technical writing experts. Request a quote, ask a question, or start your documentation project today."
        canonical="https://yourdomain.com/contact"
        openGraph={{
          title: 'Contact Docuweave | Start Your Documentation Project',
          description: 'Get in touch with Docuweave’s technical writing experts. Request a quote, ask a question, or start your documentation project today.',
          url: 'https://yourdomain.com/contact',
          type: 'website',
        }}
        schemaType="ContactPage"
        schemaData={{
          name: 'Contact Docuweave',
          description: 'Get in touch with Docuweave’s technical writing experts. Request a quote, ask a question, or start your documentation project today.',
          url: 'https://yourdomain.com/contact',
          publisher: {
            '@type': 'Organization',
            name: 'Docuweave',
            url: 'https://yourdomain.com',
          },
        }}
      />
      <div className="bg-bg-secondary dark:bg-navy-dark min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-xl mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary dark:text-white text-center">Contact us</h1>
          <p className="text-text-secondary dark:text-gray-300 text-center mb-8 text-lg">
            Interested in partnering with Docuweave or have a question? Fill out the form and our team will get back to you promptly.
          </p>
          {submitted ? (
            <div className="bg-green-600 dark:bg-green-700 text-white p-6 rounded-lg shadow text-center text-lg font-semibold">
              <p className="mb-2">Thank you for reaching out!</p>
              <p className="text-sm">Our team will be in touch within 1-2 business days.</p>
              {submissionResult && (
                <div className="mt-3 text-sm opacity-90">
                  <p>Submission ID: {submissionResult.submissionId}</p>
                  {submissionResult.attachmentCount > 0 && (
                    <p>{submissionResult.attachmentCount} file(s) attached successfully</p>
                  )}
                  {submissionResult.emailSent && (
                    <p className="text-green-200">✓ Email notification sent</p>
                  )}
                  {submissionResult.emailSent === false && (
                    <p className="text-yellow-200">⚠ Email notification failed (submission saved locally)</p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <form
              className="space-y-6 bg-bg-primary dark:bg-navy p-8 rounded-2xl shadow-card border border-border dark:border-navy-light backdrop-blur-sm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="name">
                  <UserIcon className="w-5 h-5" /> Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="email">
                  <EnvelopeIcon className="w-5 h-5" /> Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="subject">
                  <TagIcon className="w-5 h-5" /> Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="reason">
                  <DocumentTextIcon className="w-5 h-5" /> Service Interested In
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                >
                  {contactReasons.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="message">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can Docuweave help your team?"
                  className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                />
              </div>
              
              {/* File Attachment Section */}
              <div className="flex flex-col gap-1">
                <label className="text-primary dark:text-accent font-medium flex items-center gap-2" htmlFor="attachments">
                  <PaperClipIcon className="w-5 h-5" /> Attachments <span className="text-sm text-text-secondary dark:text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="space-y-3">
                  <input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.zip,.json,.yaml,.yml"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-accent dark:file:bg-accent dark:hover:file:bg-primary file:cursor-pointer focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                  />
                  <p className="text-xs text-text-secondary dark:text-gray-400">
                    Supported: PDF, DOC, images, code files, archives (max 10MB per file)
                  </p>
                  
                  {/* Display attached files */}
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-text-primary dark:text-white font-medium">Attached files:</p>
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light rounded-lg p-3">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <DocumentTextIcon className="w-4 h-4 text-accent flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm text-text-primary dark:text-white truncate">{file.name}</p>
                              <p className="text-xs text-text-secondary dark:text-gray-400">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="ml-2 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition"
                            title="Remove file"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-accent dark:bg-accent dark:hover:bg-primary text-white rounded-lg py-3 font-bold text-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </main>
      </div>
    </>
  )
}