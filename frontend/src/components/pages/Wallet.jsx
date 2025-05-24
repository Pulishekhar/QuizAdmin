import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { walletApi } from '../../api/wallet';

export default function Wallet() {
  const { user, setUser } = useAuth();
  const [amount, setAmount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = async () => {
    setIsLoading(true);
    try {
      const { data } = await walletApi.topUp({ userId: user.id, amount });
      setUser(data.user);
    } catch (err) {
      console.error('Deposit failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold mb-6">Wallet</h2>
        
        <motion.div 
          className="mb-6 p-4 bg-gray-700 rounded-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Balance</span>
            <motion.span 
              className="text-2xl font-bold text-casino-gold"
              key={user?.points}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {user?.points || 0} pts
            </motion.span>
          </div>
        </motion.div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Add Points</label>
            <select
              className="w-full p-2 bg-gray-700 rounded"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            >
              <option value={10}>10 points</option>
              <option value={50}>50 points</option>
              <option value={100}>100 points</option>
              <option value={500}>500 points</option>
              <option value={1000}>1000 points</option>
            </select>
          </div>

          <motion.button
            onClick={handleDeposit}
            disabled={isLoading}
            className="w-full bg-casino-green py-2 rounded hover:bg-green-600 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Processing...' : 'Add Points'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}