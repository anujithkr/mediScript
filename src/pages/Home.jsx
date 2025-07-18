import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Printer, ClipboardCheck } from "lucide-react";

function Home() {
  return (
    <section className="bg-gradient-to-br from-violet-100 to-violet-200 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl bg-white rounded-3xl shadow-lg p-10">
        <div className="flex justify-center mb-4">
          <Stethoscope className="w-12 h-12 text-violet-700" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-violet-700 mb-4">
          Welcome to MediScript
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Your trusted digital platform for managing patient prescriptions securely and efficiently.
          Designed for modern clinics and doctors to streamline medical documentation.
        </p>

        <Link to="/login">
          <button className="bg-violet-700 hover:bg-violet-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
            🚀 Get Started
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-5xl px-4">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <ClipboardCheck className="mx-auto text-violet-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-violet-700 mb-2">Easy Prescription</h3>
          <p className="text-gray-600 text-sm">Quickly fill, preview, and print prescriptions with just a few clicks.</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Printer className="mx-auto text-violet-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-violet-700 mb-2">Print Friendly</h3>
          <p className="text-gray-600 text-sm">Clean and professional print layout for patients and record keeping.</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Stethoscope className="mx-auto text-violet-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-violet-700 mb-2">Doctor-Centered</h3>
          <p className="text-gray-600 text-sm">Built with care for clinics and doctors who want simplicity & speed.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
