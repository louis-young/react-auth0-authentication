import { MoonLoader } from "react-spinners";
import type { LoadingSpinnerProps } from "./types";

export const LoadingSpinner = ({ size = 50 }: LoadingSpinnerProps) => {
  return <MoonLoader color="blue" size={size} speedMultiplier={0.75} />;
};
