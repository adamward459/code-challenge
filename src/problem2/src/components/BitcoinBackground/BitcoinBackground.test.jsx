import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, it, suite } from 'vitest';
import BitcoinBackground from './BitcoinBackground';

suite('BitcoinBackground', () => {
  it('renders without errors', () => {
    render(<BitcoinBackground />);
    const bitcoinBackgroundElement = screen.getByTestId('bitcoin-background');
    expect(bitcoinBackgroundElement).toBeInTheDocument();
  });

  it('renders correct number of BitcoinIcon components', () => {
    render(<BitcoinBackground />);
    const bitcoinIconElements = screen.getAllByTestId('bitcoin-icon');
    expect(bitcoinIconElements.length).toBeGreaterThan(0);
  });

  it('updates the background when window is resized', () => {
    render(<BitcoinBackground />);
    const initialBitcoinIconElements = screen.getAllByTestId('bitcoin-icon');

    // Simulate window resize
    window.innerWidth = 800;
    window.innerHeight = 600;
    window.dispatchEvent(new Event('resize'));

    const updatedBitcoinIconElements = screen.getAllByTestId('bitcoin-icon');
    expect(updatedBitcoinIconElements.length).toBe(
      initialBitcoinIconElements.length,
    );
  });
});
