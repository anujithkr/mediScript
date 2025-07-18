import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token'); // ✅ Check token

  const handleLogout = () => {
    localStorage.removeItem('token'); // ✅ Remove token
    navigate('/'); // Or reload: window.location.reload();
  };

  return (
    <>
      <header className="bg-violet-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wide">MediScript</h1>
          </Link>

          {/* Conditional Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-violet-700 font-medium px-5 py-3 rounded-full shadow hover:bg-violet-300 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-white text-violet-700 font-medium px-5 py-3 rounded-full shadow hover:bg-violet-300 transition">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
