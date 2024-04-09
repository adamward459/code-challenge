import React from 'react';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import coin from '../../data/coin.json';
import CurrencySelect from './CurrencySelect';

const currencies = coin.map((c) => c.currency);

export default function SwapCoinForm() {
  const methods = useForm({
    defaultValues: {
      from: currencies[0],
      to: currencies[1],
      amount: 0.1,
    },
  });

  const onSubmit = useCallback((data) => {
    const ok = window.confirm('Are you sure you want to swap?');
    if (ok) {
      window.alert('Swap success');
      methods.reset();
    }
  }, []);

  const calculateSwapValue = useCallback((amount, from, to) => {
    const fromCurrency = coin.find((c) => c.currency === from);
    const toCurrency = coin.find((c) => c.currency === to);

    return (amount * fromCurrency.price) / toCurrency.price;
  }, []);

  const amount = methods.watch('amount');
  const from = methods.watch('from');
  const to = methods.watch('to');

  return (
    <FormProvider {...methods}>
      <form
        className="custom-swap-coin-form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h5 className="custom-header">Swap</h5>
        <div className="custom-form-group">
          <label className="custom-label" htmlFor="from">
            From
          </label>
          <CurrencySelect name={'from'} />
        </div>

        <div className="custom-form-group">
          <label className="custom-label" htmlFor="to">
            To
          </label>
          <CurrencySelect name={'to'} />
        </div>

        <div className="custom-form-group">
          <label className="custom-label" htmlFor="amount">
            Amount(step is 0.1)
          </label>
          <input
            id="amount"
            className="custom-input"
            type="number"
            placeholder="1"
            min="0.1"
            step="0.1"
            {...methods.register('amount')}
          />
        </div>

        <div className="custom-note">
          Note:{' '}
          <span data-testid="note">
            {amount} {from} = {calculateSwapValue(amount, from, to)} {to}
          </span>
        </div>

        <button className="custom-button" type="submit">
          CONFIRM SWAP
        </button>
      </form>
    </FormProvider>
  );
}
