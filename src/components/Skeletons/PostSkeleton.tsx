import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div className="flex h-auto w-[80%] mx-auto">
      <div className="w-16">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
      <div className="w-full pt-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[9rem] h-4" />
          <Skeleton className="w-[5rem] h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[35rem] h-4" />
          <Skeleton className="w-[23rem] h-4" />
        </div>
        <Skeleton className="w-[14rem] h-[14rem]" />
      </div>
    </div>
  );
}
