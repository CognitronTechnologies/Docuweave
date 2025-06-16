import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { DocumentTextIcon, PaperClipIcon, CalendarIcon, UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Admin() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'docuweave2024' // Change this to a secure password

  useEffect(() => {
    // Check if already authenticated in session
    const isAuth = sessionStorage.getItem('adminAuth') === 'true'
    if (isAuth) {
      setAuthenticated(true)
      fetchSubmissions()
    } else {
      setLoading(false)
    }
  }, [])

  const handleAuth = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setAuthError('')
      sessionStorage.setItem('adminAuth', 'true')
      fetchSubmissions()
    } else {
      setAuthError('Invalid password')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    sessionStorage.removeItem('adminAuth')
    setSubmissions([])
  }
  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions', {
        headers: {
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      } else if (response.status === 401) {
        // Handle unauthorized - force re-authentication
        setAuthenticated(false)
        sessionStorage.removeItem('adminAuth')
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  return (
    <div className="min-h-screen bg-bg-secondary dark:bg-navy-dark">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary dark:text-white mb-2">
              Contact Form Submissions
            </h1>
            <p className="text-text-secondary dark:text-gray-300">
              View and manage contact form submissions
            </p>
          </div>
          {authenticated && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Logout
            </button>
          )}
        </div>

        {!authenticated ? (
          <div className="max-w-md mx-auto">
            <div className="bg-bg-primary dark:bg-navy border border-border dark:border-navy-light rounded-2xl p-8 shadow-card">
              <div className="text-center mb-6">
                <LockClosedIcon className="w-12 h-12 text-primary dark:text-accent mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">Admin Access</h2>
                <p className="text-text-secondary dark:text-gray-300">Enter password to view submissions</p>
              </div>
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400 focus:ring-2 focus:ring-primary dark:focus:ring-accent outline-none transition"
                    required
                  />
                </div>
                {authError && (
                  <p className="text-red-600 dark:text-red-400 text-sm">{authError}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent dark:bg-accent dark:hover:bg-primary text-white py-3 rounded-lg font-medium transition"
                >
                  Access Admin Panel
                </button>
              </form>
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Demo Password:</strong> docuweave2024
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">
                  In production, this should use proper authentication (OAuth, JWT, etc.)
                </p>
              </div>
            </div>
          </div>
        ) : loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-text-secondary dark:text-gray-300">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <DocumentTextIcon className="w-16 h-16 text-text-secondary dark:text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-2">No submissions yet</h2>
            <p className="text-text-secondary dark:text-gray-300">Contact form submissions will appear here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission, index) => (
              <div key={index} className="bg-bg-primary dark:bg-navy border border-border dark:border-navy-light rounded-2xl p-6 shadow-card">                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <UserIcon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-text-primary dark:text-white">
                      {submission.name}
                    </h3>
                    {submission.emailSent === true && (
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                        ✓ Email Sent
                      </span>
                    )}
                    {submission.emailSent === false && (
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">
                        ⚠ Email Failed
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    {formatDate(submission.timestamp)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary dark:text-gray-300">Email:</span>
                    <a href={`mailto:${submission.email}`} className="text-accent hover:underline">
                      {submission.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentTextIcon className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary dark:text-gray-300">Service:</span>
                    <span className="text-text-primary dark:text-white text-sm">
                      {submission.reason || 'Not specified'}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium text-text-primary dark:text-white mb-2">
                    {submission.subject}
                  </h4>
                  <p className="text-text-secondary dark:text-gray-300 bg-bg-secondary dark:bg-navy-light rounded-lg p-4 whitespace-pre-wrap">
                    {submission.message}
                  </p>
                </div>

                {submission.attachments && submission.attachments.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-text-primary dark:text-white mb-3 flex items-center gap-2">
                      <PaperClipIcon className="w-5 h-5" />
                      Attachments ({submission.attachments.length})
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {submission.attachments.map((attachment, attIndex) => (
                        <div key={attIndex} className="bg-bg-secondary dark:bg-navy-light border border-border dark:border-navy-light rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <DocumentTextIcon className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm font-medium text-text-primary dark:text-white truncate">
                              {attachment.originalName}
                            </span>
                          </div>
                          <div className="text-xs text-text-secondary dark:text-gray-400">
                            <p>{formatFileSize(attachment.size)}</p>
                            <p>{attachment.mimetype}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
