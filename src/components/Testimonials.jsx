import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Since joining HarvestTrace, I've found reliable customers who value my natural farming methods. The certification gives me recognition for my sustainable practices, and I'm earning 40% more than through traditional markets.",
      author: "Rajan Sharma",
      role: "Natural Farmer, Karnataka"
    },
    {
      content: "I've always wanted to support natural farmers but never knew how to verify claims. HarvestTrace's QR code system lets me see exactly where my food comes from and how it was grown. The direct connection with farmers makes me confident in my choices.",
      author: "Priya Malhotra",
      role: "Conscious Consumer, Mumbai"
    }
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center text-success mb-4">Stories from Our Community</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{testimonial.content}</p>
                <h5 className="card-title">{testimonial.author}</h5>
                <p className="card-subtitle text-muted">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;