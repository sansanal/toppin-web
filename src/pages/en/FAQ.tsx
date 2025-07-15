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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          question: "How can I update my billing information?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                From the platform you used to subscribe you can update your payment method (Apple Pay or Google Pay). Instructions will vary depending on the platform you use to make the purchase.
              </p>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">IOS</h4>
                <p className="text-gray-300">
                  If you want to update your billing information from an iOS device, go to the Settings app, select iTunes & App Store, click on your Apple ID, and tap View Apple ID and Billing Information.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-toppin-blue font-semibold text-lg mb-3">ANDROID</h4>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    If you made the purchase using your Google Play Store account, tap the menu icon in Google Play Store, then tap My account and select "Add payment method" or "Edit payment method"
                  </p>
                  <p className="text-gray-300">
                    If you made the purchase by credit card on Android, enter the Toppin app, tap the profile icon and select Manage payment account.
                  </p>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "payment-functions",
      title: "PROBLEMS WITH PAYMENT FUNCTIONS",
      questions: [
        {
          question: "I cannot access my Toppin subscription due to device change, we help you recover it.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If Toppin doesn't recognize a subscription you have in the app, restore the purchase.
              </p>
              <p className="text-gray-300">
                The Restore purchases function helps you maintain access to your subscription every time you delete and recreate your Toppin account, when you buy a new phone, or in other situations where the app doesn't recognize your subscription. Follow the steps below to try to restore your purchase.
              </p>
              <p className="text-gray-300">
                Restoring a purchase keeps access to the subscription if you change phones, delete and create a new account or any other case where the app doesn't recognize your active subscription. These are the steps to restore the purchase.
              </p>
            </div>
          )
        },
        {
          question: "How did you make the purchase? With your Apple ID or with Google Play Store?",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Open Toppin</li>
                <li>• Tap the profile icon</li>
                <li>• Go to Settings</li>
                <li>• Scroll down and tap Restore purchase</li>
              </ul>
              <p className="text-gray-300 mt-4 font-medium">
                Important: Restoring your purchase will not create a new transaction; it will simply relink the existing and active subscription with Toppin.
              </p>
            </div>
          )
        },
        {
          question: "Problems deactivating Power Sweet",
          answer: (
            <div className="space-y-4">
              <h4 className="text-toppin-blue font-semibold text-lg mb-3">PowerSweet</h4>
              <p className="text-gray-300">
                PowerSweet activation: just open Toppin and tap the blue battery-shaped icon on the main screen.
              </p>
              <p className="text-gray-300">
                If you want to know how many PowerSweets you have left, tap the profile icon and take a look at the counter at the bottom of the screen.
              </p>
            </div>
          )
        },
        {
          question: "Technical problems?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you are trying to use any toppin function but are having problems, write us a message with the exact details of the problem or send us a screenshot where the problem you are having is clearly visible so we can help you at support@toppin.es.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "profile-settings",
      title: "PROBLEMS WITH MY PROFILE AND SETTINGS",
      questions: [
        {
          question: "I'm having problems deleting my account",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you are trying to delete your Toppin account but are having problems, these are the steps you must follow to proceed with deleting your account:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Open the Toppin app and log in</li>
                <li>• Tap your profile icon</li>
                <li>• Go to Settings</li>
                <li>• Scroll down and click "Delete account"</li>
              </ul>
              <p className="text-gray-300">
                If you need help you can contact us and we will try to help you at support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "Technical problems related to account deletion",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If an error message appears when you try to delete your account, check your internet connection. If the problem is with the app, be patient and it will be resolved soon. If the problem persists for a long time, contact Toppin and we will try to help you as soon as possible through support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "My account is under investigation.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If your profile receives several reports from different users of the application, we will investigate your account to see what the reason is or what is happening with your profile. During the investigation, we will look for violations of our Terms of use or Community guidelines.
              </p>
              <p className="text-gray-300">
                If your profile has not violated any of Toppin's policies, you will be allowed to access as usual. But if any of your behaviors has violated our terms, we will take the necessary measures, one of them is the possibility of permanent prohibition from being a member of Toppin or deletion of the account.
              </p>
              <p className="text-gray-300">
                If your profile investigation has not yet been completed, it's just a matter of time; we will try to do it as soon as possible.
              </p>
              <p className="text-gray-300">
                Check our Terms of use or Community guidelines for information about what is not allowed on Toppin.
              </p>
            </div>
          )
        },
        {
          question: "Problems with photo verification.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you have problems with a specific pose, you can always exit the photo verification page and start over by refreshing the photo verification page.
              </p>
              <p className="text-gray-300">
                If you need more help with the pose or are having any other problem related to photo verification, let us know by contacting us at support@toppin.es
              </p>
            </div>
          )
        },
        {
          question: "My name or age are incorrect.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Once you have created an account, the name and age details cannot be updated or edited. If you made a mistake and entered your date of birth incorrectly, or if you need to update your name, what you can do is delete your account and start over again.
              </p>
              <p className="text-gray-300">
                Keep in mind that if you delete it, you will unfortunately lose your Matches, messages, and all your purchased items (Super Sweet, Power Sweets, etc.) and other information linked to your account.
              </p>
            </div>
          )
        },
        {
          question: "Follow these steps to delete your Toppin account:",
          answer: (
            <div className="space-y-4">
              <ul className="space-y-2 text-gray-300">
                <li>• Open Toppin</li>
                <li>• Tap the profile icon</li>
                <li>• Go to Settings</li>
                <li>• Scroll down and tap Delete account</li>
              </ul>
              <p className="text-gray-300">
                If you have a Toppin subscription, you can restore it and use it again on your new account. Follow the instructions on how to restore a purchase on your new profile.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "edit-profile",
      title: "PROBLEMS EDITING PROFILE",
      questions: [
        {
          question: "No profile appears on the swiping screen",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                To get more potential Matches on your edit profile page try increasing your search preferences. Adjust the edit profile settings with these steps:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Open Toppin</li>
                <li>• Tap the profile icon</li>
                <li>• Go to Settings</li>
                <li>• In "Profile settings" you can change the distance ratio or age range.</li>
              </ul>
            </div>
          )
        },
        {
          question: "Are you having technical problems?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Make sure your Internet connection is working properly. If it is, try deleting and uninstalling the app. This will update the app to the latest version and also update your Toppin experience, so things should work normally.
              </p>
            </div>
          )
        },
        {
          question: "I'm seeing profiles I've seen before.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If a profile you had seen before has appeared on the swiping page, it's likely that the person has deleted their previous account and opened a new one or has purchased a Power Sweet subscription to have greater visibility and that's why you may see it repeated. You may also see a profile again if when you were swiping in the app you had a bad connection.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "matches-messages-problems",
      title: "PROBLEMS WITH MATCHES AND MESSAGES",
      questions: [
        {
          question: "All my Matches have disappeared",
          answer: null
        },
        {
          question: "No profile appears on the swiping screen",
          answer: null
        },
        {
          question: "I have no new Matches.",
          answer: null
        }
      ]
    },
    {
      id: "filters",
      title: "FILTERS AND SEARCH PARAMETERS",
      questions: [
        {
          question: "How do filters work?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                This function will allow you to see different profiles of people based on your search filters and select the profiles you like best by swiping the image left or right according to your choice. In Toppin you can choose whether you want to be seen or not and still be able to use the filters function.
              </p>
            </div>
          )
        },
        {
          question: "Can I search for a specific person on Toppin?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You cannot search for specific people within the app unless you have previously had a Match with that person. You can search for them in your Match list and type their name in the search engine.
              </p>
            </div>
          )
        },
        {
          question: "How can I send someone a message?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                To be able to chat with other Toppin users you must have had a previous Match, that is, you both must have said you liked each other.
              </p>
            </div>
          )
        },
        {
          question: "How to report a profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                At Toppin we care about the safety of our users and therefore we make it possible for you to report a profile if this person has violated any of our policies or you think they are misusing the application.
              </p>
              <p className="text-gray-300">
                Under each person's biography you can find a Report button, we will review all reported profiles one by one in order to provide security to all Toppin users.
              </p>
            </div>
          )
        },
        {
          question: "How can I undo a \"Like\" or \"Dislike\"?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Do you regret having given a Match or the opposite has happened to you and you want to "like" a profile that you had already discarded? For this we provide you with the go back function.
              </p>
              <p className="text-gray-300">
                You will have this function available if you subscribe to our Premium plan. With it you can undo a "Like" or "Dislike".
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "profile-account",
      title: "PROFILE AND ACCOUNT SETTINGS",
      questions: [
        {
          question: "Selfie verification, how does it work?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                You will have to take a selfie making a hand gesture, the same one that appears on your mobile screen. We will ask you for this in order to verify your profile and know that you are really the one using your account.
              </p>
            </div>
          )
        },
        {
          question: "How can you edit your profile?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you want to edit any data or photo of your account you can do it within your profile in the app. There you will find a pencil icon, and by clicking there all your profile options available for editing will open.
              </p>
              <p className="text-gray-300">
                You can edit it as many times as you want!
              </p>
            </div>
          )
        },
        {
          question: "How can I delete my account?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you unfortunately want to delete your Toppin account you will have to access Your profile – access Settings – Delete account.
              </p>
            </div>
          )
        },
        {
          question: "What is photogenic verification?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Photo verification allows you to verify your profile, thus demonstrating to potential Matches that you are really the one who appears in the photos. This is done in order to provide security to all app users.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "subscriptions",
      title: "PREMIUM AND SUPREME SUBSCRIPTIONS",
      questions: [
        {
          question: "Premium Subscription",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                At Toppin we have the Premium subscription that will make your experience in the app go a step further. In some cases they will also help speed up the process of finding Matches.
              </p>
              <p className="text-gray-300">The extended functions with Premium are the following:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Unlimited likes.</li>
                <li>• Discover who likes you.</li>
                <li>• Unlimited access to Vip Toppins.</li>
                <li>• 5 free Super Sweet every week.</li>
                <li>• 1 free Power Sweet per month.</li>
                <li>• Advanced filters</li>
                <li>• Choose who sees you and hide your profile from whoever you choose</li>
                <li>• Destination: Sweeten your destinations and make your trips unforgettable</li>
                <li>• Go back as many times as you want</li>
                <li>• Disable ads.</li>
              </ul>
              <p className="text-gray-300 font-semibold">*This subscription is paid</p>
            </div>
          )
        },
        {
          question: "Supreme Subscription",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                In addition to the Premium subscription functions you also have the option of getting the Supreme pack, which includes:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Sugar Sweet: Accompany your Super Sweet with a sweet message.</li>
                <li>• Read message confirmation.</li>
                <li>• Priority for your "Likes"</li>
                <li>• Includes Premium features.</li>
              </ul>
              <p className="text-gray-300 font-semibold">*This subscription is paid</p>
            </div>
          )
        }
      ]
    },
    {
      id: "functions",
      title: "SOME TOPPIN FUNCTIONS",
      questions: [
        {
          question: "Toppin Sweet",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Haven't you tried Toppin Sweet yet? Play roulette and win prizes that you can spend within Toppin and that will help you find your ideal match.
              </p>
              <p className="text-gray-300">
                The first roll is free.
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
                Send a Super Sweet to the profile you like the most, this way they will receive a notification of your match and you won't have to wait for your profile to appear.
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
                Increase your chances of matching by becoming the most appealing sweet and shine with your matches for 30 minutes.
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
                A new way to meet people during your holidays!
              </p>
            </div>
          )
        },
        {
          question: "Go back",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                Regret a match? Did you want to see a discarded profile again?
              </p>
              <p className="text-gray-300">
                With this option you can make the decision to match or not again.
              </p>
            </div>
          )
        },
        {
          question: "Unlimited Likes",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                With your premium or supreme subscription you can give unlimited likes per month as long as you remain subscribed to one of the two options.
              </p>
              <p className="text-gray-300">
                If you don't have any premium or supreme subscription you can have unlimited likes by purchasing one of the two subscriptions and you can continue swiping without limits.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: "troubleshooting",
      title: "TROUBLESHOOTING",
      questions: [
        {
          question: "I can't sign in to my account.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you are having difficulty signing in to the app, these troubleshooting steps usually help with sign-in problems:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Check if you have a good Internet connection, or switch from Wi-Fi to mobile data or vice versa to determine if the problem is related to your connection</li>
                <li>• Delete and reinstall the app. This will not only update you to the latest version of Toppin, but will also update your app experience, which should make things work as they should.</li>
                <li>• If the problem persists, we want to know about it. Contact us through our email support@toppin.es and describe your problem in as much detail as possible, so we can analyze and resolve it.</li>
              </ul>
            </div>
          )
        },
        {
          question: "My account has been disabled.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If your Toppin account has been closed, you will see a message warning you when you try to log in. At Toppin we close accounts when we detect activities that violate our terms of use. If you think it's an error you can contact us through our email support@toppin.es and we will try to solve it.
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
              <ul className="space-y-2 text-gray-300">
                <li>• Open the Toppin app</li>
                <li>• Go to the profile icon</li>
                <li>• Go to Settings</li>
                <li>• Select Email notifications</li>
                <li>• Update your email address</li>
              </ul>
            </div>
          )
        },
        {
          question: "The app crashes.",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                This can be a bit exhausting sometimes, we know. But we're going to help you! Maybe it's for one of the following reasons:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• First make sure you have a good Internet connection, or switch from Wi-Fi to mobile data or vice versa to determine if the problem is related to your connection.</li>
                <li>• If the above doesn't work, try deleting and reinstalling the app. In addition to updating to the latest version of Toppin, it will also update your app experience, this should make it work as it should.</li>
                <li>• If it's a technical problem, we're probably already working on solving it. It's a matter of waiting!</li>
              </ul>
            </div>
          )
        },
        {
          question: "How can I know what email address is associated with the account?",
          answer: (
            <div className="space-y-4">
              <p className="text-gray-300">
                If you have forgotten or want to know what email address is associated with your Toppin account you can find it within Settings {'>'} Notifications {'>'} Email. The email you registered with will appear there.
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