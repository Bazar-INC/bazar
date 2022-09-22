import { Client } from "../../client";

const client = new Client("me");

interface ProfileResponse {
   name: string;
}

const getProfile = () => {
   return client.get<ProfileResponse>("/profile");
};

export const MeAPI = {
   getProfile,
};
