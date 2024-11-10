// src/pages/BookingPage.js
import React from "react";
import "./index.css"
import { useLocation, useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData;

  const handlePayment = () => {
    navigate("/confirmation");
  };

  return (
    <div className="booking_container">
      <h2>Your Booking Details</h2>
      {userData ? (
        <div className="booking_card">
          <div className="user_data_container">
            <p>Name: {userData.name}</p>
            <p>Phone: {userData.phone}</p>
            <p>Adults: {userData.adults}</p>
            <p>Children: {userData.children}</p>
          </div>
          
          <div className="checkin_data_container">
            <p>Check-in: {userData.checkIn}</p>
            <p>Check-out: {userData.checkOut}</p>
          </div>
          
          <div className="payment_continer">
            <p>Price: ₹12,430</p>
            <button onClick={handlePayment}>Click to Proceed</button>
          </div>

        </div>
      ) : (
        <p>No booking data found. Please go back and fill out the booking form.</p>
      )}
    </div>
  );
}

export default BookingPage;
