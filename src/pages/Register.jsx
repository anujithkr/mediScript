// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // <-- Initialize navigate

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4005/api/register', formData);
      console.log(res.data);
      alert("Registered successfully!");

      navigate('/login'); // <-- Redirect to login after successful registration
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-violet-700 text-center mb-4">Create Account on MediCraft</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Join us for a better healthcare experience</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-violet-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-violet-300 rounded-xl"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-violet-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-violet-300 rounded-xl"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-violet-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-violet-300 rounded-xl"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-xl hover:bg-violet-800 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
