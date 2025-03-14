import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTAsection';
import Footer from './components/Footer';
import ThreeJSBackground from './components/ThreeJSBackground';

const App = () => {
  return (
    <div>
      <ThreeJSBackground/>
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