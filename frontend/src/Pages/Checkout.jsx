import React, { useState } from 'react';
import './Checkout.css'; // Assuming you have styles for this page

function Checkout() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePayment = (event) => {
    event.preventDefault();
    // Simulating payment success
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {!isPaymentSuccessful ? (
        <form onSubmit={handlePayment}>
          <label>
            Card Number:
            <input 
              type="text" 
              value={cardNumber} 
              onChange={(e) => setCardNumber(e.target.value)} 
              required
            />
          </label>
          <label>
            Expiry Date:
            <input 
              type="text" 
              value={expiryDate} 
              onChange={(e) => setExpiryDate(e.target.value)} 
              required
            />
          </label>
          <label>
            CVV:
            <input 
              type="text" 
              value={cvv} 
              onChange={(e) => setCvv(e.target.value)} 
              required
            />
          </label>
          <button type="submit">Make Payment</button>
        </form>
      ) : (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Your tickets have been booked. Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
