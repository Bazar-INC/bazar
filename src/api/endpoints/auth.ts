import { Client } from '../client';

const client = new Client('auth');

const loginRequest = (phone: string) => {
   return client.post('request', { phone });
};

const loginConfirm = (phone: string, code: string) => {
   return client.post('confirm', { phone, code });
};

export const AuthEndpoints = {
   loginRequest,
   loginConfirm,
};
