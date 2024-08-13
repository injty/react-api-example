import { FC } from "react";

export const Logotype: FC = () => {
  return (
    <div className="mt-12 flex select-none flex-col items-center">
      <div className="text-4xl">🐕‍🦺</div>
      <div className="flex items-end">
        <div className="font-extrabold text-[#D79921]">DogS</div>
        <div className="font-extrabold text-[#CC241D]">earch</div>
      </div>
    </div>
  );
};
