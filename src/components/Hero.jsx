import React from 'react';

const Hero = () => {
  return (
    <section className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="row">
          {/* Left-aligned content */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="display-4 fw-bold" style={{ color: "#23B714", fontWeight: 800 }}>
              Connecting Natural Farmers with Conscious Consumers
            </h2>
            <p className="lead text-muted fw-semibold" style={{ fontWeight: 600 }}>
              HarvestTrace is a transparent marketplace that verifies authentic natural 
              farming practices and empowers consumers to make informed choices about their food.
            </p>
            <div className="mt-4">
              {/* Join as Farmer Button */}
              <a href="#" 
                 className="btn me-2 rounded-pill px-4 py-2 fw-bold join-btn"
                 style={{
                   backgroundColor: "#23B714",
                   color: "white",
                   border: "none",
                   transition: "0.3s ease-in-out"
                 }}>
                Join as Farmer
              </a>
              
              {/* Shop Products Button */}
              <a href="#" 
                 className="btn rounded-pill px-4 py-2 fw-bold shop-btn"
                 style={{
                   borderColor: "#23B714",
                   color: "#23B714",
                   borderWidth: "2px",
                   transition: "0.3s ease-in-out"
                 }}>
                Shop Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effects in CSS */}
      <style>
        {`
          .join-btn:hover {
            background-color: #1e990f !important; /* Darker green on hover */
            transform: scale(1.05); /* Slight scale effect */
          }

          .shop-btn:hover {
            background-color: #0E9900 !important; /* Green fill on hover */
            color: white !important;
            transform: scale(1.05);
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
