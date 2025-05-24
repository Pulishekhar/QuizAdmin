import { api } from './api';

export const streamApi = {
  getLiveStreams: () => api.get('/stream'),
  startStream: (data) => api.post('/stream/start', data),
  stopStream: (id) => api.post(`/stream/stop/${id}`),
};