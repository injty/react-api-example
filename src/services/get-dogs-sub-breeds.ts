import { ROUTES } from "../utils/constants/services-path";
import { instance } from "./instance";

export interface GetDogsSubBreeds {
  message: string[];
}

export const getDogsSubBreeds = async (breed: string) => {
  return (await instance.get<GetDogsSubBreeds>(`${ROUTES.GET_DOGS_SUB_BREEDS}/${breed}/list`))?.data.message;
};
