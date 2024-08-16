// src/components/PropertyCard.js
import React from "react";

const PropertyCard = ({ property, onBook }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{property.title}</h2>
                <p className="text-gray-700 text-base mb-2">
                    {property.description}
                </p>
                <p className="text-gray-900 font-bold text-xl mb-2">
                    ${property.price} / night
                </p>
                <p className="text-gray-600 mb-2">
                    Bedrooms: {property.bedrooms}
                </p>
                <p className="text-gray-600 mb-2">
                    Location: {property.location}
                </p>
                <p className="text-gray-600 mb-2">
                    Amenities: {property.amenities.join(", ")}
                </p>
                <button
                    onClick={() => onBook(property)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
