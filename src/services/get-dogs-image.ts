import { ROUTES } from "../utils/constants/services-path";
import { instance } from "./instance";

export interface GetDogsRandomImage {
  message: string;
}

export const getDogsRandomImage = async (breed: string) => {
  return (await instance.get<GetDogsRandomImage>(`${ROUTES.GET_DOGS_SUB_BREEDS}/${breed}/images/random`))?.data.message;
};
