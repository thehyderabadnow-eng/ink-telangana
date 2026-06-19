"use client";

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton({ title, excerpt }: { title: string, excerpt: string }) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const currentUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url: currentUrl });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    }
  };

  return (
    <>
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors"
      >
        <Share2 className="w-4 h-4" /> Share Article
      </button>

      {/* Toast Notification */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <Check className="w-5 h-5" />
        <span className="font-semibold">Link copied to clipboard!</span>
      </div>
    </>
  );
}