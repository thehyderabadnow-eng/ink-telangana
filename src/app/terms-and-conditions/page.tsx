import React from 'react';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | Ink Telangana',
  description: 'Terms and Conditions for using Ink Telangana website. Please read these terms carefully before using our services.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Header */}
          <div className="bg-[#0B1B35] px-6 py-8 md:px-10 md:py-10 flex items-center gap-4">
            <FileText className="w-10 h-10 text-[#D4AF37]" />
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">Terms and Conditions</h1>
              <p className="text-gray-300 mt-2 text-sm md:text-base">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 text-gray-700 space-y-8 leading-relaxed">
            
            <section>
              <p>
                Welcome to <strong>Ink Telangana</strong>!
              </p>
              <p className="mt-4">
                These terms and conditions outline the rules and regulations for the use of Ink Telangana's Website, located at <a href="https://www.inktelangana.com" className="text-blue-600 hover:underline">www.inktelangana.com</a>.
              </p>
              <p className="mt-4">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Ink Telangana if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">1. Intellectual Property Rights</h2>
              <p>
                Other than the content you own, under these Terms, Ink Telangana and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
              </p>
              <p className="mt-3 font-semibold text-red-600">
                You must not:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Republish material from Ink Telangana without proper credit.</li>
                <li>Sell, rent or sub-license material from Ink Telangana.</li>
                <li>Reproduce, duplicate or copy material from Ink Telangana for commercial purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">2. User Content & Comments</h2>
              <p>
                Parts of this website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Ink Telangana does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Ink Telangana, its agents, and/or affiliates.
              </p>
              <p className="mt-3">
                Ink Telangana reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
              </p>
            </section>

            <section className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">3. Disclaimer of Warranties</h2>
              <p>
                This Website is provided "as is," with all faults, and Ink Telangana expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
              </p>
              <p className="mt-3">
                While we strive to provide accurate and up-to-date news and information, we make no warranties or representations as to the accuracy, reliability, or completeness of the content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">4. Limitation of Liability</h2>
              <p>
                In no event shall Ink Telangana, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Ink Telangana, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">5. Links to Other Websites</h2>
              <p>
                Our Website may contain links to third-party web sites or services that are not owned or controlled by Ink Telangana.
              </p>
              <p className="mt-3">
                Ink Telangana has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Ink Telangana shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">6. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us via email at <strong>contact@inktelangana.com</strong>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}