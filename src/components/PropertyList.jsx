// src/components/PropertyList.js
import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties, onBook }) => {
    if (!properties || properties.length === 0) {
        return (
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h2 className="font-bold text-xl mb-4">
                    No properties available
                </h2>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
                <PropertyCard
                    key={property.id}
                    property={property}
                    onBook={onBook}
                />
            ))}
        </div>
    );
};

export default PropertyList;
