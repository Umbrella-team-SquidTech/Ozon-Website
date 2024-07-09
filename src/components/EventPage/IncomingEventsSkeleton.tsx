import { ComingEventSkeleton } from "@/components/Skeletons/ComingEventSkeleton";

export default function IncomingEventsSkeleton() {
  return (
    <div className="flex gap-2 w-full">
      <ComingEventSkeleton />
      <ComingEventSkeleton />
      <ComingEventSkeleton />
    </div>
  );
}
