export default function Footer() {
  return (
    <footer className="w-full text-center py-8 text-text-secondary dark:text-gray-400 bg-bg-primary/80 dark:bg-navy/80 backdrop-blur border-t border-border dark:border-navy-light text-sm mt-auto">
      &copy; {new Date().getFullYear()} Docuweave. All rights reserved.
    </footer>
  )
}