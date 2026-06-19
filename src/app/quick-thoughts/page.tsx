import { MessageSquare, PenTool, Clock } from 'lucide-react';
import { getAllThoughts } from '@/data';
import { brandClasses } from '@/utils/theme';

export default function QuickThoughtsPage() {
  const thoughts = getAllThoughts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10 border-b border-gray-800 pb-4">
          <MessageSquare className={`w-8 h-8 ${brandClasses.textGold}`} />
          <div>
            <h2 className="text-3xl font-serif font-bold text-white">Quick Thoughts</h2>
            <p className="text-gray-400 text-sm mt-1">Short commentary on ongoing political and social updates.</p>
          </div>
        </div>

        <div className="space-y-8">
          {thoughts.map((thought) => (
            <div key={thought.id} className="bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-[#D4AF37]/50 transition-colors shadow-md relative">
              <div className="absolute top-8 left-0 w-1.5 h-12 bg-[#D4AF37] rounded-r-md"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${brandClasses.bgNavy} flex items-center justify-center border border-[#D4AF37]`}>
                  <PenTool className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="block font-bold text-gray-200">INK TELANGANA</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {thought.date}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{thought.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}