import SEO from '../components/SEO'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon, TagIcon, DocumentTextIcon, PaperClipIcon, XMarkIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const contactReasons = [
  { value: '', label: 'Select a service' },
  { value: 'product-documentation', label: 'Product Documentation' },
  { value: 'developer-marketing', label: 'Developer Marketing' },
  { value: 'modern-docs-stack', label: 'Modern Docs Stack' },
  { value: 'other', label: 'Other' },
]

const budgetBands = [
  { value: '', label: 'Select budget range' },
  { value: '0-10000', label: '$0 - $10,000' },
  { value: '10000-20000', label: '$10,000 - $20,000' },
  { value: '20000-30000', label: '$20,000 - $30,000' },
  { value: '30000-higher', label: '$30,000 and higher' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [reason, setReason] = useState('')
  const [budget, setBudget] = useState('')
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
        canonical="https://docuweave.io/contact"
        openGraph={{
          title: 'Contact Docuweave | Start Your Documentation Project',
          description: 'Get in touch with Docuweave’s technical writing experts. Request a quote, ask a question, or start your documentation project today.',
          url: 'https://docuweave.io/contact',
          type: 'website',
        }}
        schemaType="ContactPage"
        schemaData={{
          name: 'Contact Docuweave',
          description: 'Get in touch with Docuweave’s technical writing experts. Request a quote, ask a question, or start your documentation project today.',
          url: 'https://docuweave.io/contact',
          publisher: {
            '@type': 'Organization',
            name: 'Docuweave',
            url: 'https://docuweave.io',
          },
        }}
      />
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-xl mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary text-center">Book a free consultation</h1>
          <p className="text-text-secondary text-center mb-4 text-lg">
            Interested in partnering with Docuweave or have a question? Feel free to reach out - we'd love to connect.
          </p>
          <p className="text-text-secondary text-center mb-8 text-base">
            Prefer email? Reach us directly at <a href="mailto:dickson@docuweave.io" className="text-primary hover:text-accent font-semibold underline">dickson@docuweave.io</a>
          </p>
          {submitted ? (
            <div className="bg-green-600 text-white p-6 rounded-lg shadow text-center text-lg font-semibold">
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
              className="space-y-6 bg-white p-8 rounded-2xl shadow-card border border-border backdrop-blur-sm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="name">
                  <UserIcon className="w-5 h-5" /> Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="email">
                  <EnvelopeIcon className="w-5 h-5" /> Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="subject">
                  <TagIcon className="w-5 h-5" /> Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary outline-none transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="reason">
                  <DocumentTextIcon className="w-5 h-5" /> Service interested in
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary focus:ring-2 focus:ring-primary outline-none transition"
                >
                  {contactReasons.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="budget">
                  <CurrencyDollarIcon className="w-5 h-5" /> Estimated budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary focus:ring-2 focus:ring-primary outline-none transition"
                >
                  {budgetBands.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="message">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can Docuweave help your team?"
                  className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary outline-none transition"
                />
              </div>
              
              {/* File Attachment Section */}
              <div className="flex flex-col gap-1">
                <label className="text-primary font-medium flex items-center gap-2" htmlFor="attachments">
                  <PaperClipIcon className="w-5 h-5" /> Attachments <span className="text-sm text-text-secondary font-normal">(optional)</span>
                </label>
                <div className="space-y-3">
                  <input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.zip,.json,.yaml,.yml"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg bg-light-secondary border border-border text-text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-accent file:cursor-pointer focus:ring-2 focus:ring-primary outline-none transition"
                  />
                  <p className="text-xs text-text-secondary">
                    Supported: PDF, DOC, images, code files, archives (max 10MB per file)
                  </p>
                  
                  {/* Display attached files */}
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-text-primary font-medium">Attached files:</p>
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-light-secondary border border-border rounded-lg p-3">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <DocumentTextIcon className="w-4 h-4 text-accent flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm text-text-primary truncate">{file.name}</p>
                              <p className="text-xs text-text-secondary">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="ml-2 p-1 rounded-full hover:bg-red-100 text-red-600 transition"
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
                className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-lg py-3 font-bold text-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed border border-primary/30 hover:from-accent hover:to-primary"
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