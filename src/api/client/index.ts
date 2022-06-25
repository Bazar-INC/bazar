import axios from 'axios';

const BASE_URL = 'https://localhost:7165/api';

class Client {
   constructor() {

   }

   methodPost(endpoint: string, data?: any) {
      return axios.post(`${BASE_URL}/${endpoint}`, data);
   }
}

export { Client };
