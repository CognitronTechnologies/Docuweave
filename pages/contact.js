import { useState } from 'react'
import Navbar from '../components/Navbar'
import { EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon, TagIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

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
  const [reason, setReason] = useState('')
  return (
    <div className="bg-bg-secondary dark:bg-navy-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-xl mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary dark:text-white text-center">Contact us</h1>
        <p className="text-text-secondary dark:text-gray-300 text-center mb-8 text-lg">
          Interested in partnering with Docuweave or have a question? Fill out the form and our team will get back to you promptly.
        </p>        {submitted ? (
          <div className="bg-green-600 dark:bg-green-700 text-white p-6 rounded-lg shadow text-center text-lg font-semibold">
            Thank you for reaching out!<br />Our team will be in touch soon.
          </div>
        ) : (
          <form
            className="space-y-6 bg-bg-primary dark:bg-navy p-8 rounded-2xl shadow-card border border-border dark:border-navy-light backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
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
                required                placeholder="your@email.com"
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
            </div>            <div className="flex flex-col gap-1">
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
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent dark:bg-accent dark:hover:bg-primary text-white rounded-lg py-3 font-bold text-lg shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        )}
      </main>
    </div>
  )
}