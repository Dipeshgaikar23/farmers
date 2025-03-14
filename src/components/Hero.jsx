import React from 'react';

const Hero = () => {
  return (
    <section className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="row">
          {/* Left-aligned content */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="display-4 text-success fw-bold" style={{ fontWeight: 800 }}>
              Connecting Natural Farmers with Conscious Consumers
            </h2>
            <p className="lead text-muted fw-semibold" style={{ fontWeight: 600 }}>
              HarvestTrace is a transparent marketplace that verifies authentic natural 
              farming practices and empowers consumers to make informed choices about their food.
            </p>
            <div className="mt-4">
              <a href="#" className="btn btn-success me-2 rounded-pill px-4 py-2 fw-bold">
                Join as Farmer
              </a>
              <a href="#" className="btn btn-outline-success rounded-pill px-4 py-2 fw-bold">
                Shop Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
