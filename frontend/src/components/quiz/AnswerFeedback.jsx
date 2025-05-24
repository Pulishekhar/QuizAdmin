// src/components/quiz/AnswerFeedback.jsx
import { motion } from 'framer-motion';

export default function AnswerFeedback({ isCorrect, pointsWon }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50`}
    >
      <div className={`p-8 rounded-lg text-center ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          {isCorrect ? (
            <h2 className="text-4xl font-bold">+{pointsWon} points!</h2>
          ) : (
            <h2 className="text-4xl font-bold">Try Again!</h2>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}