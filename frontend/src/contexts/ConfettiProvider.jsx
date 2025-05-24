import React, { createContext, useState } from 'react';
import Confetti from 'react-confetti';

export const ConfettiContext = createContext();

export function ConfettiProvider({ children }) {
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);
  };

  return (
    <ConfettiContext.Provider value={{ triggerConfetti }}>
      {children}
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}
    </ConfettiContext.Provider>
  );
}