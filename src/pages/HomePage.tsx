import CreatePost from "@/components/HomePage/CreatePost";
import SinglePost from "@/components/HomePage/SinglePost";
import SuggestedEvent from "@/components/HomePage/SuggestedEvent";
import RootLayout from "@/components/RootLayout";
import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";
import HomePagePlaceholder from "@/components/HomePage/HomePagePlaceholder";
export default function HomePage() {
  const token = useToken();
  const { user, isLoading, error } = useUser(token);

  // TODO: handle error (navigate to error page)

  if (isLoading) {
    return (
      <RootLayout>
        <HomePagePlaceholder />
      </RootLayout>
    );
  }
  return (
    <RootLayout>
      <div className="p-5 pt-0 md:px-20">
        <SuggestedEvent />
        <CreatePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </RootLayout>
  );
}
