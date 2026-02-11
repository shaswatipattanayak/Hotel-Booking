// import React from 'react'
// import Hero from '../components/Hero'
// import HotelList from '../components/HotelList'
// import Facility from '../components/Facility'



// const Homepage = () => {
  
//   return (
//     <div>
//       <Hero />
//       <HotelList />
//       <Facility />

//     </div>
//   )
// }

// export default Homepage




import React, { useState } from 'react'
import Hero from '../components/Hero'
import HotelList from '../components/HotelList'
import Facility from '../components/Facility'

const Homepage = () => {

  // 🔹 Filter state
  const [filter, setFilter] = useState("All")

  return (
    <div>

      <Hero />

      {/* 🔥 FILTER SECTION ADDED HERE */}
      <div className="flex justify-center mt-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Rooms</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
          <option value="Standard">Standard</option>
        </select>
      </div>

      {/* 🔥 PASS FILTER TO HOTEL LIST */}
      <HotelList filter={filter} />

      <Facility />

    </div>
  )
}

export default Homepage
