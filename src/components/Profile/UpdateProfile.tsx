import useToken from "@/hooks/useToken";
import useUser from "@/hooks/useUser";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UpdateProfile = ({ user }: { user: UserI | null }) => {
  const token = useToken();
  const connectedUser = useUser(token).user;
  console.log(connectedUser?.id === user?.id);

  return connectedUser?.id === user?.id ? (
    <div className="w-screen flex justify-center items-center py-10">
      <div className="w-10/12 flex flex-col justify-center items-center">
        <div className="w-full justify-start">
          <h1 className=" text-2xl font-bold border-b-2 py-2 w-auto">
            Informations Personnelles
          </h1>
        </div>
        <div className="w-full ">
          <div className="flex gap-4">
            <div className="flex-1 w-full">
              <Label>Nom</Label>
              <Input
                name="Nom"
                value={user?.last_name}
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="flex-1 w-full">
              <Label>Prénom</Label>
              <Input
                name="Prénom"
                value={user?.name}
                type="text"
                placeholder="Prénom"
              />
            </div>
          </div>
          <div>
            <Label>Email</Label>
            <Input
              name="Email"
              value={user?.email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Label>Photo de Profile</Label>
            <Input
              name="profile_pic"
              type="file"
              placeholder="Photo de Profile"
            />
          </div>
          {/* Button for updating profile */}
          <div className="w-full flex justify-end mt-4">
            <button className=" bg-PrimaryColor border-2 border-primaryColor hover:bg-white hover:text-PrimaryColor text-white font-bold py-2 px-4 rounded">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default UpdateProfile;
