import { api } from './api';

export const quizApi = {
  createQuiz: (data) => api.post('/quiz', data),
  activateQuiz: (id) => api.put(`/quiz/activate/${id}`),
  getActiveQuiz: (streamId) => api.get(`/quiz/active/${streamId}`),
  getAllQuizzes: () => api.get('/quiz'),
};