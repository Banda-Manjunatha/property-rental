// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = ({ total, onCheckout }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCheckout(formData);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-bold text-xl mb-4">Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 mr-2">
                        <label className="block mb-2">Expiration Date</label>
                        <input
                            type="text"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label className="block mb-2">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>
                <div className="font-bold text-xl mb-4">Total: ${total}</div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Complete Purchase
                </button>
            </form>
        </div>
    );
};

export default Checkout;
