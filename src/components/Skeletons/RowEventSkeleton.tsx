import { Skeleton } from "../ui/skeleton";
export default function RowEventSkeleton() {
  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="w-1/2 flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-[18rem] h-3" />
          <Skeleton className="w-[23rem] h-4" />
        </div>
        <div>
          <Skeleton className="w-[15rem] h-3" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="w-[80%] h-10" />
          <Skeleton className="w-[80%] h-10" />
        </div>
      </div>
      <div className="w-1/2 px-4">
        <Skeleton className="w-full h-[13rem]" />
      </div>
    </div>
  );
}
