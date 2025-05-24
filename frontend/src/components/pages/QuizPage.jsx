// src/components/pages/QuizPage.jsx
import React from 'react';
import QuizList from '../quiz/QuizList'; // Verify this path is correct

export default function QuizPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-casino-gold">Quiz Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Quizzes Section */}
        <div className="bg-casino-light p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Active Quizzes</h2>
          <QuizList />
        </div>
        
        {/* Quiz Instructions */}
        <div className="bg-casino-light p-6 rounded-lg border border-casino-gold/30">
          <h2 className="text-xl font-semibold mb-4">How to Play</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 text-casino-green mr-2">•</span>
              <span>Quizzes appear during live streams</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-casino-green mr-2">•</span>
              <span>Bet 10, 50 or 100 points per question</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-casino-green mr-2">•</span>
              <span>Win double points for correct answers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}