import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SocketProvider } from './contexts/SocketContext';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import QuizPage from './components/pages/QuizPage';
import LiveStream from './components/live/LiveStream';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminPanel from './components/admin/AdminPanel';
import Wallet from './components/pages/Wallet';
import { Toaster } from 'react-hot-toast';
import {ConfettiProvider} from './contexts/ConfettiProvider';

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <ConfettiProvider>
          <div className="bg-[#0e0e0e] text-white min-h-screen">
            <Toaster position="top-center" />
            <Navbar />
            <div className="px-6 py-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/live/:streamId" element={<LiveStream />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </ConfettiProvider>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;