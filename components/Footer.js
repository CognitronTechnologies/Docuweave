export default function Footer() {
  return (
    <footer className="w-full text-center py-8 text-text-secondary bg-white/80 backdrop-blur border-t border-border text-sm mt-auto">
      &copy; {new Date().getFullYear()} Docuweave. All rights reserved.
    </footer>
  )
}