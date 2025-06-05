export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-navy text-white text-center">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Docuweave. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://linkedin.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}