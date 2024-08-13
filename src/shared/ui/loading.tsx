import { Loader } from "lucide-react";
import { FC } from "react";
import { cn } from "../../utils";

interface LoadingProps {
  className?: string;
}

export const Loading: FC<LoadingProps> = ({ className }) => {
  return <Loader className={cn("animate-[spin_500ms_linear_infinite]", className ? className : "")} size={40} />;
};
