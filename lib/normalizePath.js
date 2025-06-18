// Normalize a path to its base route for active nav highlighting
export default function normalizePath(path) {
  if (path === '/') return '/';
  if (path.startsWith('/about')) return '/about';
  if (path.startsWith('/blog')) return '/blog';
  if (path.startsWith('/contact')) return '/contact';
  if (path.startsWith('/services')) return '/services';
  return path;
}
