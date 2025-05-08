
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhoneShowcase from '@/components/PhoneShowcase';
import FeaturesSection from '@/components/FeaturesSection';
import GameSection from '@/components/GameSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import ActionButtons from '@/components/ActionButtons';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <HeroSection />
        <PhoneShowcase />
        <FeaturesSection />
        <GameSection />
        <TestimonialsSection />
        <ActionButtons />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
