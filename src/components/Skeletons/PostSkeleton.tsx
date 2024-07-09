import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div className="flex h-auto md:w-[80%] w-full md:mx-auto gap-2 md:gap-0">
      <div className="w-16">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
      <div className="w-full pt-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[9rem] h-3 md:h-4" />
          <Skeleton className="w-[5rem] h-3 md:h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[17rem] md:w-[35rem] h-3 md:h-4" />
          <Skeleton className="w-[13rem] md:w-[23rem] h-3 md:h-4" />
        </div>
        <Skeleton className="w-[14rem] h-[14rem]" />
      </div>
    </div>
  );
}
