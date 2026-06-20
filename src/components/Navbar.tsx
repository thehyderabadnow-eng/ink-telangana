"use client";

import React, { useState, useEffect } from 'react';
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
    <nav className="bg-white sticky top-0 z-50 shadow-2xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">

          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="flex flex-col justify-center border-l-4 border-[#D4AF37] pl-3 py-1">
              <span className={`text-2xl md:text-3xl font-serif font-bold tracking-wider ${brandClasses.textNavy} leading-none mb-1 group-hover:${brandClasses.textGold} transition-colors`}>
                INK <span className={brandClasses.textGold}>TELANGANA</span>
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
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-200 transition-all"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold border-t border-gray-200 pt-4">
          <Link href="/" className={`hover:${brandClasses.textGold} ${pathname === '/' && currentCategory === 'All' ? brandClasses.textGold : 'text-gray-800'} transition-colors`}>Home</Link>
          <Link href="/about" className={`hover:${brandClasses.textGold} ${pathname === '/about' ? brandClasses.textGold : 'text-gray-800'} transition-colors`}>About</Link>
          <Link href="/?category=Politics" className={`hover:${brandClasses.textGold} ${pathname === '/' && currentCategory === 'Politics' ? brandClasses.textGold : 'text-gray-800'} transition-colors`}>Politics</Link>
          <Link href="/?category=Business" className={`hover:${brandClasses.textGold} ${pathname === '/' && currentCategory === 'Business' ? brandClasses.textGold : 'text-gray-800'} transition-colors`}>Business</Link>
          {/* Renamed to Short News */}
          <Link href="/short-news" className="hover:text-[#D4AF37] text-gray-300 transition-colors">Short News</Link>

          {/* New 'My Comments' Link */}
          <Link href="/my-comments" className="hover:text-[#D4AF37] text-gray-300 transition-colors">My Comments</Link>
          <Link href="/contact" className={`${brandClasses.bgGold} ${brandClasses.textNavy} px-5 py-2.5 rounded-full hover:bg-yellow-500 transition-all ml-auto shadow-md font-bold text-xs uppercase tracking-wider`}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}