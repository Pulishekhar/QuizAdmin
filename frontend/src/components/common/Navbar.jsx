import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-primary border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-casino-gold to-yellow-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            QuizLive
          </motion.span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/live/1" 
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            Live Stream
          </Link>
          <Link 
            to="/quiz" 
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            Quizzes
          </Link>
          {user && (
            <Link 
              to="/wallet" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Wallet
            </Link>
          )}
          {user?.isAdmin && (
            <Link 
              to="/admin" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Auth/Wallet Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <motion.div 
                className="hidden md:flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium">{user.username}</span>
                <motion.span 
                  className="bg-casino-green text-xs px-2 py-1 rounded-full"
                  key={user.points}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                >
                  {user.points} pts
                </motion.span>
              </motion.div>
              <motion.button 
                onClick={handleLogout}
                className="bg-casino-red hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                onClick={() => navigate('/login')}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
              <motion.button
                onClick={() => navigate('/register')}
                className="bg-casino-green hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}