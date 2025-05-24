import React, { useState } from 'react';
import { useSocket } from '../../contexts/SocketContext';
import QuizManagement from './QuizManagement';
import StreamManagement from './StreamManagement';


export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('stream');
  const [streamStatus, setStreamStatus] = useState('offline');
  const socket = useSocket();

  const startStream = () => {
    socket.emit('start-stream');
    setStreamStatus('live');
  };

  const stopStream = () => {
    socket.emit('stop-stream');
    setStreamStatus('offline');
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={`px-4 py-2 ${activeTab === 'stream' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('stream')}
        >
          Stream Control
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'quiz' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz Management
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
      </div>
      
      {activeTab === 'stream' && (
        <StreamManagement 
          status={streamStatus}
          onStart={startStream}
          onStop={stopStream}
        />
      )}
      
      {activeTab === 'quiz' && <QuizManagement />}
      
      {activeTab === 'users' && <UserManagement />}
    </div>
  );
}