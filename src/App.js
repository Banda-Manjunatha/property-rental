// src/App.js
import React, { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import image1 from "./images/Beachfront-Villa.jpg";
import image2 from "./images/Mountain-Cabin.jpg";
import image3 from "./images/City-aprt.jpg";
import image4 from "./images/lakeside-cottage.jpg";
import image5 from "./images/ski-chalet.jpg";

const initialProperties = [
    {
        id: 1,
        title: "Beachfront Villa",
        description: "Luxurious villa with direct beach access",
        price: 300,
        image: `${image1}`,
        location: "beach",
        bedrooms: 3,
        amenities: ["pool", "wifi", "kitchen"],
    },
    {
        id: 2,
        title: "Mountain Cabin",
        description: "Cozy cabin with stunning mountain views",
        price: 150,
        image: `${image2}`,
        location: "mountain",
        bedrooms: 2,
        amenities: ["fireplace", "wifi", "hiking "],
    },
    {
        id: 3,
        title: "City Apartment",
        description: "Modern apartment in the heart of downtown",
        price: 200,
        image: `${image3}`,
        location: "city",
        bedrooms: 1,
        amenities: ["gym", "wifi", "parking"],
    },
    {
        id: 4,
        title: "Lakeside Cottage",
        description: "Charming cottage with lake views",
        price: 180,
        image: `${image4}`,
        location: "beach",
        bedrooms: 2,
        amenities: ["boat dock", "wifi", "bbq"],
    },
    {
        id: 5,
        title: "Ski Chalet",
        description: "Spacious chalet near ski slopes with beautiful view",
        price: 250,
        image: `${image5}`,
        location: "mountain",
        bedrooms: 4,
        amenities: ["sauna", "wifi", "fireplace"],
    },
];

function App() {
    const [filteredProperties, setFilteredProperties] =
        useState(initialProperties);
    const [bookings, setBookings] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        let result = filteredProperties;

        if (filters.location) {
            result = result.filter(
                (property) => property.location === filters.location,
            );
        }

        if (filters.price) {
            const [min, max] = filters.price.split("-").map(Number);
            result = result.filter(
                (property) =>
                    property.price >= min &&
                    (max ? property.price <= max : true),
            );
        }

        if (filters.bedrooms) {
            if (filters.bedrooms === "3+") {
                result = result.filter((property) => property.bedrooms >= 3);
            } else {
                result = result.filter(
                    (property) =>
                        property.bedrooms === Number(filters.bedrooms),
                );
            }
        }

        if (filters.amenities) {
            result = result.filter((property) =>
                property.amenities.includes(filters.amenities),
            );
        }

        setFilteredProperties(result);
    }, [filters, filteredProperties]);

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value === "" ? undefined : value,
        }));
    };

    const handleBook = (property) => {
        setBookings((prevBookings) => [
            ...prevBookings,
            { id: Date.now(), property, nights: 1 },
        ]);
    };

    const handleUpdateBooking = (id, nights) => {
        setBookings((prevBookings) =>
            prevBookings.map((booking) =>
                booking.id === id
                    ? { ...booking, nights: Math.max(1, nights) }
                    : booking,
            ),
        );
    };

    const handleRemoveBooking = (id) => {
        setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.id !== id),
        );
    };

    const handleCheckout = (formData) => {
        console.log("Checkout:", formData);
        console.log("Booked properties:", bookings);
        setBookings([]);
        alert("Thank you for your booking!");
    };

    const total = bookings.reduce(
        (sum, booking) => sum + booking.property.price * booking.nights,
        0,
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Property Rental</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 lg:mr-8">
                    <Filters onFilterChange={handleFilterChange} />
                    <PropertyList
                        properties={filteredProperties}
                        onBook={handleBook}
                    />
                </div>
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <Cart
                        bookings={bookings}
                        onUpdateBooking={handleUpdateBooking}
                        onRemoveBooking={handleRemoveBooking}
                    />
                    {bookings.length > 0 && (
                        <Checkout total={total} onCheckout={handleCheckout} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
