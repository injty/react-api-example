import { FC } from "react";

import { DogsList, DogsRandomImage, DogsSearchInput, DogsSubBreeds, Logotype } from "./components";

export const App: FC = () => {
  return (
    <div className="flex flex-col items-center px-5">
      <Logotype />
      <DogsSearchInput />
      <DogsRandomImage />
      <DogsSubBreeds />
      <DogsList />
    </div>
  );
};
