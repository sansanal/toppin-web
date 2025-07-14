
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "General Information",
      id: "general",
      questions: [
        {
          question: "How do I create an account on Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You can create an account by downloading our app and signing up with your email, Facebook, or Google account. Simply follow the registration process and complete your profile to start meeting new people.
              </p>
            </div>
          )
        },
        {
          question: "Is Toppin free to use?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, Toppin is free to download and use with basic features. We also offer premium subscriptions (Sweet, Premium, and Supreme) that unlock additional features like unlimited likes, advanced filters, and priority matching.
              </p>
            </div>
          )
        },
        {
          question: "How does the matching system work?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Our matching system uses your preferences, location, and profile information to suggest compatible users. You can swipe through profiles and when two users like each other, it creates a match and you can start chatting.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: "Features and Premium Services",
      id: "features",
      questions: [
        {
          question: "What are Donuts, Muffins, and Gummy Bears?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                These are special features in Toppin that help you get more visibility and matches. Donuts can boost your profile, Muffins help you stand out to someone special, and Gummy Bears give you extra super likes to show strong interest.
              </p>
            </div>
          )
        },
        {
          question: "How do I verify my profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Profile verification helps build trust in our community. You can verify your profile by following the verification process in your settings, which typically involves taking a selfie that matches your profile photos.
              </p>
            </div>
          )
        },
        {
          question: "Can I change my location?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                With a premium subscription, you can change your location to connect with people in different cities. This feature is perfect for when you're traveling or want to meet people in a specific area.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: "Safety and Support",
      id: "safety",
      questions: [
        {
          question: "How do I report inappropriate behavior?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you encounter inappropriate behavior, you can report users directly from their profile or from your chat. We take all reports seriously and will investigate accordingly to maintain a safe community.
              </p>
            </div>
          )
        },
        {
          question: "Is my personal information safe?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, we take your privacy and security very seriously. We use industry-standard encryption and security measures to protect your personal information. Please review our Privacy Policy for detailed information about how we handle your data.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: "Account Management",
      id: "account",
      questions: [
        {
          question: "Can I delete my account?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, you can delete your account at any time through the settings menu. Please note that once deleted, all your data will be permanently removed and cannot be recovered.
              </p>
            </div>
          )
        },
        {
          question: "How do I cancel my subscription?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You can cancel your subscription through your device's app store (Google Play Store or Apple App Store) or contact our support team. Cancellation will prevent future charges but you'll keep premium features until the current period ends.
              </p>
            </div>
          )
        },
        {
          question: "Can I restore my Toppin purchases?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, even if you change your phone, you can recover your purchases with your App Store or Google Play account. So you won't have to start the purchasing process from scratch.
              </p>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg mb-8">
              Find answers to the most common questions about Toppin. If you can't find what you're looking for, 
              feel free to contact our support team.
            </p>

            <div className="space-y-8">
              {faqSections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <h2 className="text-2xl font-bold text-toppin-blue border-b border-gray-700 pb-2">
                    {section.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {section.questions.map((faq, index) => (
                      <AccordionItem 
                        key={`${section.id}-${index}`} 
                        value={`${section.id}-item-${index}`} 
                        className="border border-gray-700 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-toppin-pink">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-toppin-blue mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-4">
                If you couldn't find the answer you were looking for, our support team is here to help.
              </p>
              <p className="text-gray-300">
                Contact us at: <a href="mailto:support@toppin.es" className="text-toppin-pink hover:underline">support@toppin.es</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
