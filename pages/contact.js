import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon, TagIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const contactReasons = [
  { value: '', label: 'Select a reason' },
  { value: 'api', label: 'API Documentation' },
  { value: 'sdk', label: 'SDK/Integration Guide' },
  { value: 'user-manual', label: 'User/Admin Guide' },
  { value: 'config', label: 'Config/Deployment Docs' },
  { value: 'kb', label: 'Knowledge Base' },
  { value: 'marketing', label: 'Technical Marketing' },
  { value: 'other', label: 'Other' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [reason, setReason] = useState('')

  return (
    <div className="bg-gradient-to-br from-light via-white to-accent/10 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-xl mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary text-center">Contact</h1>
        <p className="text-dark/80 text-center mb-8 text-lg">
          Interested in partnering with Docuweave or have a question? Fill out the form and our team will get back to you promptly.
        </p>
        {submitted ? (
          <div className="bg-green-600 text-white p-6 rounded-lg shadow text-center text-lg font-semibold">
            Thank you for reaching out!<br />Our team will be in touch soon.
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6 bg-white/95 p-8 rounded-2xl shadow-card border border-light backdrop-blur-sm"
            onSubmit={() => setSubmitted(true)}
          >
            {/* Netlify hidden input to identify form name */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field for spam bots */}
            <input type="hidden" name="bot-field" />
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
                className="w-full px-4 py-2 rounded-lg bg-light border border-light text-dark focus:ring-2 focus:ring-primary outline-none transition"
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
                className="w-full px-4 py-2 rounded-lg bg-light border border-light text-dark focus:ring-2 focus:ring-primary outline-none transition"
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
                className="w-full px-4 py-2 rounded-lg bg-light border border-light text-dark focus:ring-2 focus:ring-primary outline-none transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-primary font-medium flex items-center gap-2" htmlFor="reason">
                <DocumentTextIcon className="w-5 h-5" /> Service Interested In
              </label>
              <select
                id="reason"
                name="reason"
                required
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-light border border-light text-dark focus:ring-2 focus:ring-primary outline-none transition"
              >
                {contactReasons.map(({ value, label }) => (
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
                className="w-full px-4 py-2 rounded-lg bg-light border border-light text-dark focus:ring-2 focus:ring-primary outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white rounded-lg py-3 font-bold text-lg shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        )}
      </main>
      <Footer />
      {/* Hidden Netlify form for build detection */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <input type="text" name="reason" />
        <textarea name="message"></textarea>
      </form>
    </div>
  )
}