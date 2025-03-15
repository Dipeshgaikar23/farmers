import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTAsection";
import Footer from "./components/Footer";
import ThreeJSBackground from "./components/ThreeJSBackground";
import Checkout from "./components/Checkout";
import AuthForm from "./components/AuthForm"; // Signup Component
import Login from "./components/Login"; // Login Component
import FarmMarketplace from "./components/FarmMarketplace"; // Import Marketplace Component

const HomePage = () => (
  <>
    <Hero />
    <FeatureCards />
    <HowItWorks />
    <Testimonials />
    <CTASection />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <ThreeJSBackground />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<FarmMarketplace />} /> {/* ✅ Added Marketplace Route */}
      </Routes>
    </>
  );
};

export default App;
