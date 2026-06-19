"use client";

import { useState, useMemo } from 'react';
import { Search, PenTool, ArrowLeft, MessageSquare, Clock, Mail, Info, Phone } from 'lucide-react';

// --- TYPESCRIPT INTERFACES ---
interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  isTopStory: boolean;
}

interface Thought {
  id: number;
  text: string;
  date: string;
}

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  areaName: string;
  purpose: string;
  message: string;
}

// --- MOCK DATA ---
const INITIAL_ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Future of Telangana's Tech Infrastructure",
    date: "June 19, 2026",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Analyzing the rapid expansion of tier-2 cities in Telangana and how local businesses are adapting to global technological demands.",
    content: "The landscape of business in Telangana is undergoing a monumental shift. Beyond the bustling IT corridors of Hyderabad, districts like Warangal and Karimnagar are seeing a surge in tech incubation. This isn't just about large corporations; it's about grassroots innovation...\n\n(This is a placeholder for your full, in-depth article content. In your actual Next.js application, this would be loaded from a database or Markdown file.)",
    isTopStory: true
  },
  {
    id: 2,
    title: "Voices from the Ground: Agricultural Reforms & Rural Resilience",
    date: "June 15, 2026",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1595806652150-13175c5b4e2f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A deep dive into how recent policy changes are affecting local farmers and the evolving dialogue around sustainable agriculture.",
    content: "When we talk about policy, we must first talk about the people it affects. I spent the last week traveling through rural Telangana, speaking with the farmers who are the backbone of our state's economy...\n\n(This is a placeholder for your full, in-depth article content.)",
    isTopStory: true
  },
  {
    id: 3,
    title: "Political Shifts: Preparing for the Next Decade",
    date: "June 10, 2026",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=800&q=80",
    excerpt: "Examining the changing political dynamics and what it means for the socio-economic future of the state.",
    content: "Politics is never static. The recent shifts in public sentiment highlight a growing demand for transparency and actionable results. Let's analyze the core components of these changing dynamics...\n\n(This is a placeholder for your full, in-depth article content.)",
    isTopStory: false
  },
  {
    id: 4,
    title: "The Rise of Women Entrepreneurs in Handloom",
    date: "June 5, 2026",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    excerpt: "How traditional weavers in Sircilla and Pochampally are leveraging e-commerce to go global.",
    content: "The handloom sector in Telangana is seeing a digital renaissance. Women entrepreneurs are bypassing traditional middlemen to sell directly to global consumers...\n\n(This is a placeholder for your full, in-depth article content.)",
    isTopStory: false
  }
];

const INITIAL_THOUGHTS: Thought[] = [
  {
    id: 1,
    text: "The recent discussions surrounding urban development in tier-2 cities often miss a critical component: heritage preservation. We cannot sacrifice our historical identity for concrete jungles. True progress integrates the past with the future, ensuring sustainable growth that honors our roots.",
    date: "June 18, 2026"
  },
  {
    id: 2,
    text: "Just wrapped up an observation of the local municipal meetings. The narrative is shifting significantly towards youth employment and skill development. It is highly encouraging to see grassroots leaders prioritizing actionable economic policies over pure rhetoric.",
    date: "June 12, 2026"
  },
  {
    id: 3,
    text: "A quick note on the agricultural supply chain: direct-to-consumer models are finally taking hold in rural Telangana. Farmers are seeing a 20% increase in profit margins simply by utilizing regional digital marketplaces. This is the kind of empowerment we need to scale.",
    date: "June 5, 2026"
  }
];

export default function App() {
  // --- STATE MANAGEMENT ---
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Contact Form State
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    areaName: '',
    purpose: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<string>('');

  // --- DERIVED DATA ---
  const filteredArticles = useMemo(() => {
    let filtered = INITIAL_ARTICLES;
    if (activeCategory !== 'All') {
      filtered = filtered.filter(article => article.category === activeCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [searchQuery, activeCategory]);

  const topStories = filteredArticles.filter(a => a.isTopStory);
  const latestStories = filteredArticles.filter(a => !a.isTopStory);

  // --- HANDLERS ---
  const handleNavigateToArticle = (article: Article) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (view: string, category: string = 'All') => {
    setActiveArticle(null);
    setCurrentView(view);
    setActiveCategory(category);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  // --- BRAND COLORS ---
  const brandClasses = {
    bgNavy: "bg-[#0B1B35]",
    textNavy: "text-[#0B1B35]",
    borderNavy: "border-[#0B1B35]",
    bgGold: "bg-[#D4AF37]",
    textGold: "text-[#D4AF37]",
    borderGold: "border-[#D4AF37]",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-gray-100">

      {/* --- NAVIGATION BAR --- */}
      <nav className={`${brandClasses.bgNavy} text-white sticky top-0 z-50 shadow-2xl border-b border-[#D4AF37]/20`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">

            {/* Logo Area (UPDATED WITH WHITE BACKGROUND & BETTER HEIGHT) */}
            <div
              className="flex items-center gap-3 cursor-pointer group bg-white px-5 py-2 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-b-4 border-[#D4AF37] hover:bg-gray-50 transition-all"
              onClick={() => handleNavigate('home')}
            >
              <div className="relative h-16 md:h-20 w-[200px] flex items-center justify-center">
                <img
                  src="http://googleusercontent.com/image_generation_content/0"
                  alt="Ink Telangana Logo"
                  className="h-full w-full object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Search Bar */}
            {currentView === 'home' && (
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles, analysis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold border-t border-slate-700/50 pt-3">
            <button onClick={() => handleNavigate('home')} className={`hover:${brandClasses.textGold} ${currentView === 'home' && activeCategory === 'All' ? brandClasses.textGold : 'text-gray-300'} transition-colors`}>Home</button>
            <button onClick={() => handleNavigate('about')} className={`hover:${brandClasses.textGold} ${currentView === 'about' ? brandClasses.textGold : 'text-gray-300'} transition-colors`}>About</button>
            <button onClick={() => handleNavigate('home', 'Politics')} className={`hover:${brandClasses.textGold} ${activeCategory === 'Politics' ? brandClasses.textGold : 'text-gray-300'} transition-colors`}>Politics</button>
            <button onClick={() => handleNavigate('home', 'Business')} className={`hover:${brandClasses.textGold} ${activeCategory === 'Business' ? brandClasses.textGold : 'text-gray-300'} transition-colors`}>Business</button>
            <button onClick={() => handleNavigate('quick-thoughts')} className={`hover:${brandClasses.textGold} ${currentView === 'quick-thoughts' ? brandClasses.textGold : 'text-gray-300'} transition-colors`}>Quick Thoughts</button>
            <button onClick={() => handleNavigate('contact')} className={`${brandClasses.bgGold} ${brandClasses.textNavy} px-4 py-1.5 rounded-full hover:bg-yellow-500 transition-all ml-auto shadow-md`}>Contact Us</button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* --- HOME VIEW --- */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-500 space-y-12">

            {/* NO RESULTS */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No articles found matching your criteria.</p>
              </div>
            )}

            {/* TOP STORIES */}
            {topStories.length > 0 && (!searchQuery) && activeCategory === 'All' && (
              <section>
                <h2 className={`text-2xl font-serif font-bold text-white mb-6 border-l-4 ${brandClasses.borderGold} pl-3`}>
                  Top Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topStories.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => handleNavigateToArticle(article)}
                      className="relative rounded-xl overflow-hidden cursor-pointer group h-[30rem] shadow-xl shadow-black/50 bg-slate-900"
                    >
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] via-[#0B1B35]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end h-full">
                        <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider self-start mb-4`}>
                          {article.category}
                        </span>
                        <h3 className="text-3xl font-bold font-serif text-white leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 mt-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-5 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          <Clock className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* LATEST STORIES */}
            {latestStories.length > 0 && (
              <section>
                <h2 className={`text-2xl font-serif font-bold text-white mb-6 border-l-4 ${brandClasses.borderGold} pl-3`}>
                  {searchQuery ? 'Search Results' : (activeCategory === 'All' ? 'Latest Stories' : `${activeCategory} Stories`)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestStories.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => handleNavigateToArticle(article)}
                      className="relative rounded-xl overflow-hidden cursor-pointer group h-[22rem] shadow-xl shadow-black/50 bg-slate-900"
                    >
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] via-[#0B1B35]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute bottom-0 left-0 p-5 w-full z-10 flex flex-col justify-end h-full">
                        <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider self-start mb-3`}>
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold font-serif text-white leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-3">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-300 mt-4 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* --- ABOUT VIEW --- */}
        {currentView === 'about' && (
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
        )}

        {/* --- QUICK THOUGHTS VIEW --- */}
        {currentView === 'quick-thoughts' && (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
            <div className="flex items-center gap-3 mb-10 border-b border-gray-800 pb-4">
              <MessageSquare className={`w-8 h-8 ${brandClasses.textGold}`} />
              <div>
                <h2 className="text-3xl font-serif font-bold text-white">Quick Thoughts</h2>
                <p className="text-gray-400 text-sm mt-1">Short commentary on ongoing political and social updates.</p>
              </div>
            </div>

            <div className="space-y-8">
              {INITIAL_THOUGHTS.map((thought) => (
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
        )}

        {/* --- CONTACT US VIEW --- */}
        {currentView === 'contact' && (
          <div className="max-w-2xl mx-auto bg-[#111111] rounded-2xl border border-gray-800 p-8 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
              <Mail className={`w-8 h-8 ${brandClasses.textGold}`} />
              <h1 className="text-3xl font-serif font-bold text-white">Contact Us</h1>
            </div>

            {contactStatus === 'success' ? (
              <div className="bg-green-900/20 border border-green-500/50 text-green-400 p-8 rounded-xl text-center shadow-inner">
                <h3 className="font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="mb-6 text-gray-300">Thank you for reaching out. We have received your details and will review your enquiry shortly.</p>
                <button
                  onClick={() => handleNavigate('home')}
                  className={`px-6 py-2 rounded-full ${brandClasses.bgGold} ${brandClasses.textNavy} font-bold hover:bg-yellow-500 transition-colors`}
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactStatus('success');
                  setContactForm({ name: '', email: '', phone: '', areaName: '', purpose: '', message: '' });
                }}
                className="space-y-6"
              >
                {/* Personal Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Phone & District Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 pl-10 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Area / Location</label>
                    <input
                      type="text"
                      required
                      value={contactForm.areaName}
                      onChange={(e) => setContactForm({ ...contactForm, areaName: e.target.value })}
                      className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Enter your area or city"
                    />
                  </div>
                </div>

                {/* Purpose of Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Purpose of Contact</label>
                  <select
                    required
                    value={contactForm.purpose}
                    onChange={(e) => setContactForm({ ...contactForm, purpose: e.target.value })}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                  >
                    <option value="" disabled>Select Purpose</option>
                    <option value="Story Pitch / News Tip">Story Pitch / News Tip</option>
                    <option value="Join The Team">Join The Team</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Detailed Message / Your Target</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] h-32 resize-none transition-colors"
                    placeholder="Please provide details about your enquiry, story, or target goals..."
                  ></textarea>
                </div>

                <button type="submit" className={`w-full ${brandClasses.bgGold} ${brandClasses.textNavy} font-bold py-3.5 rounded-lg hover:bg-yellow-500 transition-all text-lg shadow-lg`}>
                  Submit Details
                </button>
              </form>
            )}
          </div>
        )}

        {/* --- ARTICLE VIEW --- */}
        {currentView === 'article' && activeArticle && (
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-900 animate-in fade-in duration-500">
            <div className="p-6 md:p-10">
              <button
                onClick={() => handleNavigate('home', activeCategory)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1B35] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>

              <div className="mb-8">
                <span className={`${brandClasses.bgGold} ${brandClasses.textNavy} text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wide inline-block mb-5`}>
                  {activeArticle.category}
                </span>
                <h1 className={`text-3xl md:text-5xl font-serif font-bold ${brandClasses.textNavy} leading-tight mb-6`}>
                  {activeArticle.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-500 text-sm border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{activeArticle.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-72 md:h-[28rem]">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
                <p className="text-xl text-gray-600 font-medium italic mb-10 border-l-4 border-[#D4AF37] pl-5">
                  {activeArticle.excerpt}
                </p>
                {activeArticle.content}
              </div>
            </div>
          </article>
        )}
      </main>

      {/* --- FOOTER --- */}
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
            <button onClick={() => handleNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Home</button>
            <button onClick={() => handleNavigate('about')} className="hover:text-[#D4AF37] transition-colors">About</button>
            <button onClick={() => handleNavigate('home', 'Politics')} className="hover:text-[#D4AF37] transition-colors">Politics</button>
            <button onClick={() => handleNavigate('home', 'Business')} className="hover:text-[#D4AF37] transition-colors">Business</button>
            <button onClick={() => handleNavigate('quick-thoughts')} className="hover:text-[#D4AF37] transition-colors">Quick Thoughts</button>
            <button onClick={() => handleNavigate('contact')} className="hover:text-[#D4AF37] transition-colors">Contact Us</button>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-gray-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Ink Telangana. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}