import { Skeleton } from "../ui/skeleton";
export const ComingEventSkeleton = () => {
  return (
    <div className="p-4 md:w-2/6 flex flex-col items-center w-full justify-center">
      <Skeleton className="w-[19rem] h-[13rem] md:w-[23rem] md:h-[18rem]" />
      <div className="pt-3 flex flex-col gap-2">
        <Skeleton className="w-[10rem] md:w-[15rem] h-3 md:h-4" />
        <Skeleton className="w-[18rem] md:w-[22rem] h-3 md:h-4" />
      </div>
      <div className="w-auto pt-4 mt-2 flex flex-col gap-4 ">
        <div className="w-full">
          <Skeleton className="w-[20rem] mx-auto md:w-[24rem] h-8" />
        </div>
        <div className="w-full hidden md:block">
          <Skeleton className="md:w-[24rem] h-5 md:h-8" />
        </div>
      </div>
    </div>
  );
};
