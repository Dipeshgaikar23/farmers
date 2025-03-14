import React, { useState } from 'react';

const Checkout = () => {
  // Sample data for selected products
  const [products] = useState([
    { id: 1, name: 'Organic Apples', price: 3.5, quantity: 2 },
    { id: 2, name: 'Fresh Carrots', price: 2.0, quantity: 3 },
    { id: 3, name: 'Free-Range Eggs', price: 4.0, quantity: 1 },
  ]);

  // State to manage visibility of checkout details
  const [showCheckout, setShowCheckout] = useState(true); // Default to true for demo

  // Calculate total amount
  const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
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
        <h4>${totalAmount}</h4>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-success">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;