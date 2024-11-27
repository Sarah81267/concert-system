import React from 'react';
import { useLocation } from 'react-router-dom';
import './PurchaseSummary.css'; // Assuming you have styles for this page

function PurchaseSummary() {
  const { state } = useLocation(); // Get the selected seats from location state

  const concert = {
    name: "Rock Fest 2024",
    date: "2024-12-15",
    time: "7:00 PM",
    price: 100
  };

  const totalPrice = state.selectedSeats.length * concert.price;

  return (
    <div className="purchase-summary">
      <h2>Purchase Summary</h2>
      <p><strong>Concert:</strong> {concert.name}</p>
      <p><strong>Date & Time:</strong> {concert.date} at {concert.time}</p>
      <p><strong>Seats Selected:</strong> {state.selectedSeats.join(', ')}</p>
      <p><strong>Total Price:</strong> ${totalPrice}</p>
      <button onClick={() => window.location.href = `/checkout`}>Proceed to Checkout</button>
    </div>
  );
}

export default PurchaseSummary;
