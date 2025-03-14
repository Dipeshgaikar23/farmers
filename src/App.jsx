import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTAsection';
import Footer from './components/Footer';
import ThreeJSBackground from './components/ThreeJSBackground';
import Checkout from './components/Checkout'; // Import the Checkout component

const App = () => {
  return (
    <>
      <ThreeJSBackground />
      <Header />
      <Routes>
        {/* Main Landing Page with Footer */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <FeatureCards />
              <HowItWorks />
              <Testimonials />
              <CTASection />
              <Footer /> {/* Footer is included here */}
            </>
          } 
        />

        {/* Checkout Page WITHOUT Footer */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
