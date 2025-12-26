import axios from 'axios';

// Using free currency API (no key required for basic usage)
// You can get a free API key from https://exchangerate-api.com/ for more features
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';
const HISTORICAL_API = 'https://api.exchangerate.host/timeseries';

class CurrencyAPI {
  static async getExchangeRates(baseCurrency = 'USD') {
    try {
      const response = await axios.get(`${API_BASE_URL}/${baseCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  }

  static async getHistoricalRates(base, target, days = 7) {
    try {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];

      const response = await axios.get(HISTORICAL_API, {
        params: {
          start_date: startDate,
          end_date: endDate,
          base: base,
          symbols: target,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching historical rates:', error);
      throw error;
    }
  }

  static async getAllCurrencies() {
    try {
      const response = await axios.get(`${API_BASE_URL}/USD`);
      return Object.keys(response.data.rates);
    } catch (error) {
      console.error('Error fetching currencies:', error);
      // Fallback to common currencies
      return [
        'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 
        'INR', 'SGD', 'NZD', 'MXN', 'BRL', 'RUB', 'KRW', 'TRY'
      ];
    }
  }
}

export default CurrencyAPI;