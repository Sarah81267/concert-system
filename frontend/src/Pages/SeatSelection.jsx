import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SeatSelection.css'; // Assuming you have styles for this page

function SeatSelection() {
  const { id } = useParams(); // Get the concert ID from the URL
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    { seatId: 1, available: true },
    { seatId: 2, available: true },
    { seatId: 3, available: false },
    { seatId: 4, available: true },
    { seatId: 5, available: true }
  ];

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats(prevState => 
      prevState.includes(seatId) ? prevState.filter(id => id !== seatId) : [...prevState, seatId]
    );
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seats for Concert {id}</h2>
      <div className="seats-container">
        {seats.map(seat => (
          <div 
            key={seat.seatId} 
            className={`seat ${seat.available ? 'available' : 'unavailable'} ${selectedSeats.includes(seat.seatId) ? 'selected' : ''}`}
            onClick={() => seat.available && toggleSeatSelection(seat.seatId)}
          >
            {seat.seatId}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
      </div>
      <button onClick={() => window.location.href = `/summary`}>Proceed to Summary</button>
    </div>
  );
}

export default SeatSelection;
