import SuggestEventSkeleton from "@/components/Skeletons/SuggestEventSkeleton";
import PostSkeleton from "@/components/Skeletons/PostSkeleton";
export default function HomePagePlaceholder() {
  return (
    <div className="p-5 pt-0 md:px-20 h-auto flex flex-col gap-4 pb-[75px]">
      <SuggestEventSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}
