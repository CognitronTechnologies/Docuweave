export default function Footer() {
  return (
    <footer className="text-center py-8 text-dark/40 bg-white/80 backdrop-blur border-t border-light text-sm">
      &copy; {new Date().getFullYear()} Docuweave. All rights reserved.
    </footer>
  )
}