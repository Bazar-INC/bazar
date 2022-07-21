import { Client } from '../client';

const client = new Client('me');

const getProfile = () => {
   return client.get('profile');
};

export const AccountEndpoints = {
   getProfile
};
