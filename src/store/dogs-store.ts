import { create } from "zustand";
import { getDogsList } from "../services";

interface UseDogsStoreProps {
  loading: boolean;
  dogs: string[];
  search: string;
  breeds: string[];
  selectedBreed: boolean;
  filterdDogs: string[];
  setSearch: (value: string) => void;
  setBreeds: (value: string[]) => void;
  setSelectedBreed: (value: boolean) => void;

  setDogs: () => void;
  setFilteredDogs: () => void;
}

export const useDogsStore = create<UseDogsStoreProps>((set, get) => ({
  loading: false,
  dogs: [],
  search: "",
  breeds: [],
  selectedBreed: false,
  filterdDogs: [],
  setDogs: async () => {
    set({ loading: true });
    try {
      const data = await getDogsList();
      set({ dogs: data });
      set({ filterdDogs: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
  setFilteredDogs: () => {
    set({ filterdDogs: get().dogs.filter((dog) => dog.toLowerCase().includes(get().search.toLowerCase())) });
  },
  setSearch: (value) => set({ search: value }),
  setBreeds: (value) => set({ breeds: value }),
  setSelectedBreed: (value) => set({ selectedBreed: value }),
}));
