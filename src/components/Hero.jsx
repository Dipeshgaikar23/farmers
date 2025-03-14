import React from 'react';

const Hero = () => {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h2 className="display-4 text-success fw-bold" >Connecting Natural Farmers with Conscious Consumers</h2>
        <p className="lead text-muted">HarvestTrace is a transparent marketplace that verifies authentic natural farming practices and empowers consumers to make informed choices about their food.</p>
        <div className="mt-4">
          <a href="#" className="btn btn-success me-2">Join as Farmer</a>
          <a href="#" className="btn btn-outline-success">Shop Products</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;