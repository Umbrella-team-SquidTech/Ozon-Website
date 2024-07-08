import CreatePost from "@/components/HomePage/CreatePost";
import SinglePost from "@/components/HomePage/SinglePost";
import SuggestedEvent from "@/components/HomePage/SuggestedEvent";
import RootLayout from "@/components/RootLayout";
import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";
import axios from "@/config/axios";
import useUserStore from "@/stores/useUser";
export default function HomePage() {
  const token = useToken();
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    function getUser() {
      axios
        .get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUser();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <RootLayout>
      <div className="p-5 pt-0 md:px-20">
        <SuggestedEvent />
        <CreatePost />
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
      </div>
    </RootLayout>
  );
}
