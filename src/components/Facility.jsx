import React from 'react'
import { FaCar, FaShuttleVan, FaSwimmingPool, FaBath, FaConciergeBell, FaCocktail } from 'react-icons/fa'


const services = [
  {
    icon: <FaShuttleVan size={32}/>,
    title: 'Pick Up & Drop',
    desc: 'We\'ll pick you up from the airport and drop you off at the hotel, and vice versa, ensuring a hassle-free travel experience.'
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: 'Swimming Pool',
    desc: 'Enjoy a clean and refreshing swimming pool to relax and unwind after a long day.'
  },
  {
    icon: <FaCar size={32} />,
    title: 'Parking Space',
    desc:'Spacious and secure parking area available for all guests, free of hassle and worry.'
  },
  {
    icon: <FaBath size={32} />,
    title: 'Hot & Cold Water',
    desc:'24/7 availability of hot and cold water in all rooms for your comfort and convenience.'
  },
  {
    icon: <FaCocktail size={32} />,
    title: 'Welcom Drink',
    desc:'Start your stay with a refreshing welcome drink, on the house, to make you feel right at home.'
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: 'Full board',
    desc:'Enjoy complete meal plans with breakfast, lunch, and dinner prepared fresh every day.'
  },
  
]

const Facility = () => {
  return (
    <div className='bg-[#f8f0eb] py-16 px-4 md:px-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12'>
          <p className='text-sm tracking-widest uppercase text-gray-500'>Services</p>
          <h2 className='text-4xl font-serif font-semibold text-gray-800'>Facilties & Services</h2>
        </div>


        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10'>
          {
            services.map((service, index) => (
              <div key={index} className='flex flex-col items-start space-y-3'>
                <div className='bg-lime-400 rounded-full p-5 text-black'>
                  {service.icon}
                </div>
                <h3 className='text-2xl font-semibold text-gray-800'>{service.title}</h3>
                <p className='text-gray-500 max-w-xs text-sm'>{service.desc}</p>
                </div>
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default Facility

