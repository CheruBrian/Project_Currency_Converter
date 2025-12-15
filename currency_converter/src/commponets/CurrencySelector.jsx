import React from 'react';
import Select from 'react-select';

const convertCurrency = (amount, rate) => {
  if (amount < 0) throw new Error("Invalid amount");
  if (rate <= 0) throw new Error("Invalid rate");
  return amount * rate;
};

export default convertCurrency;
