// src/components/quiz/QuizList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Must use "export default" 
export default function QuizList() {
  const navigate = useNavigate();
  
  const quizzes = [
    { id: 1, title: "Sports Trivia", questionCount: 5, prize: 100 },
    { id: 2, title: "Movie Quiz", questionCount: 3, prize: 50 },
    { id: 3, title: "Music Challenge", questionCount: 7, prize: 150 }
  ];

  return (
    <div className="space-y-4">
      {quizzes.map(quiz => (
        <div 
          key={quiz.id}
          className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
          onClick={() => navigate(`/quiz/${quiz.id}`)}
        >
          <h3 className="font-medium text-lg">{quiz.title}</h3>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>{quiz.questionCount} questions</span>
            <span className="text-casino-gold">{quiz.prize} points</span>
          </div>
        </div>
      ))}
    </div>
  );
}