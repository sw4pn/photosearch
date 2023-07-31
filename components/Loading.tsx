import { Skeleton } from "./ui/Skeleton";

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
    </div>
  );
};

export default Loading;
