import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Plus } from 'lucide-react';

export default function Script() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    disease: '',
    summary: '',
    medicines: ['']
  });

  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions for the last medicine input
  useEffect(() => {
    const lastMed = formData.medicines[formData.medicines.length - 1];
    if (lastMed.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await axios.get(
          'https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search',
          { params: { terms: lastMed, maxList: 8 } }
        );
        setSuggestions(res.data[1] || []);
      } catch {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [formData.medicines]);

  const handleChange = (e, idx = null) => {
    const { name, value } = e.target;
    if (name === 'medicines') {
      const meds = [...formData.medicines];
      meds[idx] = value;
      setFormData({ ...formData, medicines: meds });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const selectSuggestion = (idx, value) => {
    const meds = [...formData.medicines];
    meds[idx] = value;
    setFormData({ ...formData, medicines: meds });
    setSuggestions([]);
  };

  const addMedicineField = () => {
    setFormData({ ...formData, medicines: [...formData.medicines, ''] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/preview', { state: formData });
  };

  return (
    <div className="min-h-screen bg-violet-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-violet-700 mb-6 text-center">
          Prescription Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field name="name" label="👤 Patient Name" type="text" value={formData.name} onChange={handleChange} required />
          <Field name="age" label="🎂 Age" type="number" value={formData.age} onChange={handleChange} required />
          <Field name="disease" label="🦠 Disease" type="text" value={formData.disease} onChange={handleChange} required />
          <Textarea name="summary" label="📝 Instructions" value={formData.summary} onChange={handleChange} />

          {/* Medicine fields with autocomplete */}
          <div>
           <label className="text-violet-700 font-medium mb-1 flex justify-between items-center">
              💊 Medicine
              <button type="button" onClick={addMedicineField}>
                <Plus className="w-5 h-5 text-violet-700 hover:text-violet-900" />
              </button>
            </label>
            {formData.medicines.map((med, idx) => (
              <div key={idx} className="relative mb-3">
                <input
                  name="medicines"
                  value={med}
                  onChange={e => handleChange(e, idx)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder={`Medicine ${idx + 1}`}
                  required
                />
                {idx === formData.medicines.length - 1 && suggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-40 overflow-y-auto shadow">
                    {suggestions.map((s, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-violet-100 cursor-pointer"
                        onClick={() => selectSuggestion(idx, s)}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <button type="submit" className="w-full bg-violet-700 text-white py-2 rounded-full hover:bg-violet-800 transition">
            🔍 Preview
          </button>
        </form>
      </div>
    </div>
  );
}

// Reusable input component
function Field({ name, label, type, value, onChange, required }) {
  return (
    <div>
      <label className="block text-violet-700 font-medium mb-1">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
        placeholder={`Enter ${label.replace(/[^a-zA-Z ]/g, '').toLowerCase()}`}
      />
    </div>
  );
}

// Reusable textarea component
function Textarea({ name, label, value, onChange }) {
  return (
    <div>
      <label className="block text-violet-700 font-medium mb-1">{label}</label>
      <textarea
        name={name}
        rows="4"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
        placeholder={`Enter ${label.replace(/[^a-zA-Z ]/g, '').toLowerCase()}`}
      />
    </div>
  );
}
