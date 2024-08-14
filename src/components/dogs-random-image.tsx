import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

import { Loading } from "../shared";

import { getDogsRandomImage } from "../services";
import { useDogsStore } from "../store/dogs-store";

export const DogsRandomImage: FC = () => {
  const { selectedBreed, search } = useDogsStore();
  const { data, isLoading } = useQuery({
    queryKey: ["getDogsRamdomImage"],
    queryFn: async () => {
      const data = await getDogsRandomImage(search);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: selectedBreed,
  });

  if (isLoading)
    <div className="flex h-full max-h-[200px] w-full max-w-[320px] items-center justify-center">
      <Loading />
    </div>;

  return (
    data &&
    selectedBreed && (
      <div className="mb-5 w-full max-w-[320px] px-4 py-4">
        <img className="mx-auto h-full max-h-[200px] w-full max-w-[300px] rounded-md bg-cover shadow-lg" loading="lazy" height={300} src={data} alt={search} />
      </div>
    )
  );
};
