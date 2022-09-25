import { Client } from "../../client";
import { TownModel } from "../../models/town";

const client = new Client("towns");

const getCities = () => {
   return client.get<Array<TownModel>>("");
};

const TownsAPI = {
   getCities,
};

export { TownsAPI };
