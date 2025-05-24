// src/components/admin/UserWalletControl.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UserWalletControl({ users, onTopUp }) {
  const [selectedUser, setSelectedUser] = useState('');
  const [amount, setAmount] = useState(50);

  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-xl font-semibold mb-4">Wallet Management</h3>
      
      <div className="space-y-4">
        <select 
          className="w-full p-2 bg-gray-700 rounded"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.username} ({user.points} pts)
            </option>
          ))}
        </select>

        <div className="flex items-center gap-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="flex-1 p-2 bg-gray-700 rounded"
            min="1"
          />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-casino-green rounded"
            onClick={() => onTopUp(selectedUser, amount)}
            disabled={!selectedUser}
          >
            Add Points
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}