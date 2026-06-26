"use client";

import Link from 'next/link';
import { PenTool } from 'lucide-react';
import { brandClasses } from '@/utils/theme';

export default function Footer() {
  return (
    <footer className={`${brandClasses.bgNavy} text-gray-300 py-12 mt-12 border-t border-[#D4AF37]/20`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand Info */}
        <div className="flex items-center gap-3">
          <PenTool className="w-8 h-8 text-[#D4AF37]" />
          <div>
            <p className="font-serif font-bold text-white text-lg tracking-wide">INK TELANGANA</p>
            <p className="text-xs text-[#D4AF37]">YOUR VOICE | YOUR STORY | OUR TELANGANA</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
          {/* <Link href="/?category=Politics" className="hover:text-[#D4AF37] transition-colors">Politics</Link> */}
          {/* <Link href="/?category=Business" className="hover:text-[#D4AF37] transition-colors">Business</Link> */}
          <Link href="/?category=InkThoughts" className="hover:text-[#D4AF37] transition-colors">Ink Thoughts</Link>
          {/* <Link href="/short-news" className="hover:text-[#D4AF37] transition-colors">Short News</Link> */}
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-gray-500 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Ink Telangana. All rights reserved.</p>
      </div>
    </footer>
  );
}