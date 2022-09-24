import { Client } from "../../client";

const client = new Client("auth");

const loginRequest = (phone: string) => {
   return client.post("/request", { phone });
};

interface LoginConfirmResponse {
   token: string;
}

const loginConfirm = (phone: string, code: string) => {
   return client.post<LoginConfirmResponse>("/confirm", { phone, code });
};

export const AuthAPI = {
   loginRequest,
   loginConfirm,
};
