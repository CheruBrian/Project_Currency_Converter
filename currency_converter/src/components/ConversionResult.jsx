import React from 'react';

export default function ConversionResult({ amount, from, to, rate, date }) {
  const converted = isNaN(Number(amount)) ? '-' : (Number(amount) * rate).toLocaleString(undefined, { maximumFractionDigits: 6 });
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <p className="text-sm text-gray-500">Rate: 1 {from} = {rate ?? '...'} {to}</p>
      {date && <p className="text-xs text-gray-400">Rates updated: {new Date(date).toLocaleString()}</p>}
      <h2 className="mt-2 text-2xl font-semibold">{converted} {to}</h2>
      <p className="text-sm text-gray-600 mt-1">{amount || 0} {from} → {converted} {to}</p>
    </div>
  );
}
