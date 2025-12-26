import React, { useEffect, useState } from "react";


const API_KEY = "61cc6458c6d3af79f69e7f09";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KES");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRates();
  }, []);

  useEffect(() => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      convert();
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.result !== "success") {
        throw new Error("Failed to fetch exchange rates");
      }

      setRates(data.conversion_rates);
    } catch (err) {
      setError("Unable to fetch exchange rates. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const convert = () => {
    const rateFrom = rates[fromCurrency];
    const rateTo = rates[toCurrency];
    const convertedAmount = (amount / rateFrom) * rateTo;
    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Currency Converter
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          min="0"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium mb-1">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium mb-1">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading rates...</p>
      ) : (
        result && (
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">
              {amount} {fromCurrency} =
            </p>
            <p className="text-2xl font-bold text-green-600">
              {result} {toCurrency}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default CurrencyConverter;
