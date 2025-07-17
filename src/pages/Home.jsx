import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-violet-100 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-violet-700 mb-6">
          Welcome to MediScript
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your trusted digital platform for managing patient prescriptions securely and efficiently. 
          Designed for modern clinics and doctors to streamline medical documentation.
        </p>
        <Link to="/login">
          <button className="bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-violet-400 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
