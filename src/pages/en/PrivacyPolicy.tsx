
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              At Toppin, we take your privacy seriously and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our dating application.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              complete your profile, or communicate with other users. This may include:
            </p>
            <ul className="space-y-2 pl-6">
              <li>• Personal information (name, email address, phone number, date of birth)</li>
              <li>• Profile information (photos, interests, preferences)</li>
              <li>• Location data (with your permission)</li>
              <li>• Messages and communications within the app</li>
              <li>• Usage data and analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2 pl-6">
              <li>• Create and maintain your account</li>
              <li>• Provide matchmaking services</li>
              <li>• Facilitate communication between users</li>
              <li>• Improve our services and user experience</li>
              <li>• Send you important updates and notifications</li>
              <li>• Ensure safety and security on our platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may share information in the following situations:
            </p>
            <ul className="space-y-2 pl-6">
              <li>• With other users as part of the matchmaking service</li>
              <li>• With service providers who help us operate our platform</li>
              <li>• When required by law or to protect our users' safety</li>
              <li>• In connection with a business transaction (merger, acquisition, etc.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="space-y-2 pl-6">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your account and data</li>
              <li>• Restrict processing of your data</li>
              <li>• Data portability</li>
              <li>• Object to processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
              and provide personalized content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Age Requirements</h2>
            <p>
              Toppin is intended for users who are 18 years of age or older. We do not knowingly collect 
              personal information from individuals under 18.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data during such transfers.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new policy on our app and updating the "last modified" date.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p><strong>Toppin Global Company, S.L.</strong></p>
              <p>C/ Algepeser, 64 -Nave 1 .46980 .Paterna (Valencia)</p>
              <p>Spain</p>
              <p>Email: privacy@toppin.es</p>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              Last updated: November 2024
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
