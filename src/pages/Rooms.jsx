import React from "react";
import { roomData } from "../assets/asset";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Luxury Rooms
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {roomData.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={room.image}
              alt={room.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <p className="text-lime-500 font-semibold mt-2">
                ${room.price} / night
              </p>

              <Link
                to={`/room/${room.id}`}
                className="block mt-4 bg-lime-400 text-white text-center py-2 rounded-lg hover:bg-lime-500 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
