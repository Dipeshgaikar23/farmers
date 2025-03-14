import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTAsection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;