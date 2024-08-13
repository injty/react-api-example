import { FC, useEffect } from "react";

import { Loading } from "../shared";
import { useDogsStore } from "../store/dogs-store";

export const DogsList: FC = () => {
  const { setDogs, setSelectedBreed, dogs, selectedBreed, setFilteredDogs, setSearch, search, filterdDogs, loading } = useDogsStore();

  useEffect(() => {
    setFilteredDogs();
    setSelectedBreed(dogs.map((dog) => dog.toLowerCase()).includes(search.toLowerCase()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    setDogs();
  }, [setDogs]);

  return (
    <div className="max-w-[1020px] pb-20 pt-10 text-center text-[#EBDBB2]">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-3">
          {!selectedBreed &&
            filterdDogs.map((dog) => (
              <button
                onClick={() => setSearch(dog)}
                className="select-none rounded-md bg-[#202020] px-4 py-2 capitalize shadow-sm transition-all duration-150 hover:bg-[#689D6A] hover:text-[#1e1e1e]"
                key={dog}>
                {dog}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
