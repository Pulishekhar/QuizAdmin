// src/components/quiz/BetControls.jsx
import { motion } from 'framer-motion';

const betOptions = [10, 50, 100];

export default function BetControls({ onBet }) {
  return (
    <div className="flex gap-4 mt-6">
      {betOptions.map(amount => (
        <motion.button
          key={amount}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-casino-green rounded-lg font-bold"
          onClick={() => onBet(amount)}
        >
          Bet {amount} pts
        </motion.button>
      ))}
    </div>
  );
}