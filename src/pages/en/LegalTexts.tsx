
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalTextsEN = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Legal Texts
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              This section contains important legal information about the use of Toppin and our services.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Company Information</h2>
            <p>
              Toppin is operated by Toppin Global Company, S.L., with registered office at C/Algepsers, 64 - Nave 1, 46980 Paterna (Valencia), Spain.
              Commercial register: [Registration number]
              CIF/NIF: B16886756
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Copyright</h2>
            <p>
              All content of this application, including texts, images, logos and designs, are protected by copyright and are the property of Toppin or its licensors.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Limitation of Liability</h2>
            <p>
              Toppin strives to provide a reliable service, but cannot guarantee the continuous availability of the service or the accuracy of all information provided by users.
            </p>

            <h2 className="text-2xl font-bold text-toppin-blue mt-8 mb-4">Dispute Resolution</h2>
            <p>
              Any dispute related to the use of Toppin will be resolved through arbitration or in the competent courts of Spain.
            </p>

            <p className="mt-8">
              For more legal information or specific inquiries, contact our legal department at legal@toppin.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalTextsEN;
