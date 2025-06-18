import '../styles/globals.css'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Component {...pageProps} />
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}