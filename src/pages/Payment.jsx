import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    alert("💳 Payment Successful!");
    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Secure Payment
      </h1>

      <form
        onSubmit={handlePayment}
        className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg space-y-4"
      >
        <input type="text" name="number" placeholder="Card Number" value={card.number} onChange={handleChange} className="w-full border p-3 rounded-lg"/>
        <input type="text" name="name" placeholder="Card Holder Name" value={card.name} onChange={handleChange} className="w-full border p-3 rounded-lg"/>
        <input type="text" name="expiry" placeholder="Expiry Date" value={card.expiry} onChange={handleChange} className="w-full border p-3 rounded-lg"/>
        <input type="password" name="cvv" placeholder="CVV" value={card.cvv} onChange={handleChange} className="w-full border p-3 rounded-lg"/>

        <button type="submit" className="w-full bg-lime-400 text-white py-3 rounded-lg hover:bg-lime-500 transition">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
