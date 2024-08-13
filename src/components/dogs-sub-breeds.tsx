import { useQuery } from "@tanstack/react-query";
import { FC, Fragment } from "react";

import { Bone, PawPrint } from "lucide-react";
import { getDogsSubBreeds } from "../services";
import { useDogsStore } from "../store/dogs-store";

interface DogsSubBreedsProps {
  className?: string;
}

export const DogsSubBreeds: FC<DogsSubBreedsProps> = () => {
  const { search, breeds, selectedBreed, setSearch, setBreeds } = useDogsStore();

  useQuery({
    queryKey: ["getDogsSubBreeds"],
    queryFn: async () => {
      const data = await getDogsSubBreeds(search);
      setBreeds(data);
      return data;
    },
    enabled: selectedBreed,
  });

  return (
    <Fragment>
      {breeds?.length > 0 && selectedBreed && (
        <Fragment>
          <div className="mt-0 text-[#A89984]">
            Sub-породы: <span className="font-extrabold uppercase text-[#CC241D]">{search}</span>
          </div>
          <div className="mt-4 flex w-full max-w-[320px] flex-col gap-2 rounded-md bg-[#282828] px-2 py-4 text-center text-[#D79921]">
            {breeds?.map((dog: string) => (
              <div className="capitalize" key={dog}>
                {dog}
              </div>
            ))}
          </div>
          <button className="mt-4 flex items-center gap-3 rounded-md bg-[#689D6A] px-3 py-2 text-[#1e1e1e] hover:opacity-80" onClick={() => setSearch("")}>
            Вернуться к списку
            <PawPrint size={18} />
          </button>
        </Fragment>
      )}

      {selectedBreed && breeds?.length === 0 && (
        <div className="flex flex-col items-center">
          <div>
            К сожалению, <span className="font-extrabold text-[#689D6A]">{search}</span> не имеет подпород... <span className="text-2xl">🐕</span>
          </div>
          <button className="mt-4 flex items-center gap-3 rounded-md bg-[#689D6A] px-3 py-2 text-[#1e1e1e] hover:opacity-80" onClick={() => setSearch("")}>
            Назад
            <Bone size={18} />
          </button>
        </div>
      )}
    </Fragment>
  );
};
