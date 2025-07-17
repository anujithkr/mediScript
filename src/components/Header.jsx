import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
      <header className="bg-violet-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <Link to="/">
          <h1 className="text-2xl font-bold tracking-wide">MediScript</h1>
          </Link>

          {/* Get Started Button with navigation */}
          <Link to="/login">
            <button className="bg-white text-violet-700 font-medium px-5 py-3 rounded-full shadow hover:bg-violet-300 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>
   </>
  )
}

export default Header