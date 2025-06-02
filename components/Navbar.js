import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between py-5 px-8 bg-white/80 backdrop-blur shadow z-30 border-b border-light">
      <Link href="/" className="font-heading text-2xl font-bold text-primary tracking-tight">Docuweave</Link>
      <div className="flex items-center gap-6">
        <Link href="/#services" className="text-dark/80 hover:text-primary font-medium transition">Services</Link>
        <Link href="/about" className="text-dark/80 hover:text-primary font-medium transition">About</Link>
        <Link href="/contact">
          <span className="bg-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-accent transition">Contact</span>
        </Link>
      </div>
    </nav>
  )
}