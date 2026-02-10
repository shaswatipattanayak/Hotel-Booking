import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContextProvider'
import { FaBath, FaWifi, FaUserFriends, FaCoffee, FaCar, FaBed } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const amenitiesList = [
  { label: '1-2 Persons', icon: <FaUserFriends className='text-gray-600' /> },
  { label: 'Bathtub', icon: <FaBath className='text-gray-600' /> },
  { label: 'WiFi', icon: <FaWifi className='text-gray-600' /> },
  { label: 'Breakfast', icon: <FaCoffee className='text-gray-600' /> },
  { label: 'Parking', icon: <FaCar className='text-gray-600' /> },
  { label: 'King Size Bed', icon: <FaBed className='text-gray-600' /> },
]

const HotelList = () => {
  const { rooms } = useContext(RoomContext)

  return (
    <div className='bg-[#f7f0eb] py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-serif text-center mb-12 text-gray-800'>
          Book your stay and <br /> relax in luxury
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {rooms && rooms.length > 0 ? (
            rooms.map((room) => {
              const { id, image, name, price } = room

              return (
                <div key={id} className='bg-white shadow-lg rounded-xl overflow-hidden'>
                  <Link to={`/room/${id}`}>
                    <img
                      src={image}
                      alt={name}
                      className='w-full h-72 object-cover'
                    />
                  </Link>

                  <div className='p-5'>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-1'>
                      {name}
                    </h3>

                    <p className='text-gray-600 text-lg mb-4'>${price}</p>

                    <div className='grid grid-cols-2 gap-3 text-sm text-gray-700'>
                      {amenitiesList.map((amenity, idx) => (
                        <div key={idx} className='flex items-center gap-2'>
                          {amenity.icon}
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className='text-gray-500 text-center col-span-full'>
              No rooms available
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HotelList
