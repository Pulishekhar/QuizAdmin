import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-casino-gold">Welcome to QuizLive</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience live quiz games with real-time betting and interactive streams
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Live Stream Card */}
          <Link 
            to="/live/1" 
            className="card hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-center">Join Live Stream</h2>
              <p className="text-gray-400 text-center">Participate in real-time quizzes with live video</p>
            </div>
          </Link>

          {/* How It Works Card */}
          <div className="card border border-casino-gold/30">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-casino-green rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center text-casino-gold">How It Works</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-casino-green mr-2">✓</span>
                  <span>Watch professional live streams with interactive content</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-casino-green mr-2">✓</span>
                  <span>Answer quiz questions that appear during the stream</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-casino-green mr-2">✓</span>
                  <span>Win 2X your bet for correct answers</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-casino-green mr-2">✓</span>
                  <span>Chat with other players and the host</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to="/live/1" 
            className="btn btn-primary inline-flex items-center px-8 py-3 text-lg"
          >
            Join Live Stream Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}