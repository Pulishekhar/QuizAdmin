// src/components/common/WalletDisplay.jsx
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

export default function WalletDisplay() {
  const { user } = useAuth();

  return (
    <motion.div 
      className="bg-gray-800 p-4 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-gray-300">Your Points:</span>
        <motion.span
          key={user?.points}
          initial={{ scale: 1.5, color: '#f59e0b' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="text-2xl font-bold text-casino-gold"
        >
          {user?.points || 0}
        </motion.span>
      </div>
    </motion.div>
  );
}