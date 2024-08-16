import React, { useContext } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import { BookingsContext } from "./BookingsCOntext";

const CartPage = () => {
    const navigate = useNavigate();
    const {
        bookings,
        total,
        handleUpdateBooking,
        handleRemoveBooking,
        handleCheckout,
    } = useContext(BookingsContext);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            <button
                onClick={() => navigate("/")}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Back to Properties
            </button>
            <Cart
                bookings={bookings}
                onUpdateBooking={handleUpdateBooking}
                onRemoveBooking={handleRemoveBooking}
            />
            {bookings.length > 0 && (
                <Checkout total={total} onCheckout={handleCheckout} />
            )}
        </div>
    );
};

export default CartPage;
