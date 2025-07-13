
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CommunityGuidelinesEN = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-toppin-pink">
            Community Guidelines
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              TOPPIN provides access to a multitude of information, services, programs or data (hereinafter, "the contents") belonging to THE OWNER or its licensors that you may have access to.
            </p>

            <p>
              The user assumes responsibility for the use of the portal. Such responsibility extends to the registration that may be necessary to access certain services or content. In such registration you will be responsible for providing truthful and lawful information. As a consequence of this registration, you may be provided with a password for which you will be responsible, committing yourself to make diligent and confidential use of it.
            </p>

            <p>
              You agree to make appropriate use of the contents and services (e.g. chat services, discussion forums or newsgroups) that THE OWNER offers through the application. By using our service, you agree not to use it for any purpose that is illegal or prohibited by this Agreement. Without limitation, you agree not to perform the following actions:
            </p>

            <ul className="space-y-3 pl-6 list-disc">
              <li>Engage in unlawful, illegal activities or activities contrary to good faith and public order.</li>
              <li>Disseminate racist, xenophobic, illegal pornographic content, apology for terrorism or content that violates human rights.</li>
              <li>Cause damage to the physical and logical systems of TOPPIN, its suppliers or third parties, introduce or disseminate computer viruses or any other physical or logical systems that are likely to cause the aforementioned damage.</li>
              <li>Attempt to access and, where appropriate, use the email accounts of other users and modify or manipulate their messages.</li>
              <li>Use the application or the information contained therein for commercial, political, advertising purposes and for any commercial use, especially in sending unsolicited emails.</li>
              <li>In general, any other unlawful or prohibited purpose, especially when your account has already been cancelled by us for any of these reasons.</li>
            </ul>

            <p>
              THE OWNER reserves the right to remove all those comments and contributions that violate respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, that attack youth or childhood, order or public safety or that, in its judgment, would not be suitable for publication. In any case, THE OWNER will not be responsible for the opinions expressed by users through forums, chats, or other participation tools.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityGuidelinesEN;
