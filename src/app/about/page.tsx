import { Info } from 'lucide-react';
import { brandClasses } from '@/utils/theme';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-[#111111] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <h1 className={`text-4xl font-serif font-bold ${brandClasses.textGold} mb-8 flex items-center gap-3`}>
          <Info className="w-8 h-8" /> About Ink Telangana
        </h1>
        <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
          <p>Welcome to my personal platform. A space dedicated to independent political analysis, business stories, and the everyday struggles of our people.</p>
          <p>In an era of fleeting headlines, Ink Telangana seeks to provide deep, analytical perspectives on the shifts shaping our state. From the grassroots challenges of agricultural reform to the booming tech corridors of our cities, we aim to tell the stories that matter.</p>
          <div className="mt-8 p-6 bg-[#0B1B35] rounded-xl border-l-4 border-[#D4AF37]">
            <p className="text-[#D4AF37] font-serif text-xl font-bold italic m-0">
              "Your Voice | Your Story | Our Telangana."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}