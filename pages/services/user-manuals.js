import Navbar from '../../components/Navbar';

export default function UserManuals() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-6">User Manuals & Admin Guides</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          We create clear and actionable user manuals and admin guides tailored for both technical and business users, ensuring everyone can effectively use your products and services.
        </p>
      </main>
    </div>
  );
}
