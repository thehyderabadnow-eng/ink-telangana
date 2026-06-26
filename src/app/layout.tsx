import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ink Telangana',
  description: 'Your Voice | Your Story | Our Telangana',
  openGraph: {
    title: 'Ink Telangana',
    description: 'Your Voice | Your Story | Our Telangana',
    url: 'https://www.inktelangana.com',
    siteName: 'Ink Telangana',
    images: [
      {
        // CRITICAL: WhatsApp kosam idhi tappanisari ga 'https://' tho modalavvali (Absolute URL)
        // Mee main banner leda logo image link ikkada ivvandi
        url: 'https://www.inktelangana.com/primary-logo.png', 
        width: 1200,
        height: 630,
        alt: 'Ink Telangana',
      },
    ],
    locale: 'te_IN',
    type: 'website',
  },
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