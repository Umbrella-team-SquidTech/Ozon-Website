import NumberTicker from "../magicui/number-ticker";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const ProfileHeader = ({ user }: { user: UserI }) => {
  console.log(user);
  return (
    <div className="w-screen flex flex-col justify-center items-center py-2">
      <div className=" w-full rounded-md flex justify-center items-center">
        <div className="w-[81.9%] h-56 flex justify-center items-center rounded-md bg-gradient-to-tr from-[#11998E] to-[#38EF7D"></div>
        <div className="w-[83.3333%] rounded-md bg-gradient-to-tr h-[230px] from-[#11998E]  to-[#38EF7D] absolute z-0"></div>
      </div>
      <div className="flex justify-between w-3/4 items-center md:flex-row flex-col gap-5 z-10">
        <div className="w-screen md:w-3/4 flex px-9 -mt-10 justify-start items-center gap-4">
          <div className=" md:flex justify-center items-center hidden">
            <img
              src={user.profile_pic}
              alt="Profile"
              className="size-28 rounded-full z-10"
            />
            <div className=" size-[120px] bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] rounded-full absolute"></div>
          </div>
          <div className="md:hidden block">
            <img
              src={user.profile_pic}
              alt="Profile"
              className="size-28 rounded-full "
            />
          </div>
          <div className=" mt-12 ml-3 md:ml-0 md:mt-8 font-semibold text-xl flex flex-col ">
            <h1 className="text-base md:text-xl">
              {user.name + " " + user.last_name}
            </h1>
            <h2 className=" font-light text-base md:text-lg flex">
              {user.grade?.grade + " " + user.grade?.emoji}
              {user.points === 0 ? 0 : <NumberTicker value={user.points} />}
            </h2>
          </div>
        </div>
        {user.certified ? (
          <div>
            <Button className="bg-PrimaryColor hover:bg-SecondaryColor text-sm">
              <Link to="/createEvent">Créer un évènement</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileHeader;
