import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-success text-white text-center py-5">
      <h2 className="display-4">Join Our Growing Community</h2>
      <p className="lead">Whether you're a natural farmer looking for fair markets or a consumer seeking authentic natural products, HarvestTrace connects you to a transparent food ecosystem.</p>
      <div className="mt-4">
        <a href="#" className="btn btn-light me-2">Join as Farmer</a>
        <a href="#" className="btn btn-outline-light">Shop as Consumer</a>
      </div>
    </section>
  );
};

export default CTASection;