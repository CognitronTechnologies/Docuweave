import '../styles/globals.css'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Component {...pageProps} />
      <Analytics />
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}