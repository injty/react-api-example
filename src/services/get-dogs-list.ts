import { ROUTES } from "../utils/constants/services-path";
import { instance } from "./instance";

export interface Dogs {
  message: string[];
}

export const getDogsList = async () => {
  return (await instance.get<Dogs>(ROUTES.GET_DOGS_LIST))?.data.message;
};
