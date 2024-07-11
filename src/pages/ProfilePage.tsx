import Blocks from "@/components/Profile/Blocks";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import RootLayout from "@/components/RootLayout";
import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customAxios from "@/config/axios";
import { useToast } from "@/components/ui/use-toast";
import UpdateProfile from "@/components/Profile/UpdateProfile";
const ProfilePage = () => {
  const token = useToken();
  const [user, setUser] = useState<UserI | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const userId = useParams().id;
  useEffect(() => {
    customAxios
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast({
          title: "error",
          description: "ErrorFailed to load user data",
          variant: "destructive",
        });
      });
  }, []);
  console.log(user);

  if (isLoading) {
    return (
      <RootLayout>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#11998E]"></div>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className=" overflow-x-hidden">
        <ProfileHeader user={user as UserI} />
        <Blocks user={user as UserI} />
        <UpdateProfile user={user} />
      </div>
    </RootLayout>
  );
};

export default ProfilePage;
