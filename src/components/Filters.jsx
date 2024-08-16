// src/components/Filters.js
import React from "react";

const Filters = ({ onFilterChange }) => {
    return (
        <div className="mb-4 flex flex-wrap">
            <select
                onChange={(e) => onFilterChange("location", e.target.value)}
                className="mr-2 mb-2 p-2 border rounded"
            >
                <option value="">All Locations</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="city">City</option>
            </select>
            <select
                onChange={(e) => onFilterChange("price", e.target.value)}
                className="mr-2 mb-2 p-2 border rounded"
            >
                <option value="">All Prices</option>
                <option value="0-150">$0 - $150</option>
                <option value="151-250">$151 - $250</option>
                <option value="251+">$251+</option>
            </select>
            <select
                onChange={(e) => onFilterChange("bedrooms", e.target.value)}
                className="mr-2 mb-2 p-2 border rounded"
            >
                <option value="">All Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
            </select>
            <select
                onChange={(e) => onFilterChange("amenities", e.target.value)}
                className="mr-2 mb-2 p-2 border rounded"
            >
                <option value="">All Amenities</option>
                <option value="wifi">Wi-Fi</option>
                <option value="pool">Pool</option>
                <option value="fireplace">Fireplace</option>
            </select>
        </div>
    );
};

export default Filters;
