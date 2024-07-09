import { Skeleton } from "@/components/ui/skeleton";

export default function SuggestEventSkeleton() {
  return (
    <div className="mt-4 w-full flex">
      <div className="w-full p-4 md:p-7 flex justify-around">
        <div className=" flex flex-col gap-4">
          <Skeleton className="w-[15rem] h-4" />
          <Skeleton className="w-[20rem] h-4" />
          <Skeleton className="w-[15rem] h-3 mt-3" />
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <Skeleton className="w-[30rem] h-28" />
        </div>
      </div>
    </div>
  );
}
