
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="safety-tips" className="border-none">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">Date safely with Toppin</h2>
                      <AccordionTrigger className="p-2 hover:bg-gray-700 rounded-full transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0" />
                    </div>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        At Toppin we know how important safety is for our users and that's why we want to help you with some tips so that your sweet adventure within Toppin is 100% safe and you only have to enjoy the sweetest moments.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. Registration, first step for your safety</h3>
                          <p>The first step for your adventure in Toppin to be 100% safe goes through our registration method through different methods. Therefore, it is recommended that users who want to safely use Toppin register by following the steps correctly.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. Verify your profile</h3>
                          <p>One of the points that brings more security to your Toppin account is our profile verification system through selfie.</p>
                          <p className="mt-2">Through a selfie in which you will have to make a gesture with your hand, the same one that will appear on your mobile screen, we will verify your account. This way you will gain security when visiting verified profiles and we will know that you are really the one using the account in order to enjoy Toppin.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. Block unwanted contacts</h3>
                          <p>Another option that Toppin provides is to block unwanted users. This way we safeguard your privacy, being you who decides who can see your profile, or simply who can continue chatting with you.</p>
                          <p className="mt-2">So remember, if you think you are facing a profile that doesn't make you feel safe, block it.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. Don't share sensitive data</h3>
                          <p>It is important, for the safety of Toppin users, that sensitive data is not shared. Not only banking data, but addresses where you live or work, or data related to your most private life.</p>
                          <p className="mt-2">At Toppin we believe in a healthy community that seeks to have fun and sharing this type of data can create uncomfortable situations that we must avoid.</p>
                          <p className="mt-2 font-medium">Enjoy using Toppin safely.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. Don't share private photos</h3>
                          <p>One of the great problems that social networks have brought is none other than the indiscriminate use of private photographs. We must be careful about what type of photographs we send and to whom we send them, since we never know what use they can make of them.</p>
                          <p className="mt-2">Therefore, we invite you not to share certain images, so that the use of Toppin is 100% safe.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">6. Share video call</h3>
                          <p>If you have met someone interesting on Toppin and you want to take the next step, we recommend that you use our option to establish a video call.</p>
                          <p className="mt-2">You will get to know each other better, you will be able to chat calmly and more fluently and, above all, put a face to each other.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">7. Don't hesitate to contact us</h3>
                          <p>We hope this guide helps you enjoy the sweetest moments in Toppin. But if you have any questions, suggestions or want to contact us because you think your safety is being violated, don't hesitate to contact us through our email supportoppin.es.</p>
                          <p className="mt-2 font-medium">Your safety is paramount to us.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="first-date-tips" className="border-none">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">Tips for the perfect first date</h2>
                      <AccordionTrigger className="p-2 hover:bg-gray-700 rounded-full transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0" />
                    </div>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        First dates always cause us nerves, insecurities, but also excitement. That's why, from Toppin we want to give you some tips that will help you make your first date as perfect as possible. And remember, there can always be a failure, it's something natural.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. Your friends, your best supporters</h3>
                          <p>When we fill out our profiles on social networks we usually show an image of ourselves that doesn't quite fit reality, which projects a wrong image of ourselves. The problem arises that, when we meet, we can disappoint our date, who has a predefined image based on what they have seen in our profile.</p>
                          <p className="mt-2">To avoid this false impression, we must first show ourselves as we really are and adjust to it in the profile we open in Toppin. Another great tip is to ask our friends for help, to make sure we show ourselves as we are.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. Choose the place for our first date well</h3>
                          <p>We tend to think that the best place to have a first date is to elaborate a complex and sophisticated plan. Nothing could be further from the truth. A dinner, a coffee in some trendy place. Choosing a quiet and informal place will help us relax and won't increase our nervousness.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. Conversation, point of support</h3>
                          <p>When we think about the first date we usually think a lot about how the conversation will flow. It's normal to think about it because it's a point where we can fail, and this makes us even more nervous.</p>
                          <p className="mt-2">Although we start from the premise that this first date will be with someone we have already chatted with before, resorting to banal topics can make this date end in disaster.</p>
                          <p className="mt-2">A good option is to have a video chat date beforehand, we can chat calmly and see if the conversation is fluid and pleasant.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. Don't let your body language betray you</h3>
                          <p>One of the things that transmits the most about ourselves is body language. Being attentive so that it doesn't betray us is simpler than we think. According to certain studies, copying our date's language can help us create a better atmosphere, if they smile at us, we smile, for example.</p>
                          <p className="mt-2">Another way to take care of body language is how we sit, facing forward and without crossing our arms, with an open posture towards our interlocutor.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. Acceptance, you won't agree on everything</h3>
                          <p>Before a first date we cling to the idea that we may be facing a person with whom we will have many things in common. While this is possible, we must understand that no one is one hundred percent like us.</p>
                          <p className="mt-2">This fact is not only normal, but it's even good. This way we can establish varied conversation topics and discover interesting facets of our date.</p>
                          <p className="mt-2 font-medium">Remember, preparing well for a first date can help it flow and be as comfortable as possible, but, if it doesn't go well in the end, there's nothing to worry about, because there are factors we can't control.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ending-match-relationship" className="border-none">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-toppin-blue">How to end a match relationship</h2>
                      <AccordionTrigger className="p-2 hover:bg-gray-700 rounded-full transition-colors [&[data-state=open]>svg]:rotate-180 flex-shrink-0" />
                    </div>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <p>
                        Toppin is designed to meet people and enjoy every moment, to find the love of your life or meet people who make you have sweet moments. But it doesn't always happen on the first match. Therefore, from Toppin we want to teach you different ways to let that match know that we are no longer interested in them.
                      </p>
                      <p>
                        The way we do it is important, because with it we will create a healthy community and also, we will respect other users. Ghosting is not the only option.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">1. There is no progression in your relationship</h3>
                          <p>If at some point you realize that you are not facing the person who will sweeten your life, and you don't like them as much as you thought, you don't need to run away, you can simply address the situation with a simple "it was a pleasure to meet you, we had a good time, but I think we don't get along enough".</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">2. From love to friendship there is a small step</h3>
                          <p>You may have found someone very sweet using Toppin. Your first dates were incredible but at some point you see that person more as a friend than as the love of your life.</p>
                          <p className="mt-2">How can you convey that idea? The first thing you have to do is be kind but very clear with your intentions. Draw a line of where you want to take the relationship and what you intend with it.</p>
                          <p className="mt-2">The other person may not want a friendship and cut off all relationship. Be respectful of others' decisions, just as you would want them to be with yours.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">3. You're not sure if your match feels the same as you</h3>
                          <p>You may find yourself in certain situations where you may think that you always take the first step, you always start the conversation or you are the one who proposes dates. In these situations it is advisable to stop, be concise and explain what you want from the relationship.</p>
                          <p className="mt-2">Transmitting to the person you are getting to know what you are looking for, what you need and where you want to take the relationship that is forming is essential for your match to become something sweet.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">4. It has been wonderful, but it's coming to an end</h3>
                          <p>You met someone very special and lived unforgettable moments. The moment of facing a breakup is always complicated and there may not be a perfect way to do it. But there are wrong ways and one of them is not doing it in person.</p>
                          <p className="mt-2">Be honest and sincere. The breakup may occur due to a specific fact or because your feelings take another direction. Be sincere with that person who made you have such good times.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">5. From bad to worse</h3>
                          <p>You matched with someone, everything worked perfectly, but something happened that you can't overlook, a specific fact or a series of situations that you don't want in your life.</p>
                          <p className="mt-2">Transmitting to that person what they have done for you to decide to stop seeing them, clearly and sincerely is a good starting point.</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-toppin-blue mb-2">6. Setting limits</h3>
                          <p>After several dates you start to see certain behaviors or situations that you don't want to have in a future relationship. They skip all the limits you have and you clearly see that if this happens at the beginning it can get worse later. In this case we advise you to block the user and if the case is worse, report them in the application.</p>
                        </div>
                        
                        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                          <p className="font-medium text-toppin-pink">Toppin is designed to create sweet moments and meet people who bring something to your life, enjoying every small moment. Therefore, respecting all application users and being sincere and cordial will help create a healthy community.</p>
                          <p className="mt-2 font-semibold text-toppin-blue">Sweeten your life with Toppin.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
