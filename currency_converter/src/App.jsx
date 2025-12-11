// src/App.jsx
import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Currency Converter
      </h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
