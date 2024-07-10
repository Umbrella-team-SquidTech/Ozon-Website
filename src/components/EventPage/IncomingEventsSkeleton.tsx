import { ComingEventSkeleton } from "@/components/Skeletons/ComingEventSkeleton";

export default function IncomingEventsSkeleton() {
  return (
    <>
      <div className="hidden gap-2 w-full xl:flex">
        <ComingEventSkeleton />
        <ComingEventSkeleton />
        <ComingEventSkeleton />
      </div>
      <div className=" md:flex justify-around">
        <ComingEventSkeleton />
        <ComingEventSkeleton />
      </div>
      <div className="sm:hidden ">
        <ComingEventSkeleton />
      </div>
    </>
  );
}
