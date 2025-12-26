// src/services/exchangeService.js
import axios from 'axios';

const BASE = import.meta.env.VITE_EXCHANGE_API_BASE || 'https://api.exchangerate.host/latest';

/**
 * Fetch latest rates for a base currency.
 * Returns object: { base, date, rates: { USD: 1.0, ... } }
 */
export async function fetchRates(base = 'USD') {
  try {
    // Example for exchangerate.host (free, no key)
    const url = `${BASE}${BASE.endsWith('/latest') ? '' : '/'}?base=${encodeURIComponent(base)}`;
    const res = await axios.get(url, {
      headers: {
        // If using a key-based provider, set Authorization or query param here
        // Authorization: `Bearer ${import.meta.env.VITE_EXCHANGE_API_KEY || ''}`
      },
      timeout: 10000,
    });

    // Different APIs return different shapes — normalize:
    const data = res.data;
    // For exchangerate.host: data = { base, date, rates }
    // For exchangerate-api.com: data = { base_code, time_last_update_utc, rates }
    const baseCurrency = data.base || data.base_code || base;
    const date = data.date || data.time_last_update_utc || null;
    const rates = data.rates || data.conversion_rates || {};

    return { base: baseCurrency, date, rates };
  } catch (err) {
    // normalize thrown error
    const message = err.response?.data?.error || err.message || 'Network error';
    throw new Error(`Failed to fetch rates: ${message}`);
  }
}
