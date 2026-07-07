import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Ink Telangana',
  description: 'Privacy Policy for Ink Telangana - Read about how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Header */}
          <div className="bg-[#0B1B35] px-6 py-8 md:px-10 md:py-10 flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">Privacy Policy</h1>
              <p className="text-gray-300 mt-2 text-sm md:text-base">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 text-gray-700 space-y-8 leading-relaxed">
            
            <section>
              <p>
                At <strong>Ink Telangana</strong>, accessible from <a href="https://www.inktelangana.com" className="text-blue-600 hover:underline">www.inktelangana.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ink Telangana and how we use it.
              </p>
              <p className="mt-4">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>mail.vamshibtech@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">1. Log Files</h2>
              <p>
                Ink Telangana follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">2. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Ink Telangana uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">3. Google DoubleClick DART Cookie (Google AdSense)</h2>
              <p className="mb-3">
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.inktelangana.com and other sites on the internet.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                <li>Users may opt-out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">www.aboutads.info</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">4. Third Party Privacy Policies</h2>
              <p>
                Ink Telangana's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p className="mt-3">
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">5. Children's Information</h2>
              <p>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p className="mt-3">
                Ink Telangana does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0B1B35] mb-3">6. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}