import React, { useState, useRef, useEffect } from 'react';

export default function ChatBox({ messages, onSendMessage }) {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gray-800 rounded-lg flex flex-col h-[400px]">
      <div className="p-3 border-b border-gray-700 font-medium">
        Live Chat
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="text-sm">
            <span className="font-medium text-blue-400">{msg.username}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-700 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}