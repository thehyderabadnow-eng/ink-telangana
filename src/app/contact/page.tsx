"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { ContactFormState } from '@/types';
import { brandClasses } from '@/utils/theme';

export default function ContactPage() {
  const [contactStatus, setContactStatus] = useState<string>('');
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '', email: '', phone: '', areaName: '', purpose: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('success');
    setContactForm({ name: '', email: '', phone: '', areaName: '', purpose: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-[#111111] rounded-2xl border border-gray-800 p-8 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
          <Mail className={`w-8 h-8 ${brandClasses.textGold}`} />
          <h1 className="text-3xl font-serif font-bold text-white">Contact Us</h1>
        </div>

        {contactStatus === 'success' ? (
          <div className="bg-green-900/20 border border-green-500/50 text-green-400 p-8 rounded-xl text-center shadow-inner">
            <h3 className="font-bold text-2xl mb-2">Message Sent!</h3>
            <p className="mb-6 text-gray-300">Thank you for reaching out. We have received your details and will review your enquiry shortly.</p>
            <Link href="/" className={`inline-block px-6 py-2 rounded-full ${brandClasses.bgGold} ${brandClasses.textNavy} font-bold hover:bg-yellow-500 transition-colors`}>
              Return to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="name@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                  <input type="tel" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 pl-10 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Mobile Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Area / Location</label>
                <input type="text" required value={contactForm.areaName} onChange={(e) => setContactForm({ ...contactForm, areaName: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Enter your area or city" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Purpose of Contact</label>
              <select required value={contactForm.purpose} onChange={(e) => setContactForm({ ...contactForm, purpose: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                <option value="" disabled>Select Purpose</option>
                <option value="Story Pitch / News Tip">Story Pitch / News Tip</option>
                <option value="Join The Team">Join The Team</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Detailed Message / Your Target</label>
              <textarea required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] h-32 resize-none transition-colors" placeholder="Please provide details about your enquiry..."></textarea>
            </div>

            <button type="submit" className={`w-full ${brandClasses.bgGold} ${brandClasses.textNavy} font-bold py-3.5 rounded-lg hover:bg-yellow-500 transition-all text-lg shadow-lg`}>
              Submit Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
}