import React from 'react';

export default function AmountInput({ amount, setAmount }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
      <input
        type="number"
        step="any"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
}
