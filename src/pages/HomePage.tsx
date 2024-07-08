import CreatePost from "@/components/HomePage/CreatePost";
import SinglePost from "@/components/HomePage/SinglePost";
import SuggestedEvent from "@/components/HomePage/SuggestedEvent";
import RootLayout from "@/components/RootLayout";
import useAuth from "@/hooks/useAuth";

export default function HomePage() {
  useAuth();
  return (
    <RootLayout>
      <div className="p-5 pt-0 md:px-20">
        <SuggestedEvent />
        <CreatePost />
        <SinglePost/>
      </div>
    </RootLayout>
  );
}
