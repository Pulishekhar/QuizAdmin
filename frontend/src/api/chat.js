import { api } from './api';

export const chatApi = {
  getMessages: (streamId) => api.get(`/chat/${streamId}`),
  sendMessage: (data) => api.post('/chat', data),
};