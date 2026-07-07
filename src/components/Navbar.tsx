"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { brandClasses } from '@/utils/theme';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Update URL parameters without reloading the page
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('search', value);
    else params.delete('search');

    router.replace(`/?${params.toString()}`);
  };

  return (
    <>
      {/* CSS override to hide horizontal scrollbars gracefully across mobile browsers */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* TOP HEADER: Scrolls out of view normally, not sticky */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="flex flex-col justify-center border-l-4 border-[#D4AF37] pl-3 py-1">
              <span className={`text-2xl md:text-3xl font-serif font-bold tracking-wider ${brandClasses.textNavy} leading-none mb-1 group-hover:text-[#D4AF37] transition-colors`}>
                INK <span className="text-[#D4AF37]">TELANGANA</span>
              </span>
              <span className="text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.15em] text-gray-500 uppercase">
                Your Voice | Your Story | Our Telangana
              </span>
            </div>
          </Link>

          {/* Search Bar - Only show on Home Page */}
          {pathname === '/' && (
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles, analysis..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-200 transition-all text-sm"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            </div>
          )}
        </div>
      </header>

      {/* STICKY SUB-NAVBAR: Only this bar remains fixed at the top */}
      <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full h-14">

            {/* Scrollable Navigation links container */}
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar flex-nowrap py-2 pr-4 h-full select-none">
              <Link
                href="/"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'All' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Home
              </Link>
              <Link
                href="/?category=Health"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'Health' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Health
              </Link>
              {/* <Link
                href="/mini-news"
                className={`hover:text-[#D4AF37] ${pathname === '/mini-news' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Mini News
              </Link> */}
              <Link
                href="/?category=InkThoughts"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'InkThoughts' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Ink Thoughts
              </Link>
              <Link
                href="/?category=InkSpecial"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'InkSpecial' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Ink Special
              </Link>
              <Link
                href="/?category=PublicIssues"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'PublicIssues' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Public Issues
              </Link>
              {/* <Link
                href="/?category=Politics"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'Politics' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Politics
              </Link> */}
              {/* <Link
                href="/?category=Business"
                className={`hover:text-[#D4AF37] ${pathname === '/' && currentCategory === 'Business' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                Business
              </Link> */}
              {/* <Link
                href="/my-comments"
                className={`hover:text-[#D4AF37] ${pathname === '/my-comments' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                My Comments
              </Link> */}
              <Link
                href="/about"
                className={`hover:text-[#D4AF37] ${pathname === '/about' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-800'} transition-colors font-semibold text-sm shrink-0 h-full flex items-center px-1`}
              >
                About
              </Link>
            </div>

            {/* Sticky "Contact Us" CTA pinned to the right edge */}
            <div className="flex-shrink-0 pl-4 bg-gradient-to-l from-white via-white/95 to-transparent h-full flex items-center">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-[#0B1B35] px-4 py-2 rounded-full hover:bg-yellow-500 transition-all shadow-sm font-bold text-[11px] uppercase tracking-wider whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}