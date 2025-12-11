import { convertCurrency } from "../src/commponets/currencySector";

describe("Currency Conversion", () => {
  test("converts amount using the given exchange rate", () => {
    const result = convertCurrency(100, 150);
    expect(result).toBe(15000); // 100 * 150
  });

  test("returns 0 when amount is 0", () => {
    const result = convertCurrency(0, 150);
    expect(result).toBe(0);
  });

  test("handles decimal amounts", () => {
    const result = convertCurrency(12.5, 150);
    expect(result).toBeCloseTo(1875);
  });

  test("throws an error for negative amounts", () => {
    expect(() => convertCurrency(-5, 150)).toThrow();
  });

  test("throws an error for invalid exchange rates", () => {
    expect(() => convertCurrency(100, -150)).toThrow();
    expect(() => convertCurrency(100, 0)).toThrow();
  });
});
