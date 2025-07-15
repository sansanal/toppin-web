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
      title: "TOPPIN FEATURES",
      id: "toppin-features",
      questions: [
        {
          question: "Toppin Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Haven't tried Toppin Sweet yet? Play the roulette and win prizes that you can spend within Toppin and that will help you find your ideal match.
              </p>
              <p className="text-gray-300">
                The first spin is free.
              </p>
              <p className="text-gray-300">
                You can buy Toppin Sweet within the app.
              </p>
            </div>
          )
        },
        {
          question: "Super Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Send a Super Sweet to the profile you like the most, this way they'll receive a notification of your match and you won't have to wait for your profile to appear to them.
              </p>
              <p className="text-gray-300">
                And if they like your profile and give you a like, you'll have the perfect match!
              </p>
              <p className="text-gray-300">
                You can buy Super Sweet within the app.
              </p>
            </div>
          )
        },
        {
          question: "Power Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Increase your chances of matching by becoming the most appetizing sweet and shine with your matches for 30 minutes.
              </p>
              <p className="text-gray-300">
                You can buy Power Sweet within the app.
              </p>
            </div>
          )
        },
        {
          question: "Destination",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                With the Destination function you can geolocate your searches in different geographic areas.
              </p>
              <p className="text-gray-300">
                A new way to meet people during your vacations!
              </p>
            </div>
          )
        },
        {
          question: "Go Back",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Regret a match? Did you want to see a discarded profile again?
              </p>
              <p className="text-gray-300">
                With this option you can make the decision again whether to match or not.
              </p>
            </div>
          )
        },
        {
          question: "Unlimited Likes",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                With your premium or supreme subscription you can give unlimited likes per month while you remain subscribed to one of the two options.
              </p>
              <p className="text-gray-300">
                If you don't have any premium or supreme subscription you can have unlimited likes by purchasing one of the two subscriptions and you can continue topping without limits.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: "TROUBLESHOOTING",
      id: "troubleshooting",
      questions: [
        {
          question: "I can't log into my account.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you're having difficulty logging into the app, these troubleshooting steps usually help with login issues:
              </p>
              <p className="text-gray-300">
                Check if you have a good internet connection, or switch from Wi-Fi to mobile data or vice versa to determine if the problem is related to your connection.
              </p>
              <p className="text-gray-300">
                Delete and reinstall the application. This will not only update you to the latest version of Toppin, but will also update your app experience, which should make things work as they should again.
              </p>
              <p className="text-gray-300">
                If the problem persists, we want to know about it. Contact us through our email support@toppin.es and describe your problem with as much detail as possible, so we can analyze and resolve it.
              </p>
            </div>
          )
        },
        {
          question: "My account has been disabled.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If your Toppin account has been closed, you'll see a message notifying you when you try to log in. At Toppin we close accounts when we detect activities that violate our terms of use. If you think it's an error you can contact us through our email support@toppin.es and we'll try to solve it.
              </p>
            </div>
          )
        },
        {
          question: "I want to update the email address associated with my account.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Follow these steps to update the email address associated with your Toppin account:
              </p>
              <p className="text-gray-300">
                Open the Toppin app<br/>
                Go to the profile icon<br/>
                Open the Toppin app<br/>
                Go to the profile icon<br/>
                Open the Toppin app
              </p>
            </div>
          )
        },
        {
          question: "The app crashes.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                This can be a bit exhausting sometimes, we know. But we're going to help you! It might be due to one of the following reasons:
              </p>
              <p className="text-gray-300">
                First make sure if you have a good internet connection, or switch from Wi-Fi to mobile data or vice versa to determine if the problem is related to your connection.
              </p>
              <p className="text-gray-300">
                If the above doesn't work try to Delete and Reinstall the application. In addition to updating to the latest version of Toppin, it will also update your app experience, this should make it work as it should.
              </p>
              <p className="text-gray-300">
                If it's a technical problem we're probably already working on fixing it. It's a matter of waiting!
              </p>
            </div>
          )
        },
        {
          question: "How can I know which email address is associated with the account?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you've forgotten or want to know which email address is associated with your Toppin account you can find it within Settings {'>'} Notifications {'>'} Email. There you'll see the email you registered with.
              </p>
            </div>
          )
        },
        {
          question: "In case it's from an iPhone device",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Opening your iPhone Settings<br/>
                Tap on your name, and then in the "Subscriptions" section<br/>
                Select the subscription you want to cancel<br/>
                Tap "Cancel subscription"
              </p>
            </div>
          )
        },
        {
          question: "In case it's from an Android device:",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you paid for the subscription using your Google Play Store account:
              </p>
              <p className="text-gray-300">
                On your Android phone open the Google Play Store app.<br/>
                Then tap on the "Menu" icon and go to "Subscriptions"<br/>
                Choose the subscription you want to cancel<br/>
                Tap "Cancel subscription"
              </p>
              <p className="text-gray-300">
                If your subscription payment method was with a credit card:
              </p>
              <p className="text-gray-300">
                Open the Toppin app for Android<br/>
                Tap the profile icon<br/>
                Select "Manage payment account"<br/>
                Tap "Cancel subscription".
              </p>
            </div>
          )
        },
        {
          question: "I have problems canceling my subscription.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Depending on the platform the steps will vary, so you'll have to make sure to follow the corresponding steps.
              </p>
              <p className="text-gray-300">
                Enter your App Store or Play Store account – Profile – In the "Subscriptions" section you can manage the subscriptions you have. If you have a subscription in Toppin you'll see a button that says "Cancel subscription".
              </p>
              <p className="text-gray-300">
                From there nothing should be charged again, although you'll be able to continue enjoying the benefits of your subscription until the end of the cycle.
              </p>
            </div>
          )
        },
        {
          question: "I have duplicate or incorrect charges.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>iOS</strong>
              </p>
              <p className="text-gray-300">
                If your phone is an iPhone, you can contact Apple technical support and inform them of what happened.
              </p>
              <p className="text-gray-300">
                Transactions are handled directly by Apple, including refunds.
              </p>
              <p className="text-gray-300">
                <strong>Android</strong>
              </p>
              <p className="text-gray-300">
                Does your order number start with "GPA"?<br/>
                Then it was processed through Google Play where the purchase was made.
              </p>
              <p className="text-gray-300">
                We recommend that you contact Google Play technical support to inform them of this problem.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: "THE PAYMENT METHOD I'M TRYING TO USE DOESN'T WORK",
      id: "payment-issues",
      questions: [
        {
          question: "These are the most common problems with payment methods",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Typographical errors: Keep in mind that all letters, numbers and any digit you use must be identical to those on your credit/debit card.
              </p>
              <p className="text-gray-300">
                Use of gift cards, prepaid cards and certain debit cards: If you acquire a subscription, gift cards, prepaid cards and certain debit cards may not accept recurring payments.
              </p>
              <p className="text-gray-300">
                If you have problems with the billing address: Have you moved recently? Do you need to update your billing information? Check that the data entered regarding the billing address is correct.
              </p>
            </div>
          )
        },
        {
          question: "View payment history.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to see your payment history you can do so in your iOS or Android account within your profile of either of these two platforms. Depending on which one you used to pay for your purchases you can locate it in one or the other.
              </p>
            </div>
          )
        },
        {
          question: "If you made a purchase using your Apple ID, you can find your payment history by following these steps:",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Open iTunes on your computer<br/>
                Sign in with your Apple ID click on your name, in the upper right corner of the iTunes window<br/>
                Select Account Details in the dropdown menu<br/>
                Scroll down until you reach Purchase History {'>'} View all<br/>
                Click on the arrow that appears to the left of the purchase date and you can see the details of a purchase.
              </p>
            </div>
          )
        },
        {
          question: "If you made the purchase from a Google Play account, you can see your payment history by following these steps:",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Go to pay.google.com website and sign in using your Google Play account<br/>
                Find Other purchase activities<br/>
                Select View purchases<br/>
                Choose a specific order and you can see its receipt
              </p>
            </div>
          )
        },
        {
          question: "I have a Toppin subscription and haven't received my monthly PowerSweet.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you recently renewed your Toppin subscription, it won't affect your waiting period to receive the next PowerSweet. The 30-day waiting period is based on the last time you used your free monthly PowerSweet, not on renewing or restoring a subscription.
              </p>
              <p className="text-gray-300">
                When you use your free PowerSweet, you'll have to wait 30 days to use your next free PowerSweet, unless you decide to buy a batch of additional PowerSweets.
              </p>
            </div>
          )
        },
        {
          question: "I used a SuperSweet but didn't get any mutual \"Match\".",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                SuperSweets are there just for that, to give that boost that every profile needs. You'll appear to people in your area much faster. You'll increase the chances of finding that connection you're waiting for so much!
              </p>
              <p className="text-gray-300">
                The number of times your profile will appear will increase by up to 10 times more with a SuperSweet.
              </p>
              <p className="text-gray-300">
                Although the SuperSweet as such cannot guarantee a Match, they are very very effective in helping you have one. Even after it's finished you'll know you got a Match thanks to the SuperSweet because a yellow star will appear indicating it.
              </p>
            </div>
          )
        },
        {
          question: "Super Sweets, PowerSweet, read receipts etc... Will they disappear if I create a new account?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Unfortunately purchases of items as well as subscriptions cannot be transferred from one account to another. If you delete an account where you had purchased items and create a new one, they will be lost.
              </p>
            </div>
          )
        },
        {
          question: "I received a notification that someone sent me a Super Sweet but I don't see it in the app.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you received a notification about a Super Sweet, open Toppin and go to messages, in the new matches section, to discover who is the person who gave you that Super Sweet or a match. Their profile might not appear first, but it will eventually appear with a yellow star icon.
              </p>
              <p className="text-gray-300">
                If you subscribe to Toppin Premium or Toppin Supreme, you can discover who gave you that Super Sweet.
              </p>
              <p className="text-gray-300">
                Keep in mind that sometimes, a Super Sweet can be sent by mistake (it can happen to anyone), if the person who sent it uses the go back function they can undo it. Therefore this could be one of the reasons why you don't see the Super Sweet you received the notification for.
              </p>
            </div>
          )
        },
        {
          question: "I can't change my location with Destination.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you're trying to change your location and can't, try checking your mobile phone's internet connection. If that's not the problem try again in a while. If the problem persists contact us through the email support@toppin.es.
              </p>
            </div>
          )
        },
        {
          question: "I can't update my profile.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Are you changing information or data from your profile like photos, songs or biography and they don't save? Check if it could be a problem with your internet connection and if that's not the case delete and reinstall Toppin.
              </p>
              <p className="text-gray-300">
                This will also update to the latest version of the application. So it should work as usual again.
              </p>
              <p className="text-gray-300">
                If it still doesn't work contact us and inform us of what happened. Tell us your problem in detail so we can take care of your case as soon as possible at the email support@toppin.es.
              </p>
            </div>
          )
        },
        {
          question: "I can't upload photos to my profile.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you're trying to upload a photo from your mobile phone, make sure you've given Toppin access to your device's photos. If you haven't done so yet you can enable access from your mobile settings.
              </p>
              <p className="text-gray-300">
                Try again later if you see that the problem continues.
              </p>
            </div>
          )
        },
        {
          question: "Why was my photo removed from Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                There are occasions when we remove content from Toppin to make the experience as pleasant as possible for everyone. If you see that a photo from your profile has been removed, it will mean that a violation of our Terms of use has been detected. We ask all users to be respectful. Please review our Community guidelines so you can keep them in mind every time you upload content to your profile.
              </p>
              <p className="text-gray-300">
                Thanks to you, Toppin is a safer place!
              </p>
            </div>
          )
        },
        {
          question: "My work and/or education information doesn't update.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                From the app you can directly edit and update information related to your work and education center.
              </p>
              <p className="text-gray-300">
                Tap the profile icon in the upper right corner of the main screen<br/>
                Select Edit information<br/>
                Scroll down to the Current job or Education center sections
              </p>
            </div>
          )
        },
        {
          question: "I don't receive any push notifications.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you've stopped receiving our push notifications it's probably a temporary problem.
              </p>
              <p className="text-gray-300">
                Just in case we recommend that you verify that you have notifications correctly enabled within your device Settings – Notifications.
              </p>
            </div>
          )
        },
        {
          question: "How to enable push notifications on your device?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                On iOS devices: Open the iOS Settings app, select Notifications and then Toppin.
              </p>
              <p className="text-gray-300">
                On Android devices: Go to device settings, select Notifications, then App notifications and Toppin
              </p>
            </div>
          )
        },
        {
          question: "Enable notifications in Toppin",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Open the Toppin app<br/>
                Tap the profile icon<br/>
                Select Settings<br/>
                Scroll down to Notifications, there you can enable them if you don't have them.
              </p>
            </div>
          )
        },
        {
          question: "The profiles I see are very far away.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If only some of your potential Matches are far away, this could be happening for several reasons:
              </p>
              <p className="text-gray-300">
                Destination: There may be people who have this action activated to find Matches in your location. If you recently visit a city you may continue to appear in the location where you've been up to 24 hours after you've left. Only Toppin subscribers can edit their location.
              </p>
              <p className="text-gray-300">
                Destination Settings: You can check and edit your distance preferences. And thus decide at what radius of kilometers you want or don't want to find people. You simply have to tap the profile icon {'>'} Settings {'>'} Go down to Destination and there you can see and change the maximum distance you have configured. If you think it could be more of a technical problem you can try to follow these steps to try to solve it:
              </p>
              <p className="text-gray-300">
                Log out and log in: tap the profile icon {'>'} Settings {'>'} scroll down and tap the "Log out" button.<br/>
                Delete Toppin and reinstall it.
              </p>
            </div>
          )
        },
        {
          question: "The profiles don't match my gender or age preferences.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If this has started suddenly, check that you have configured your search preferences to your liking.
              </p>
              <p className="text-gray-300">
                Open Toppin<br/>
                Tap the profile icon<br/>
                Go to your Settings<br/>
                Scroll down to Profile settings. If everything is configured correctly, close your Toppin session and start it again.
              </p>
            </div>
          )
        },
        {
          question: "I have denied Toppin access to my location",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                At least while you're using Toppin it will be necessary for you to give us access to your mobile phone's location.
              </p>
            </div>
          )
        },
        {
          question: "Location on iOS",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Go to your iOS settings {'>'} Toppin {'>'} Location
              </p>
            </div>
          )
        },
        {
          question: "Location on Android",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Go to your phone settings {'>'} Apps {'>'} Toppin {'>'} Permissions {'>'} Location
              </p>
            </div>
          )
        },
        {
          question: "My Matches keep loading all the time.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Try to follow these steps if you see that your Matches don't load or take too long to load:
              </p>
              <p className="text-gray-300">
                Check if you have a good internet connection, you can try switching from mobile data to Wi-Fi, and vice versa, maybe the problem is related to your connection.
              </p>
              <p className="text-gray-300">
                Delete and install the application. This will not only update you to the latest version of Toppin, but will also update your app experience, which should make things work as they should. This should solve the problem. If not, then it's very likely that our system has crashed and we're already working to fix it. We will appreciate your wait.
              </p>
            </div>
          )
        },
        {
          question: "My messages are not being sent.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                We know that chat-related problems can be frustrating. But they usually last a short time. As soon as we notice them we fix them. Meanwhile, there are some steps you can follow to try to solve it:
              </p>
              <p className="text-gray-300">
                Check the internet connection and switch from Wi-Fi to mobile data or vice versa, maybe the problem is related to the connection.
              </p>
              <p className="text-gray-300">
                Delete and install the application. Toppin will be updated to the latest version, and will also update your app experience, after this it should work without problems again.
              </p>
              <p className="text-gray-300">
                Once you're inside the app again, resend the message.
              </p>
              <p className="text-gray-300">
                ○ On iOS: Tap the red exclamation mark next to the message that failed.
              </p>
              <p className="text-gray-300">
                ○ On Android: Tap the message to try sending it again.
              </p>
              <p className="text-gray-300">
                If you wish to contact us write to support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "I undid a Match by mistake.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                It can happen that you accidentally undo a Match without realizing it. But whether you or your Match undoes it, it will be a permanent action that unfortunately cannot be undone and will no longer appear in either profile's list
              </p>
            </div>
          )
        },
        {
          question: "My Matches' photos don't load.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You can try closing and opening a session if you see that your Matches' photos don't load despite having been there for a while.
              </p>
              <p className="text-gray-300">
                To close session: go inside your profile and if you scroll down you'll see the "Log out" button.
              </p>
              <p className="text-gray-300">
                Now you just have to log in again and check if their photos now load.
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