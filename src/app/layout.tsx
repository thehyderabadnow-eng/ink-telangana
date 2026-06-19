import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'; // Make sure you have Tailwind in your globals.css

export const metadata: Metadata = {
  title: 'Ink Telangana',
  description: 'Your Voice | Your Story | Our Telangana',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}