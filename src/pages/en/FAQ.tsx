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
      id: "registration",
      title: "REGISTRATION AND FIRST STEPS",
      questions: [
        {
          question: "How to create an account on Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Welcome to Toppin. To start enjoying this app you need to create an account. We explain below all the possible ways for you to start matching.
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Download the Toppin App for iOS</li>
                  <li>• Create an account through Facebook, Apple or sign up with your email</li>
                  <li>• Set up your profile</li>
                  <li>• Grant all required permissions</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Download the Toppin App for Android</li>
                  <li>• Create an account through Facebook, Google or sign up with your email</li>
                  <li>• Set up your profile</li>
                  <li>• Grant all required permissions</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          question: "Can I register without having a Facebook account?",
          answer: (
            <p className="text-gray-300">
              At Toppin we have several registration methods, so it's not necessary to have Facebook to enjoy our App. If you don't have a Facebook account you can register using a Google account, an Apple account or your email address. Let's enjoy!
            </p>
          )
        },
        {
          question: "How can I edit my profile?",
          answer: (
            <p className="text-gray-300">
              To change data or information related to your profile, enter the pencil icon and start editing your information. You can change photos, edit your biography, sexual orientation, include your gender, add different personal information and link Toppin to Spotify and Instagram. This way people you meet on the swiping screen will be able to get to know you much faster and know if they're interested in you!
            </p>
          )
        },
        {
          question: "How can I configure my search preferences?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to change the filters to find people more similar to you, you can do so from the swiping screen. If you follow this path – Top right icon, Filters icon – You can define your preferences by distance radius, age, gender, interests, etc.
              </p>
              <p className="text-gray-300">
                Let's meet people!
              </p>
            </div>
          )
        },
        {
          question: "What happens if I've been restricted on Toppin because of age?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Profiles under 18 years of age are not allowed. So you cannot register on Toppin if you are under 18 years old. If you haven't reached this age yet, don't worry, we'll be happy to see you when you turn 18!
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "matches",
      title: "MATCHES AND MESSAGES",
      questions: [
        {
          question: "How to send a message to a Match?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Once you have managed to match with another user you can start chatting. You can find the person in the Matches list and from there send them a message.
              </p>
            </div>
          )
        },
        {
          question: "Unmatch and send reports?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to undo a Match you can do so by opening the chat with that person and at the top of the chat page you will see three dots, when you click it a menu will open with the "Undo Match" option.
              </p>
              <p className="text-gray-300">
                If what you want to do is report a Match you can do so by opening the chat with that person and at the top of the chat page you will see three dots, when you click it a menu will open with the "Report" option.
              </p>
            </div>
          )
        },
        {
          question: "How do I report a profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to report a profile that has appeared on the app's swiping screen you can do so by going into their profile and scrolling down. You will see an option that says REPORT PROFILE.
              </p>
            </div>
          )
        },
        {
          question: "I undid a Match by mistake?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Undoing a Match is a permanent action and unfortunately cannot be redone.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "interests",
      title: "INTERESTS",
      questions: [
        {
          question: "How do I change my search preferences?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You can customize the function to discover new people. Go to settings and decide through the filters what type of profiles you want to see. Distance, age and gender are some of the filters you can select.
              </p>
              <p className="text-gray-300">
                This way you'll have more chances to match with your next date!
              </p>
            </div>
          )
        },
        {
          question: "How to manage your notifications?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to manage your notifications, activate or deactivate them you can do so within Profile {'>'} Settings {'>'} Notifications. There you can activate and deactivate the notifications you want or don't want to receive and everything related to them.
              </p>
            </div>
          )
        },
        {
          question: "How is Instagram linked to your profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to link your Instagram profile with Toppin you simply have to enter the settings within the app and click on link your Instagram account.
              </p>
              <p className="text-gray-300">
                Once linked, other users will be able to see your Instagram photos. This way they can get to know you better.
              </p>
            </div>
          )
        },
        {
          question: "Can Spotify be connected to your Toppin profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to link your Spotify profile with Toppin you simply have to enter the settings within the app and click on link your Spotify account.
              </p>
              <p className="text-gray-300">
                Once linked, other users will be able to see your favorite music from Spotify. This way they can get to know you better.
              </p>
            </div>
          )
        },
        {
          question: "Without a Spotify account can I link music to my profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                No, unfortunately the only way to share the music you like on your profile is through Spotify.
              </p>
            </div>
          )
        },
        {
          question: "What does it mean that a profile is verified?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                A verified profile is a profile that has successfully passed our identity verification method. A mark will appear that will let whoever visits your profile know that you are really the person using the account.
              </p>
            </div>
          )
        },
        {
          question: "How can I request a verified profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to request verification of your Toppin profile you simply have to enter the settings within the app and click on request verification.
              </p>
              <p className="text-gray-300">
                Once the request is sent, our team will review your account and notify you of the result of the verification process.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "billing",
      title: "BILLING AND PAYMENT",
      questions: [
        {
          question: "Can I restore my Toppin purchases?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, even if you change phones you can recover your purchases with your App Store or Google Play account. So you won't have to start the purchase process from scratch.
              </p>
            </div>
          )
        },
        {
          question: "How can I upgrade my current Toppin subscription?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to upgrade your Toppin subscription to a different one you can upgrade or improve the type of subscription you have simply by purchasing the one you want to have now and it will replace the old one.
              </p>
            </div>
          )
        },
        {
          question: "What payment methods are accepted?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to get one of our Premium or Supreme subscriptions to be able to access more functions within the app you can pay through your Apple Pay and Google Pay account.
              </p>
            </div>
          )
        },
        {
          question: "Can I switch my subscription to Toppin Premium and Toppin Supreme?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Yes, you can switch from Premium to Supreme whenever you want through a new purchase. No more charges will be made for the old subscription.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "payment-problems",
      title: "PROBLEMS WITH PAYMENTS OR BILLING",
      questions: [
        {
          question: "I cannot restore my purchase.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Subscriptions can be associated with only one Toppin account at a time.
              </p>
              <p className="text-gray-300">
                If you see an error message that says: "Your subscription is currently linked to an existing account", that will mean you already have an active subscription and it's not with the account you're currently logged into.
              </p>
              <p className="text-gray-300">
                If you want to use a subscription on a new Toppin account, you'll first have to delete your previous Toppin account. If you delete your account it will mean permanently deleting all your Matches, messages and all information associated with this account.
              </p>
              <div className="mt-4">
                <ul className="space-y-1 text-gray-300">
                  <li>• Log into the account you want to delete.</li>
                  <li>• Tap the profile icon</li>
                  <li>• Go to Settings</li>
                  <li>• Scroll down and select Delete account.</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Once this account is deleted you can purchase the subscription with your new account without any errors.
                </p>
              </div>
            </div>
          )
        },
        {
          question: "Have you recently changed devices?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you have changed mobile platforms, that is, going from iOS to Android or vice versa, we recommend that you cancel your current subscription and subscribe again on your new mobile device. It will be easier for you to manage the subscription.
              </p>
            </div>
          )
        },
        {
          question: "Are you still having problems?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If it still doesn't work you can write to Toppin support and we will try to help you as quickly as possible. Send us a screenshot with the error message that appears and we will try to give you a solution as quickly as possible.
              </p>
            </div>
          )
        },
        {
          question: "How can I cancel the subscription?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You should take into account the following aspects:
              </p>
              <div className="mt-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• Removing Toppin from your mobile will not cancel your subscription, so you will have to follow the next steps to avoid future charges.</li>
                  <li>• Even if you cancel your subscription you can enjoy all its benefits until the paid days you have left are finished.</li>
                  <li>• Even if you cancel your subscription this does not mean that a refund of payments and fees already paid previously will be issued.</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          question: "How to cancel?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Depending on the platform you used to subscribe you will have to follow different steps.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "mobile-billing",
      title: "BILLING ON IOS AND ANDROID",
      questions: [
        {
          question: "I cancelled a subscription but was charged again",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Make sure you have correctly cancelled your Toppin subscription. If you don't want future charges this will prevent them. This is how subscriptions are cancelled on both iOS and Android devices:
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• In your iPhone Settings {'>'} [your name] {'>'} iTunes and App Store</li>
                  <li>• At the top of the screen tap your Apple ID, then select "View Apple ID" (you may need to sign in)</li>
                  <li>• Scroll down and tap "Subscriptions"</li>
                  <li>• Choose which subscription you want to manage</li>
                  <li>• Tap "Cancel Subscription"</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 font-medium mb-2">If you subscribed using your Google Play Store account:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Go to play.google.com</li>
                      <li>• Check if you have correctly logged into your Google account.</li>
                      <li>• On the left, click My subscriptions.</li>
                      <li>• Find the Toppin subscription you want to cancel.</li>
                      <li>• Click Manage {'>'} Cancel Subscription.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-2">You can also do it from your Android device by following these steps:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Open the Google Play Store app.</li>
                      <li>• Check if you're signed in to the correct Google Account.</li>
                      <li>• Tap the menu icon {'>'} Subscriptions.</li>
                      <li>• Select the subscription you want to cancel.</li>
                      <li>• Tap Cancel subscription.</li>
                      <li>• Follow the instructions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          question: "Is my information secure?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                We do not store your information. Apple or Google store it directly on their platforms. For both companies, financial security is one of their main priorities.
              </p>
            </div>
          )
        },
        {
          question: "My billing problems",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you think you have been charged incorrectly, here's what you can do:
              </p>
              <div className="mt-4">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <p className="text-gray-300">
                  If your phone is an iPhone, you can contact Apple technical support and inform them of what happened. Transactions are handled directly by Apple, including refunds.
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <p className="text-gray-300">
                  Does your order number start with "GPA"? Then it was processed through Google Play where the purchase was made. We recommend that you contact Google Play technical support to inform them of this problem.
                </p>
              </div>
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
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-toppin-pink">
              Don't hesitate, ask us and we'll help you
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-toppin-blue">
              FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqSections
              .filter(section => section.questions.some(q => q.answer !== null))
              .map((section) => (
              <div key={section.id} className="space-y-2">
                <h2 className="text-toppin-blue font-bold text-base mb-3 text-center">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.questions
                    .filter(item => item.answer !== null)
                    .map((item, index) => (
                    <AccordionItem 
                      key={`${section.id}-${index}`} 
                      value={`${section.id}-${index}`}
                      className="border-0 bg-gray-100/10 rounded-lg px-3 border border-gray-400/20"
                    >
                      <AccordionTrigger className="text-left text-gray-300 hover:text-white text-xs py-3 [&>svg]:text-toppin-blue [&>svg]:h-3 [&>svg]:w-3">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 text-xs pb-3">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;