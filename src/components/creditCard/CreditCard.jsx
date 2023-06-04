import React, { useState } from 'react';
import './creditCard.css';

function CreditCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({});

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cardNumber: '' }));
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cardHolder: '' }));
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, expiryDate: '' }));
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cvv: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!cardNumber) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!cardHolder) {
      newErrors.cardHolder = 'Please enter the cardholder name';
    }

    if (!expiryDate) {
      newErrors.expiryDate = 'Please enter the expiry date';
    }

    if (!cvv) {
      newErrors.cvv = 'Please enter the CVV';
    }

    setErrors(newErrors);

    // Perform payment processing logic here
    // You can use the state values (cardNumber, cardHolder, expiryDate, cvv) to send the payment information to your backend or perform any necessary actions.

    // Reset form fields
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCVV('');
  };

  return (
    <div>
      <div className="credit-card-container">
        <h2 className="credit-card-title">Credit Card Payment</h2>
        <form className="credit-card-form" onSubmit={handleSubmit}>
          <label className="credit-card-label">
            Card Number:
            <input
              className={`credit-card-input ${errors.cardNumber ? 'error' : ''}`}
              type='number'
              required
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Card Number"
            />
            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            Card Holder:
            <input
              className={`credit-card-input ${errors.cardHolder ? 'error' : ''}`}
              type="text"
              required
              value={cardHolder}
              onChange={handleCardHolderChange}
              placeholder="Name"
            />
            {errors.cardHolder && <span className="error-message">{errors.cardHolder}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            Expiry Date:
            <input
              className={`credit-card-input ${errors.expiryDate ? 'error' : ''}`}
              type='text'
              required
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
            />
            {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            CVV:
            <input
              className={`credit-card-input ${errors.cvv ? 'error' : ''}`}
              type='text'
              required
              size='3'
              maxLength='3'
              min='3'
              value={cvv}
              onChange={handleCVVChange}
              placeholder="cvv"
            />
            {errors.cvv && <span className="error-message">{errors.cvv}</span>}
          </label>
          <br />
          <button className="credit-card-submit-button" type="submit">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;
