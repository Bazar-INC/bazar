import axios, { AxiosInstance } from 'axios';
import { StorageUtility } from "../../utilities/storageUtility";

const HOST_NAME = 'https://localhost:7165';

const tokenStorage = new StorageUtility<string>('TOKEN_STORAGE');

const createAxiosInstance = (baseUrl: string) => {

   const client = axios.create({
      baseURL: `${HOST_NAME}/api/${baseUrl}/`,
   });

   client.interceptors.request.use(
      (config) => {
         const token = tokenStorage.get();
         if (token) {
            config.headers = {
               ...config.headers,
               Authorization: `Bearer ${token}`
            };
         }
         return config;
      },
      (error) => Promise.reject(error)
   );

   return client;
}


class Client {

   private client: AxiosInstance;

   constructor(baseUrl: string) {
      this.client = createAxiosInstance(baseUrl);
   }

   get<TResponse>(url: string) {
      return this.client.get(url);
   }

   post<TResponse>(url: string, data?: any) {
      return this.client.post(url, data);
   }
}

export { Client };
