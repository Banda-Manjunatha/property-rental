# Property Rental Website

This React-based property rental website allows users to browse, filter, and book rental properties. It features a responsive design and includes a shopping cart functionality.

## Features

### Property Listings
- Display a variety of properties with images, titles, descriptions, prices, and "Book Now" buttons.
- Properties include details such as location, number of bedrooms, and amenities.

### Filtering System
- Users can filter properties by:
  - Location (beach, mountain, city)
  - Price range
  - Number of bedrooms
  - Amenities (e.g., wifi, pool, fireplace)

### Booking Management
- Users can add properties to their booking cart.
- The cart displays:
  - Booked properties
  - Number of nights for each booking
  - Price per night
  - Total price for each booking

### Cart Functionality
- Users can access their cart by clicking the cart icon.
- Within the cart, users can:
  - Increase or decrease the number of nights for each booking
  - Remove properties from their cart
  - View the total cost of all bookings

### Checkout Process
- Users can proceed to checkout from the cart page.
- The checkout form collects:
  - Name
  - Email
  - Card number
  - Expiration date
  - CVV

### Responsive Design
- The website is optimized for both desktop and mobile devices.

## Technical Details

- Built with React.js
- Styled using Tailwind CSS
- Uses React Router for navigation
- State management handled with React Hooks (useState, useEffect)
- Props used for component communication

## Main Components

1. `Main`: The homepage component that displays property listings and filters.
2. `PropertyList`: Renders the list of available properties.
3. `PropertyCard`: Displays individual property details.
4. `Filters`: Allows users to filter properties based on various criteria.
5. `Cart`: Shows the user's current bookings and total cost.
6. `Checkout`: Handles the checkout process.
7. `CartPage`: A separate page for viewing and managing the cart.

## State Management

- Property data is stored in the `Main` component and passed down to child components.
- Booking data is managed in the `Main` component and updated through functions passed as props.
- Filter state is managed in the `Main` component and applied to the property list.

## Routing

- The main page (`/`) displays property listings and filters.
- The cart page (`/cart`) shows the user's bookings and checkout form.

## Future Improvements

- Implement user authentication
- Add a backend API for real-time property data and booking management
- Enhance error handling and form validation
- Implement a payment gateway for real transactions
- Add more detailed property information and user reviews
