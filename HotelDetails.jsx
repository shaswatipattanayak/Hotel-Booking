// import React from 'react'
// import {roomData} from '../assets/asset'
// import {useParams} from 'react-router-dom'
// import {FaUtensils, FaWifi, FaTv, FaSwimmingPool, FaConciergeBell} from 'react-icons/fa'


// const HotelDetails = () => {
//   const {id} = useParams()

//  const room = roomData.find((room) => {
//   return room.id === parseInt(id)
//  }) 
//   return (
//     <div className='mx-auto max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
//       {/* Left Side */}
//       <div className='md:col-span-2 space-y-6'>
//         <div>
//           <h1 className='text-3xl font-bold'>{room.name}</h1>
//           <p className='text-xl text-lime-500 mt-1'>${room.price}</p>
//         </div>
//         <img src={room.image} alt="" className='w-full rounded-lg shadow-md'/>
//         <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
//           <h2 className='text-xl font-semibold mb-3'>Amenities</h2>
//           <div className='grid grid-cols-2 gap-4 text-gray-700'>
//             <div className='flex items-center gap-2'>
//               <FaWifi /> wi-fi
//             </div>
//             <div className='flex items-center gap-2'>
//               <FaTv /> Cable TV
//             </div>
//             <div className='flex items-center gap-2'>
//               <FaUtensils /> Restaurant
//             </div>
//             <div className='flex items-center gap-2'>
//               <FaSwimmingPool /> pool
//             </div>
//             <div className='flex items-center gap-2'>
//               <FaConciergeBell /> Room Service
//             </div>
//           </div>

//           <div>
//             <h2 className='text-lg font-semibold mb-2'>Room Description</h2>
//             <p className='text-gray-600'>{room.description} </p>
//             <p>{room.description} </p>
//             <p>{room.description} </p>
//             <p>{room.description} </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className='bg-white p-6 md:mt-0 rounded-lg shadow-md md:sticky md:top-24 h-fit'>
//         <h2 className='text-2xl font-bold mb-4'>Book Your Stay</h2>
//         <form className='space-y-4'>
//           <input type='text' name='' placeholder='Name' className='w-full border border-b-gray-300 p-3 rounded-lg' />
//           <input type="email" name="" placeholder='Email' className='w-full border border-b-gray-300 p-3 rounded-lg'/>
//           <input type='tel' name="" placeholder='Phone Number' className='w-full border border-b-gray-300 p-3 rounded-lg'/>
//           <div>
//             <label htmlFor="date" className='font-bold'>Check-In</label>
//             <input type="date" name="" id="" className='w-full border border-b-gray-300 p-3 rounded-lg' />
//           </div>
//           <div>
//             <label htmlFor="date" className='font-bold'>Check-Out</label>
//             <input type="date" name="" id="" className='w-full border border-b-gray-300 p-3 rounded-lg'/>
//           </div>
//           <div>
//             <label htmlFor="" className='font-bold'>Number of Guests</label>
//             <select name="" id="" className='w-full p-3 border rounded-lg focus:ring focus:ring-blue'>
//               {[...Array(3).keys().map((i)=>(
//                 <option key={i + 1} value={i + 1}>{i +1} Guest(s)</option>
//               ))]}
//             </select>
//           </div>
//           <button type='submit' className='w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition'>Book Now</button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default HotelDetails



// // 1.28












import React, { useState } from 'react'
import { roomData } from '../assets/asset'
import { useParams, useNavigate } from 'react-router-dom'
import { FaUtensils, FaWifi, FaTv, FaSwimmingPool, FaConciergeBell } from 'react-icons/fa'

const HotelDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const room = roomData.find((room) => room.id === parseInt(id))

  const [rating, setRating] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields!")
      return
    }

    const bookingDetails = {
      id: Date.now(),
      roomId: room.id,
      roomName: room.name,
      price: room.price,
      image: room.image,
      rating: rating,
      ...formData,
      bookingDate: new Date().toLocaleString()
    }

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || []

    const updatedBookings = [...existingBookings, bookingDetails]

    localStorage.setItem("bookings", JSON.stringify(updatedBookings))

    navigate("/payment")
  }

  if (!room) {
    return <h2 className='text-center text-3xl mt-10'>Room Not Found</h2>
  }

  return (
    <div className='mx-auto max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
      
      <div className='md:col-span-2 space-y-6'>
        <div>
          <h1 className='text-3xl font-bold'>{room.name}</h1>
          <p className='text-xl text-lime-500 mt-1'>${room.price}</p>

          {/* ⭐ Rating System */}
          <div className="flex items-center gap-2 mt-3">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-2xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating > 0 ? `${rating} / 5` : "Rate this room"}
            </span>
          </div>
        </div>

        <img src={room.image} alt="" className='w-full rounded-lg shadow-md'/>

        <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-3'>Amenities</h2>

          <div className='grid grid-cols-2 gap-4 text-gray-700'>
            <div className='flex items-center gap-2'><FaWifi /> Wi-Fi</div>
            <div className='flex items-center gap-2'><FaTv /> Cable TV</div>
            <div className='flex items-center gap-2'><FaUtensils /> Restaurant</div>
            <div className='flex items-center gap-2'><FaSwimmingPool /> Pool</div>
            <div className='flex items-center gap-2'><FaConciergeBell /> Room Service</div>
          </div>

          <div className='mt-4'>
            <h2 className='text-lg font-semibold mb-2'>Room Description</h2>
            <p className='text-gray-600'>{room.description}</p>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md h-fit'>
        <h2 className='text-2xl font-bold mb-4'>Book Your Stay</h2>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='w-full border p-3 rounded-lg'/>
          <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='w-full border p-3 rounded-lg'/>
          <input type='tel' name='phone' placeholder='Phone Number' value={formData.phone} onChange={handleChange} className='w-full border p-3 rounded-lg'/>

          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className='w-full border p-3 rounded-lg'/>
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className='w-full border p-3 rounded-lg'/>

          <select name="guests" value={formData.guests} onChange={handleChange} className='w-full p-3 border rounded-lg'>
            {[...Array(3)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Guest(s)
              </option>
            ))}
          </select>

          <button type='submit' className='w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-500 transition'>
            Book Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default HotelDetails
