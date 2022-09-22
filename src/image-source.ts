import { APP_ENV } from "./env";

export const getProductImageUrl = (image: string) => {
   return APP_ENV.REMOTE_HOST_NAME + "/cdn/products/images/" + image;
};
