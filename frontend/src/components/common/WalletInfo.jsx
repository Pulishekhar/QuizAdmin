import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function WalletInfo() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="font-medium mb-2">Wallet Balance</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-yellow-400">
          {user?.points || 0} pts
        </span>
        <button className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500">
          Deposit
        </button>
      </div>
    </div>
  );
}