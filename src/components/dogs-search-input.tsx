import { ChangeEvent, FC, Fragment } from "react";

import { X } from "lucide-react";
import { useDogsStore } from "../store/dogs-store";

export const DogsSearchInput: FC = () => {
  const { setSearch, breeds, setBreeds, search, filterdDogs, selectedBreed } = useDogsStore();

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (breeds) setBreeds([]);
  };

  return (
    <Fragment>
      <div className="relative mt-5 flex items-center justify-center py-5">
        <input
          className="min-w-[280px] rounded-md bg-[#121212] py-3 pl-6 pr-10 text-[#EBDBB2]"
          onChange={(e) => handleChangeSearchInput(e)}
          placeholder="Начните вводить породу..."
          value={search}
        />
        <span onClick={() => setSearch("")} className="absolute right-2 cursor-pointer">
          <X color="#EBDBB2" />
        </span>
      </div>

      {!selectedBreed && filterdDogs?.length === 0 && search && (
        <div>
          А Вы точно ищете породу собаки? Я таких не знаю...<span className="text-2xl">🐶</span>
        </div>
      )}
    </Fragment>
  );
};
