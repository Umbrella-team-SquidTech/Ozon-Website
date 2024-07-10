import RowEventSkeleton from "../Skeletons/RowEventSkeleton";
export default function AvailableEventsSkeleton() {
  return (
    <div className="mt-4">
      <h1 className="mx-2 font-Outfit text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
        Évènements disponible
      </h1>
      <div>
        <RowEventSkeleton />
        <RowEventSkeleton />
        <RowEventSkeleton />
      </div>
    </div>
  );
}
