import { CurrencyConverter } from './commponets/currencyConverter';

describe("Currency Conversion", () => {
  test("converts amount using the given exchange rate", () => {
    expect(convertCurrency(100, 150)).toBe(15000);
  });

  test("returns 0 when amount is 0", () => {
    expect(convertCurrency(0, 150)).toBe(0);
  });

  test("handles decimal amounts", () => {
    expect(convertCurrency(12.5, 150)).toBeCloseTo(1875);
  });

  test("throws an error for negative amounts", () => {
    expect(() => convertCurrency(-5, 150)).toThrow();
  });

  test("throws an error for invalid exchange rates", () => {
    expect(() => convertCurrency(100, -150)).toThrow();
    expect(() => convertCurrency(100, 0)).toThrow();
  });
});
