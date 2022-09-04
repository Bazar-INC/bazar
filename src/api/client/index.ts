import axios, { AxiosInstance } from 'axios';
import { StorageUtility } from '../../utilities/storageUtility';
import { APP_ENV } from '../../env';

const tokenStorage = new StorageUtility<string>('TOKEN_STORAGE');

const createAxiosInstance = (baseUrl: string) => {

   const client = axios.create({
      baseURL: `${APP_ENV.REMOTE_HOST_NAME}/api/${baseUrl}`,
      timeout: 5000
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
};

class Client {

   private client: AxiosInstance;

   constructor(baseUrl: string) {
      this.client = createAxiosInstance(baseUrl);
   }

   get<TResponse>(url: string) {
      return this.client.get<TResponse>(url);
   }

   post<TResponse>(url: string, data?: unknown) {
      return this.client.post<TResponse>(url, data);
   }

   delete<TResponse>(url: string) {
      return this.client.delete<TResponse>(url);
   }
}

export { Client };
