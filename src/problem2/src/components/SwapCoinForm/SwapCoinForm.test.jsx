import { render, screen, fireEvent } from '@testing-library/react';
import SwapCoinForm from './SwapCoinForm';
import React from 'react';
import coin from '../../data/coin.json';
import userEvent from '@testing-library/user-event';

const currencies = coin.map((c) => c.currency);

describe('SwapCoinForm', () => {
  test('renders form with default values', () => {
    render(<SwapCoinForm />);

    const fromSelect = screen.getByLabelText('From');
    const toSelect = screen.getByLabelText('To');
    const amountInput = screen.getByLabelText('Amount(step is 0.1)');
    const confirmButton = screen.getByText('CONFIRM SWAP');

    expect(fromSelect).toBeInTheDocument();
    expect(toSelect).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    expect(fromSelect.value).toBe(currencies[0]);
    expect(toSelect.value).toBe(currencies[1]);
    expect(amountInput.value).toBe('0.1');
  });

  test('updates swap value when amount or currency changes', async () => {
    render(<SwapCoinForm />);

    const fromSelect = screen.getByLabelText('From');
    const toSelect = screen.getByLabelText('To');
    const amountInput = screen.getByLabelText('Amount(step is 0.1)');
    const swapValue = screen.getByTestId('note');

    // Change amount
    fireEvent.change(amountInput, { target: { value: '0.2' } });
    expect(swapValue.textContent).toBe('0.2 BLUR = 0.005839153554744708 bNEO');

    // Change currency
    await userEvent.selectOptions(fromSelect, currencies[2]);
    await userEvent.selectOptions(toSelect, currencies[4]);
    expect(swapValue.textContent).toBe('0.2 BUSD = 0.1998366226 USD');
  });

  test('submits form and resets values on confirmation', async () => {
    render(<SwapCoinForm />);

    const confirmButton = screen.getByText('CONFIRM SWAP');
    const amountInput = screen.getByLabelText('Amount(step is 0.1)');

    // Change amount
    fireEvent.change(amountInput, { target: { value: '0.2' } });

    // Confirm swap
    window.confirm = vi.fn(() => true);
    window.alert = vi.fn();
    await userEvent.click(confirmButton);

    expect(window.confirm).toHaveBeenCalledWith(
      'Are you sure you want to swap?',
    );
    expect(window.alert).toHaveBeenCalledWith('Swap success');
    expect(amountInput.value).toBe('0.1');
  });
});
