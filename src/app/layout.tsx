import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ink Telangana',
  description: 'Your Voice | Your Story | Our Telangana',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#12161E] font-sans text-gray-100 flex flex-col">
        
        {/* Wrapping Navbar in Suspense prevents the _not-found prerender error */}
        <Suspense fallback={<div className="h-20 bg-[#1C212B] border-b border-[#D4AF37]/30"></div>}>
          <Navbar />
        </Suspense>

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}