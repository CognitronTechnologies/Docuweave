export default function Footer() {
  return (
    <footer className="w-full text-center py-8 text-text-secondary bg-gradient-to-r from-indigo-50 via-blue-50 to-white backdrop-blur border-t border-blue-100 text-sm mt-auto shadow-inner">
      <p className="mb-2">
        Contact: <a href="mailto:dickson@docuweave.io" className="text-primary hover:text-accent underline font-medium">dickson@docuweave.io</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Docuweave. All rights reserved.</p>
    </footer>
  )
}