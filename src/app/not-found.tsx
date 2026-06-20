import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-32 animate-in fade-in duration-500">
      <h2 className="text-5xl font-serif font-bold text-[#D4AF37] mb-4">
        404
      </h2>
      <h3 className="text-2xl font-bold text-white mb-4">Page Not Found</h3>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        We couldn't find the article or page you were looking for. It might have been moved or the URL might be incorrect.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 rounded-full bg-[#D4AF37] text-[#0B1B35] font-bold hover:bg-yellow-500 transition-colors shadow-lg"
      >
        Return to Home
      </Link>
    </div>
  );
}