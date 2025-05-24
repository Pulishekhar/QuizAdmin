import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSocket } from '../../contexts/SocketContext';
import StreamPlayer from './StreamPlayer';
import ChatBox from './ChatBox';
import QuizPopup from './QuizPopup';
import { quizApi } from '../../api/quiz';

export default function LiveStream() {
  const { streamId } = useParams();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [viewersCount, setViewersCount] = useState(0);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.emit('join-stream', streamId);
    
    socket.on('quiz-activated', (quiz) => {
      setActiveQuiz(quiz);
    });

    socket.on('new-message', (message) => {
      setChatMessages(prev => [...prev, message]);
    });

    socket.on('viewers-updated', (count) => {
      setViewersCount(count);
    });

    return () => {
      socket.off('quiz-activated');
      socket.off('new-message');
      socket.off('viewers-updated');
      socket.emit('leave-stream', streamId);
    };
  }, [socket, streamId]);

  const handleQuizSubmit = async (answers) => {
    try {
      await quizApi.submitAnswers(activeQuiz.id, answers);
      socket.emit('quiz-submitted', { 
        quizId: activeQuiz.id,
        userId: localStorage.getItem('userId'),
      });
      setActiveQuiz(null);
    } catch (err) {
      console.error('Error submitting quiz:', err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-80px)]">
      <div className="flex-1">
        <StreamPlayer streamId={streamId} />
        
        {activeQuiz && (
          <QuizPopup 
            quiz={activeQuiz}
            onSubmit={handleQuizSubmit}
            onClose={() => setActiveQuiz(null)}
          />
        )}
      </div>
      
      <div className="w-full lg:w-80 flex flex-col gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Stream Info</h3>
          <div className="text-sm text-gray-300">
            <p>Viewers: {viewersCount}</p>
            <p>Status: Live</p>
          </div>
        </div>
        
        <ChatBox 
          messages={chatMessages}
          onSendMessage={(message) => {
            socket.emit('send-message', {
              streamId,
              message,
              userId: localStorage.getItem('userId'),
              username: localStorage.getItem('username'),
            });
          }}
        />
      </div>
    </div>
  );
}