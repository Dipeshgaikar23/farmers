import React, { useState } from 'react';

const Checkout = () => {
  // Sample data for selected products with images
  const [products] = useState([
    { id: 1, name: 'Organic Apples', price: 3.5, quantity: 2, image: 'https://via.placeholder.com/80?text=Apples' },
    { id: 2, name: 'Fresh Carrots', price: 2.0, quantity: 3, image: 'https://via.placeholder.com/80?text=Carrots' },
    { id: 3, name: 'Free-Range Eggs', price: 4.0, quantity: 1, image: 'https://via.placeholder.com/80?text=Eggs' },
  ]);

  // Calculate total amount
  const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container w-75">
        <h2 className="text-center mb-4 fw-bold">Checkout</h2>

        {/* Show message if cart is empty */}
        {products.length === 0 ? (
          <div className="text-center">
            <h4 className="fw-bold">Your cart is empty</h4>
            <p>Add items to your cart to proceed to checkout.</p>
          </div>
        ) : (
          <>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} className="img-fluid rounded" width="80" height="80" />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-between mt-4">
              <h4>Total Amount:</h4>
              <h4 className="fw-bold">${totalAmount}</h4>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg px-4 rounded-pill">
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
