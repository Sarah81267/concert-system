import React from 'react';
import { useParams } from 'react-router-dom';
import './ConcertDetails.css'; // Assuming you have styles for this page

function ConcertDetails() {
  const { id } = useParams(); // Get the concert ID from the URL

  // Example concert data, replace with data fetched from backend
  const concert = {
    id: 1,
    name: "Rock Fest 2024",
    date: "2024-12-15",
    time: "7:00 PM",
    venue: "Stadium Arena",
    description: "Join us for a night of rock music with the best bands from around the world!",
    price: 100
  };

  return (
    <div className="concert-details">
      <h2>{concert.name}</h2>
      <p><strong>Date:</strong> {concert.date}</p>
      <p><strong>Time:</strong> {concert.time}</p>
      <p><strong>Venue:</strong> {concert.venue}</p>
      <p><strong>Description:</strong> {concert.description}</p>
      <p><strong>Price:</strong> ${concert.price}</p>
      <button onClick={() => window.location.href = `/seats/${concert.id}`}>Select Seats</button>
    </div>
  );
}

export default ConcertDetails;
