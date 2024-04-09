import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import BitcoinIcon from '../../icons/bitcoin-icon.svg';

const IMAGE_WIDTH = 100;

export default function BitcoinBackground() {
  const [children, setChildren] = useState([]);

  const createBackground = useCallback(() => {
    const rows = Math.floor(window.innerWidth / IMAGE_WIDTH);
    const cols = Math.floor(window.innerHeight / IMAGE_WIDTH);

    const elements = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        elements.push(
          <img
            key={v4()}
            src={BitcoinIcon}
            style={{
              left: `${i * IMAGE_WIDTH}px`,
              top: `${j * IMAGE_WIDTH}px`,
            }}
            data-testid="bitcoin-icon"
          />,
        );
      }
    }
    setChildren(elements);
  }, []);

  useEffect(() => {
    createBackground();

    window.addEventListener('resize', createBackground);

    return () => {
      window.removeEventListener('resize', createBackground);
    };
  }, []);

  return (
    <div className="bitcoin-background" data-testid="bitcoin-background">
      {children}
    </div>
  );
}
