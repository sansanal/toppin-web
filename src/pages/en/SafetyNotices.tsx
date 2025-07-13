
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SafetyNoticesEN = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Safety Notices
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  Date safely with Toppin
                </h2>
                <p className="text-gray-300">
                  At Toppin we know how important safety is for our users and that's why we prioritize it in everything we do.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  Tips for the perfect first date
                </h2>
                <p className="text-gray-300">
                  First dates always cause us nerves, insecurities, but also excitement. That's why we want to help you make the most of these special moments.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-toppin-blue mb-4">
                  How to end a match relationship
                </h2>
                <p className="text-gray-300">
                  Toppin is designed to meet people and enjoy every moment, to find the love of your life or simply have a good time with interesting people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetyNoticesEN;
