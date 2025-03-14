import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <ThreeJSBackground />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeatureCards />
            <HowItWorks />
            <Testimonials />
            <CTASection />
          </>
        } />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;