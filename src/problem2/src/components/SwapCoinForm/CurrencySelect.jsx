import React from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';
import coin from '../../data/coin.json';

export default function CurrencySelect({ name }) {
  const { register, watch } = useFormContext();
  const currencies = coin.map((c) => c.currency);

  return (
    <select
      className="custom-input"
      id={name}
      value={watch(name)}
      {...register(name)}
    >
      {currencies.map((currency) => (
        <option key={v4()}>{currency}</option>
      ))}
    </select>
  );
}
