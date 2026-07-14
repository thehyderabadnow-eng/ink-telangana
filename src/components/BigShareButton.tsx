"use client";

import React from 'react';
import { Share2 } from 'lucide-react';

export default function BigShareButton({ title, excerpt }: { title: string, excerpt: string }) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0B1B35] font-bold rounded-full hover:bg-[#b5952f] transition-all shadow-lg hover:-translate-y-1"
    >
      <Share2 className="w-5 h-5" /> Share Article
    </button>
  );
}