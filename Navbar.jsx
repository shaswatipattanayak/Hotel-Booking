import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-black text-white'>
      <div className='flex justify-between items-center px-6 py-4 max-w-7xl mx-auto'>
        
        {/* Logo */}
        <Link to='/'>
          <h2 className='font-bold text-2xl'>
            ATITHI <span className='text-lime-400'>HOTELS</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 font-bold text-lg'>
          <li>
            <Link to='/bookings' className='hover:text-lime-500'>BOOKINGS</Link>
          </li>
          <li>
            <Link to='/rooms' className='hover:text-lime-500'>ROOMS</Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-lime-500'>CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className='md:hidden text-2xl cursor-pointer'>
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black px-6 pb-4'>
          <ul className='flex flex-col gap-4 font-bold text-lg'>
            <li>
              <Link to='/bookings' onClick={() => setMenuOpen(false)} className='hover:text-lime-500'>
                BOOKINGS
              </Link>
            </li>
            <li>
              <Link to='/rooms' onClick={() => setMenuOpen(false)} className='hover:text-lime-500'>
                ROOMS
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setMenuOpen(false)} className='hover:text-lime-500'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
