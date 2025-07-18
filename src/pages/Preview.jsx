import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Preview() {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const printRef = useRef();

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');

    printWindow.document.write(`
      <html>
        <head>
          <title>Doctor's Prescription</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 30px;
            }
            h1 {
              color: #6b21a8;
              text-align: center;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p, li {
              font-size: 16px;
              margin-bottom: 8px;
              color: #1f2937;
            }
            ul {
              margin-left: 20px;
            }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    alert("🖨️ Printed successfully!");
  };

  const handleNewPrescription = () => {
    navigate('/script');
  };

  if (!data) {
    return <p className="text-center mt-10 text-red-500">❌ No data received</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* ✅ Only this will be printed */}
        <div
          ref={printRef}
          className="bg-white shadow-xl rounded-lg p-8 border border-gray-300"
        >
          <h1 className="text-3xl font-bold text-center text-violet-700 mb-6">
            Doctor's Prescription
          </h1>

          <div className="text-gray-800 space-y-3">
            <p><strong>👤 Patient Name:</strong> {data.name}</p>
            <p><strong>🎂 Age:</strong> {data.age}</p>
            <p><strong>🦠 Disease:</strong> {data.disease}</p>
            <p><strong>📝 Instructions:</strong> {data.summary}</p>

            <div>
              <strong>💊 Medicines:</strong>
              <ul className="list-disc ml-6 mt-1">
                {data.medicines.map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 🚫 Not printed */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handlePrint}
            className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-2 rounded-full"
          >
            🖨️ Print
          </button>

          <button
            onClick={handleNewPrescription}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full"
          >
            ➕ New Prescription
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
