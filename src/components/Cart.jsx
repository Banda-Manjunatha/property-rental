// src/components/Cart.js
import React from "react";

const Cart = ({ bookings, onUpdateBooking, onRemoveBooking }) => {
    const total = bookings.reduce(
        (sum, booking) => sum + booking.property.price * booking.nights,
        0,
    );

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="font-bold text-xl mb-4">
                Your Bookings ({bookings.length})
            </h2>
            {bookings.map((booking) => (
                <div key={booking.id} className="mb-4 border-b pb-4">
                    <h3 className="font-bold">{booking.property.title}</h3>
                    <p>
                        ${booking.property.price} x {booking.nights} nights
                    </p>
                    <div className="flex items-center mt-2">
                        <button
                            onClick={() =>
                                onUpdateBooking(booking.id, booking.nights - 1)
                            }
                            className="bg-gray-200 px-2 py-1 rounded"
                        >
                            -
                        </button>
                        <span className="mx-2">{booking.nights}</span>
                        <button
                            onClick={() =>
                                onUpdateBooking(booking.id, booking.nights + 1)
                            }
                            className="bg-gray-200 px-2 py-1 rounded"
                        >
                            +
                        </button>
                        <button
                            onClick={() => onRemoveBooking(booking.id)}
                            className="ml-4 text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="font-bold text-xl">Total: ${total}</div>
        </div>
    );
};

export default Cart;
