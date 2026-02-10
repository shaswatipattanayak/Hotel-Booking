// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Homepage from './pages/Homepage'
// import Navbar from './components/Navbar'
// import HotelDetails from './pages/HotelDetails'
// import Footer from './components/Footer'


// const App = () => {
//   return (
//     <div>

//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Homepage />} />
//         <Route path='/room/:id' element={<HotelDetails />} />
        
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App





import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import HotelDetails from './pages/HotelDetails'
import Footer from './components/Footer'
import Bookings from "./pages/Bookings"
import Rooms from "./pages/Rooms"
import Contact from "./pages/Contact"
import Payment from "./pages/Payment";



// // Create simple pages
// const Bookings = () => <h1 className='text-center text-3xl mt-10'>My Bookings Page</h1>
// const Rooms = () => <h1 className='text-center text-3xl mt-10'>All Rooms Page</h1>
// const Contact = () => <h1 className='text-center text-3xl mt-10'>Contact Page</h1>

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/room/:id' element={<HotelDetails />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
