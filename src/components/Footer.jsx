import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>HarvestTrace</h5>
            <p>Building a transparent ecosystem for natural farming products, connecting farmers and conscious consumers for a sustainable future.</p>
          </div>
          <div className="col-md-3">
            <h5>For Farmers</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Get Certified</a></li>
              <li><a href="#" className="text-white">Pricing & Fees</a></li>
              <li><a href="#" className="text-white">Farming Standards</a></li>
              <li><a href="#" className="text-white">Success Stories</a></li>
              <li><a href="#" className="text-white">Farmer Resources</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>For Consumers</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">How to Verify</a></li>
              <li><a href="#" className="text-white">Product Categories</a></li>
              <li><a href="#" className="text-white">Seasonal Guide</a></li>
              <li><a href="#" className="text-white">Delivery Information</a></li>
              <li><a href="#" className="text-white">Customer Reviews</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Our Mission</a></li>
              <li><a href="#" className="text-white">Certification Process</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 HarvestTrace. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;