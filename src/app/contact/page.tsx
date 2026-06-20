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
  
  // State for validation errors and submission status
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<ContactFormState> = {};
    
    if (contactForm.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) newErrors.email = "Please enter a valid email address.";
    if (!/^\d{10}$/.test(contactForm.phone.replace(/\D/g, ''))) newErrors.phone = "Phone number must be exactly 10 digits.";
    if (contactForm.areaName.trim().length < 3) newErrors.areaName = "Please enter a valid area or city.";
    if (!contactForm.purpose) newErrors.purpose = "Please select a purpose.";
    if (contactForm.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters long.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Run Validation
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "bb2b3337-c94b-4e1f-8552-d8a90742a10e",
          subject: `New Contact Form Submission: ${contactForm.purpose}`,
          from_name: "Ink Telangana Website",
          ...contactForm
        })
      });

      if (response.ok) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', phone: '', areaName: '', purpose: '', message: '' });
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                <input type="text" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors`} placeholder="Enter your name" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors`} placeholder="name@example.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                  <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 pl-10 focus:outline-none focus:border-[#D4AF37] transition-colors`} placeholder="10-digit Mobile Number" />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                <input type="text" value={contactForm.areaName} onChange={(e) => setContactForm({ ...contactForm, areaName: e.target.value })} className={`w-full bg-black border ${errors.areaName ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors`} placeholder="Enter your area or city" />
                {errors.areaName && <p className="text-red-500 text-xs mt-1">{errors.areaName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Purpose of Contact</label>
              <select value={contactForm.purpose} onChange={(e) => setContactForm({ ...contactForm, purpose: e.target.value })} className={`w-full bg-black border ${errors.purpose ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none`}>
                <option value="" disabled>Select Purpose</option>
                <option value="Story Pitch / News Tip">Story Pitch / News Tip</option>
                <option value="Join The Team">Join The Team</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                <option value="Other">Other</option>
              </select>
              {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Detailed Message</label>
              <textarea value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg p-3 focus:outline-none focus:border-[#D4AF37] h-32 resize-none transition-colors`} placeholder="Please provide details about your enquiry..."></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button disabled={isSubmitting} type="submit" className={`w-full ${brandClasses.bgGold} ${brandClasses.textNavy} font-bold py-3.5 rounded-lg hover:bg-yellow-500 transition-all text-lg shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isSubmitting ? 'Sending...' : 'Submit Details'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}