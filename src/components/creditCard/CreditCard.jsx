import React, { useState } from 'react';
import './creditCard.css';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function CreditCard() {

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    email: '',
    focus: '',
    errors: {},
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!state.number) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    if (!state.name) {
      newErrors.cardHolder = 'Please enter the cardholder name';
    }

    if (!state.expiry) {
      newErrors.expiryDate = 'Please enter the expiry date';
    }

    if (!state.cvc) {
      newErrors.cvv = 'Please enter the CVV';
    }

    setState((prev) => ({ ...prev, errors: newErrors }));

    if (Object.keys(newErrors).length === 0) {
      const selectedDate = localStorage.getItem('selectedDate');
      const selectedKind = localStorage.getItem('selectedKind');
      
      const paymentData = {
        number: state.number,
        name: state.name,
        expiry: state.expiry,
        cvc: state.cvc,
        email: state.email,
        selectedDate: selectedDate,
        selectedKind: selectedKind
      };

      const existingPayments = JSON.parse(localStorage.getItem('payments')) || [];
      const updatedPayments = [...existingPayments, paymentData];
      localStorage.setItem('payments', JSON.stringify(updatedPayments));
      localStorage.setItem('isButtonClicked', 'true');
      
      
      setState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        email: '',
        focus: '',
        errors: {},
      });
    }
  };

  return (
    <div>
      <div className="credit-card-container">
        <h2 className="credit-card-title">Credit Card Payment</h2>
        <Cards
          number={state.number}
          name={state.name}
          expiry={state.expiry}
          cvc={state.cvc}
          focused={state.focus}
        />
        <form className="credit-card-form" onSubmit={handleSubmit}>
          <label className="credit-card-label">
            Card Number:
            <input
              className={`credit-card-input ${state.errors.cardNumber ? 'error' : ''}`}
              type="text"
              required
              name="number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Card Number"
            />
            {state.errors.cardNumber && <span className="error-message">{state.errors.cardNumber}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            Card Holder:
            <input
              className={`credit-card-input ${state.errors.cardHolder ? 'error' : ''}`}
              type="text"
              required
              name="name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Name"
            />
            {state.errors.cardHolder && <span className="error-message">{state.errors.cardHolder}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            Expiry Date:
            <input
              className={`credit-card-input ${state.errors.expiryDate ? 'error' : ''}`}
              type="text"
              required
              name="expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="MM/YY"
            />
            {state.errors.expiryDate && <span className="error-message">{state.errors.expiryDate}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            CVV:
            <input
              className={`credit-card-input ${state.errors.cvv ? 'error' : ''}`}
              type="text"
              required
              size="3"
              maxLength="3"
              name="cvc"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="CVV"
            />
            {state.errors.cvv && <span className="error-message">{state.errors.cvv}</span>}
          </label>
          <br />
          <label className="credit-card-label">
            Email:
            <input
              className={`credit-card-input ${state.errors.email ? 'error' : ''}`}
              type="email"
              required
              name="email"
              value={state.email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Email"
            />
            {state.errors.email && <span className="error-message">{state.errors.email}</span>}
          </label>
          <button className="credit-card-submit-button" type="submit">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;

