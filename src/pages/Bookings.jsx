import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-lg">
          You have no bookings yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <img
                src={booking.image}
                alt=""
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold">
                {booking.roomName}
              </h2>
              <p className="text-lime-500 font-semibold">
                ${booking.price}
              </p>
              <p>Check-In: {booking.checkIn}</p>
              <p>Check-Out: {booking.checkOut}</p>
              <p>Guests: {booking.guests}</p>
              <p>Rating: {booking.rating} ⭐</p>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
