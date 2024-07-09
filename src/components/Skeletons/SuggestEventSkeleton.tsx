import { Skeleton } from "@/components/ui/skeleton";

export default function SuggestEventSkeleton() {
  return (
    <div className="mt-4 w-full flex">
      <div className="w-full p-4 md:p-7 flex justify-around gap-5 md:gap-0">
        <div className=" flex flex-col gap-4">
          <Skeleton className="w-[6rem] md:w-[15rem] h-3 md:h-4" />
          <Skeleton className="w-[11rem] md:w-[20rem] h-3 md:h-4" />
          <Skeleton className="w-[6rem] md:w-[15rem] h-2 md:h-3 mt-3" />
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <Skeleton className="w-[8rem] md:w-[30rem] h-28" />
        </div>
      </div>
    </div>
  );
}
