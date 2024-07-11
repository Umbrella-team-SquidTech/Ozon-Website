import Blocks from "@/components/Profile/Blocks";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import RootLayout from "@/components/RootLayout";
import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";

const ProfilePage = () => {
  const token = useToken();
  const { user } = useUser(token);
  console.log(user);

  return (
    <RootLayout>
      <div className=" overflow-x-hidden">
        <ProfileHeader user={user as UserI} />
        <Blocks user={user as UserI} />
      </div>
    </RootLayout>
  );
};

export default ProfilePage;
