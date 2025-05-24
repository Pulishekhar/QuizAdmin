import { api } from './api';

export const walletApi = {
  getBalance: () => api.get('/wallet/balance'),
  topUp: (data) => api.post('/wallet/topup', data),
  placeBet: (data) => api.post('/wallet/bet', data),
  getTransactions: () => api.get('/wallet/transactions'),
};