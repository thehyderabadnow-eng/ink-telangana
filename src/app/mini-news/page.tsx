"use client";

import React, { useState } from 'react';
import { MessageSquare, PenTool, Clock, Download, Loader2, Share2, ImageIcon } from 'lucide-react';
import { getAllNews } from '@/data';
import { brandClasses } from '@/utils/theme';

export default function MiniNewsPage() {
  const miniNews = getAllNews();
  const [isGenerating, setIsGenerating] = useState<number | null>(null);
  const [showShareToast, setShowShareToast] = useState<boolean>(false);

  // Default fallback image for Ink Telangana brand
  const defaultBrandImage = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTWreKJ7uGttF360OzhsjdRdj5eJXcbj6GPYj8oPIUBgtyONrfIc2tWFNr8JbHJC3xrpKZNDSfT_S21phvpxg2i5g0W4dyn86alymJTHL2xjIL3e2tpFkX6xwA8aUa1uf_5eMoDmjZPF4wM2blhUp6jgcWvqOY40tvxqihZAPfBL536yKXwA2gke2hUzM8/s320/ink-logo-compressed.png";

  // బ్రౌజర్ సెక్యూరిటీ (CORS) ఎర్రర్‌ని బైపాస్ చేసి ఇమేజ్ డౌన్‌లోడ్ అవ్వడానికి ప్రాక్సీ ఫంక్షన్
  const getProxiedImageUrl = (url: string) => {
    if (!url) return '';
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=png`;
  };

  const downloadAsImage = async (id: number) => {
    setIsGenerating(id);
    const element = document.getElementById(`thought-card-${id}`);
    if (!element) { setIsGenerating(null); return; }

    try {
      const htmlToImage = await import('html-to-image');

      const dataUrl = await htmlToImage.toPng(element, {
        pixelRatio: 2, // Reduced from 3 to improve stability
        skipFonts: true,
        cacheBust: true, // Force fresh image loading
        // ఇమేజ్‌ని బ్లాక్ చేసే filter ని ఇక్కడ నుండి తీసేశాను
        style: { fontFamily: 'sans-serif', margin: '0' }
      });

      const link = document.createElement('a');
      link.download = `ink-telangana-${id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
      alert('Unable to generate image. Please check your browser permissions.');
    } finally {
      setIsGenerating(null);
    }
  };

  const handleNativeShare = async (id: number, text: string) => {
    setIsGenerating(id);
    const element = document.getElementById(`thought-card-${id}`);
    if (!element) { setIsGenerating(null); return; }

    try {
      const htmlToImage = await import('html-to-image');
      const dataUrl = await htmlToImage.toPng(element, {
        pixelRatio: 2,
        skipFonts: true,
        cacheBust: true, // ఇక్కడ కూడా యాడ్ చేశాను
        // ఇమేజ్‌ని బ్లాక్ చేసే filter ని ఇక్కడ నుండి తీసేశాను
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `ink-telangana-${id}.png`, { type: 'image/png' });

      // Combine text and link for the share message
      const shareText = `${text}\n\nRead more at: ${window.location.origin}/mini-news`;

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Ink Telangana Update',
          text: shareText // This sends the text AND the link
        });
      } else {
        // Fallback for desktop/unsupported browsers
        navigator.clipboard.writeText(shareText);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);

        const link = document.createElement('a');
        link.download = `ink-telangana-${id}.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error('Share failed:', err);
    } finally {
      setIsGenerating(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-10 border-b border-gray-800 pb-4">
          <MessageSquare className={`w-8 h-8 ${brandClasses.textGold}`} />
          <div>
            <h2 className="text-3xl font-serif font-bold text-white">Mini News</h2>
            <p className="text-gray-400 text-sm mt-1">Quick, shareable updates and political commentary.</p>
          </div>
        </div>

        <div className="space-y-12">
          {miniNews.map((thought) => (
            <div key={thought.id} className="flex flex-col gap-3">

              {/* Way2News Style Card (THIS is what gets captured) */}
              <div
                id={`thought-card-${thought.id}`}
                className="flex flex-col bg-[#12161E] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative"
              >

                {/* 2. Image Banner Section */}
                <div className="w-full h-48 md:h-64 relative bg-[#0B1B35] overflow-hidden border-b border-gray-800">
                  <img
                    // Proxy ద్వారా ఇమేజ్ రప్పించడం వల్ల సెక్యూరిటీ బ్లాక్ ఉండదు
                    src={getProxiedImageUrl((thought as any).imageUrl || defaultBrandImage)}
                    alt="News Update"
                    crossOrigin="anonymous" // ఇప్పుడు ఇది సేఫ్ & వర్క్ అవుతుంది
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  {/* Brand overlay if default image is used */}
                  {!(thought as any).imageUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35]/90 to-transparent flex flex-col justify-end p-6">
                      <span className="text-[#D4AF37] font-serif font-bold text-2xl tracking-widest opacity-90 shadow-black drop-shadow-md">
                        INK TELANGANA
                      </span>
                    </div>
                  )}
                </div>

                {/* 1. Header Section */}
                <div className={`${brandClasses.bgNavy} px-6 py-4 flex justify-between items-center border-b border-[#D4AF37]/30`}>
                  <div className="flex items-center gap-3">
                    <div className={`${brandClasses.bgGold} p-2 rounded-full shadow-lg`}>
                      <PenTool className={`w-5 h-5 ${brandClasses.textNavy}`} />
                    </div>
                    <div>
                      <span className={`block font-serif font-bold ${brandClasses.textGold} tracking-widest leading-none text-lg`}>
                        INK TELANGANA
                      </span>
                      <span className="block text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold">
                        Mini News Update
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 flex items-center gap-1.5 font-medium bg-black/30 px-3 py-1.5 rounded-full border border-gray-700/50">
                    <Clock className={`w-3.5 h-3.5 ${brandClasses.textGold}`} />
                    {thought.date}
                  </div>
                </div>

                {/* 3. Content Section */}
                <div className="p-6 md:p-8 flex-grow relative bg-[#12161E]">
                  <MessageSquare className="absolute top-4 left-4 w-12 h-12 text-[#D4AF37] opacity-[0.03]" />
                  {/* టైటిల్ కలర్ మార్పు: text-[#FFD700] బ్రైట్ గోల్డ్ */}
                  <h2 className="text-[#D4AF37] font-bold text-xl leading-snug relative z-10 whitespace-pre-wrap mb-3 drop-shadow-md">
                    {thought.title}
                  </h2>
                  {/* టెక్స్ట్ కలర్ మార్పు: text-gray-100 */}
                  <p className="text-gray-100 text-lg md:text-xl leading-relaxed font-medium relative z-10 whitespace-pre-wrap">
                    {thought.text}
                  </p>
                </div>

                {/* 4. Footer Section */}
                <div className={`${brandClasses.bgGold} px-6 py-4 flex justify-between items-center`}>
                  <span className={`${brandClasses.textNavy} font-bold text-[10px] md:text-xs uppercase tracking-widest`}>
                    Your Voice | Your Story | Our Telangana
                  </span>
                  <div className={`flex items-center gap-2 ${brandClasses.bgNavy} ${brandClasses.textGold} px-4 py-1.5 rounded-full text-xs font-bold shadow-md`}>
                    {/* <Share2 className="w-3.5 h-3.5" /> */}
                    www.inktelangana.com
                  </div>
                </div>
              </div>

              {/* Action Bar (OUTSIDE the capture area) */}
              <div className="flex items-center justify-end gap-3 px-2">
                <button
                  onClick={() => handleNativeShare(thought.id, thought.text)}
                  disabled={isGenerating === thought.id}
                  className={`flex items-center gap-2 text-xs font-bold ${brandClasses.bgGold} ${brandClasses.textNavy} px-6 py-2.5 rounded-full hover:bg-yellow-500 transition-all shadow-md ${isGenerating === thought.id ? 'opacity-70' : ''}`}
                >
                  {isGenerating === thought.id ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Preparing...</>
                  ) : (
                    <><Share2 className="w-4 h-4" /> Share Update</>
                  )}
                </button>
                <button
                  onClick={() => downloadAsImage(thought.id)}
                  disabled={isGenerating === thought.id}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-800/50 px-4 py-2.5 rounded-full hover:text-white hover:bg-gray-800 transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copy Link Toast Notification (Fallback) */}
      {showShareToast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-5 z-[100] flex items-center gap-2 font-medium border border-gray-800">
          <Share2 className="w-4 h-4 text-[#D4AF37]" />
          Image saved and text copied to clipboard!
        </div>
      )}
    </div>
  );
}