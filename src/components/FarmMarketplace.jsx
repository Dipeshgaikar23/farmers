import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SpotlightCard from "./SpotlightCard"; // ✅ Import SpotlightCard
import "./SpotlightCard.css"; // ✅ Import SpotlightCard styles

const FarmMarketplace = () => {
    const [cartItems, setCartItems] = useState([]);
    const [sortOption, setSortOption] = useState("default");

    // Sample data
    const vegetables = [
        { id: 1, name: "Organic Tomatoes", price: 3.99, supplier: "Green Valley Farm", category: "fruits", image: "https://via.placeholder.com/200x150" },
        { id: 2, name: "Fresh Spinach", price: 2.49, supplier: "Riverside Gardens", category: "leafy", image: "https://via.placeholder.com/200x150" },
        { id: 3, name: "Red Potatoes", price: 4.99, supplier: "Hillside Farm", category: "roots", image: "https://via.placeholder.com/200x150" },
        { id: 4, name: "Bell Peppers", price: 1.99, supplier: "Sunshine Fields", category: "vegetables", image: "https://via.placeholder.com/200x150" },
        { id: 5, name: "Bell Peppers", price: 1.99, supplier: "Sunshine Fields", category: "vegetables", image: "https://via.placeholder.com/200x150" },
        { id: 6, name: "Bell Peppers", price: 1.99, supplier: "Sunshine Fields", category: "vegetables", image: "https://via.placeholder.com/200x150" },
    ];

    // Sorting logic
    const sortedVegetables = [...vegetables].sort((a, b) => {
        if (sortOption === "price-low-high") return a.price - b.price;
        if (sortOption === "price-high-low") return b.price - a.price;
        return 0;
    });

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="min-vh-100 bg-light">
            <div className="container py-5">
                <h2 className="text-center mb-4">Fresh From The Farm</h2>

                {/* Product Listings with Spotlight Cards */}
                <div className="row g-4">
                    {sortedVegetables.map((vegetable) => (
                        <div key={vegetable.id} className="col-md-4 col-lg-3">
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(14, 153, 0, 0.3)"> {/* ✅ Updated Spotlight Green */}
                                <img src={vegetable.image} alt={vegetable.name} className="img-fluid rounded mb-2" />
                                <h5 className="fw-bold">{vegetable.name}</h5>
                                <p className="text-muted small">From: {vegetable.supplier}</p>
                                <p className="fw-bold" style={{ color: "#0E9900" }}>${vegetable.price.toFixed(2)}</p>
                                <button className="btn custom-green-btn w-100" onClick={() => addToCart(vegetable)}>Add to Cart</button>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Effect Styles */}
            <style>
                {`
                    .custom-green-btn {
                        background-color: #0E9900 !important; 
                        color: white !important;
                        transition: background-color 0.3s ease-in-out, transform 0.2s;
                    }

                    .custom-green-btn:hover {
                        background-color: #0c7f00 !important; /* Darker Green */
                        transform: scale(1.05); /* Slight scale effect */
                    }
                `}
            </style>
        </div>
    );
};

export default FarmMarketplace;
