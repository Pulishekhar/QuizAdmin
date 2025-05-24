import React, { useState } from 'react';
import { quizApi } from '../../api/quiz';
import { useSocket } from '../../contexts/SocketContext';

export default function QuizManagement() {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    questions: [],
    betAmount: 10,
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    text: '',
    options: ['', '', '', ''],
    correctOption: 0,
  });
  const socket = useSocket();

  const handleAddQuestion = () => {
    setNewQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, currentQuestion],
    }));
    setCurrentQuestion({
      text: '',
      options: ['', '', '', ''],
      correctOption: 0,
    });
  };

  const handleCreateQuiz = async () => {
    try {
      const { data } = await quizApi.createQuiz(newQuiz);
      setQuizzes(prev => [...prev, data]);
      setNewQuiz({
        title: '',
        questions: [],
        betAmount: 10,
      });
    } catch (err) {
      console.error('Error creating quiz:', err);
    }
  };

  const activateQuiz = (quizId) => {
    socket.emit('activate-quiz', quizId);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Create New Quiz</h3>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Quiz Title"
            className="w-full p-2 bg-gray-700 rounded"
            value={newQuiz.title}
            onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
          />
          
          <select
            className="w-full p-2 bg-gray-700 rounded"
            value={newQuiz.betAmount}
            onChange={(e) => setNewQuiz({...newQuiz, betAmount: parseInt(e.target.value)})}
          >
            <option value={10}>10 points</option>
            <option value={50}>50 points</option>
            <option value={100}>100 points</option>
          </select>
          
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Question Text"
              className="w-full p-2 bg-gray-700 rounded"
              value={currentQuestion.text}
              onChange={(e) => setCurrentQuestion({...currentQuestion, text: e.target.value})}
            />
            
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correctOption"
                  checked={currentQuestion.correctOption === index}
                  onChange={() => setCurrentQuestion({...currentQuestion, correctOption: index})}
                />
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className="flex-1 p-2 bg-gray-700 rounded"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...currentQuestion.options];
                    newOptions[index] = e.target.value;
                    setCurrentQuestion({...currentQuestion, options: newOptions});
                  }}
                />
              </div>
            ))}
            
            <button
              onClick={handleAddQuestion}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
              disabled={!currentQuestion.text || currentQuestion.options.some(opt => !opt)}
            >
              Add Question
            </button>
          </div>
          
          <button
            onClick={handleCreateQuiz}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-500"
            disabled={!newQuiz.title || newQuiz.questions.length === 0}
          >
            Create Quiz
          </button>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Available Quizzes</h3>
        <div className="space-y-2">
          {quizzes.map(quiz => (
            <div key={quiz._id} className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <span>{quiz.title} ({quiz.questions.length} questions)</span>
              <button
                onClick={() => activateQuiz(quiz._id)}
                className="bg-yellow-600 px-3 py-1 rounded text-sm hover:bg-yellow-500"
              >
                Activate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}