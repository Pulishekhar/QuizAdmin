import React, { useState } from 'react';

const QuizPopup = ({ quiz, onSubmit, onClose }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleSubmit = () => {
    onSubmit(selectedAnswers);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Quiz Time!</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">
            Bet Amount: <span className="text-yellow-400">{quiz.betAmount} points</span>
          </p>
          <p className="text-sm text-gray-300">
            Potential Win: <span className="text-green-400">{quiz.betAmount * 2} points</span>
          </p>
        </div>
        
        {quiz.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <h3 className="font-medium mb-2">{question.text}</h3>
            <div className="space-y-2">
              {question.options.map((option) => (
                <div 
                  key={option.id}
                  className={`p-3 rounded cursor-pointer ${selectedAnswers[question.id] === option.id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                  onClick={() => handleOptionSelect(question.id, option.id)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium"
          disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default QuizPopup;