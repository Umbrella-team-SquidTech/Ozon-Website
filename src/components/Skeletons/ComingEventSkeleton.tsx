import { Skeleton } from "../ui/skeleton";
export const ComingEventSkeleton = () => {
  return (
    <div className="p-4 w-2/6 flex flex-col items-center justify-center">
      <Skeleton className="w-[23rem] h-[18rem]" />
      <div className="pt-3 flex flex-col gap-2">
        <Skeleton className="w-[15rem] h-4" />
        <Skeleton className="w-[22rem] h-4" />
      </div>
      <div className="w-full pt-4 mt-2 flex flex-col gap-4">
        <div className="w-full">
          <Skeleton className="w-[24rem] h-8" />
        </div>
        <div className="w-full">
          <Skeleton className="w-[24rem] h-8" />
        </div>
      </div>
    </div>
  );
};
