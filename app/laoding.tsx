import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
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
      <Skeleton className="w-96 h-64" />
      <Skeleton className="w-96 h-64" />
    </div>
  );
}
