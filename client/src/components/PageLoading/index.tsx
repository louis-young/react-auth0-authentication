import { LoadingSpinner } from "../LoadingSpinner";

export const PageLoading = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <LoadingSpinner size={80} />
    </div>
  );
};
