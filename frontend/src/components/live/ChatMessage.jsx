// src/components/live/ChatMessage.jsx
import { motion } from 'framer-motion';

export default function ChatMessage({ message, isCurrentUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isCurrentUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-2`}
    >
      <div className={`max-w-xs p-3 rounded-lg ${isCurrentUser ? 'bg-blue-600' : 'bg-gray-700'}`}>
        <p className="text-sm">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">{message.username}</p>
      </div>
    </motion.div>
  );
}