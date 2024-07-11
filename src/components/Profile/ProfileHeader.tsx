import NumberTicker from "../magicui/number-ticker";

const ProfileHeader = ({ user }: { user: UserI }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-2">
      <div className=" w-full rounded-md flex justify-center items-center">
        <div className="w-[81.9%] flex justify-center items-center rounded-md bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] z-10">
          <img
            src={user.profile_pic}
            alt="Profile"
            className="h-56 object-cover"
          />
        </div>
        <div className="w-[83.3333%] rounded-md bg-gradient-to-tr h-[230px] from-[#11998E]  to-[#38EF7D] absolute z-0"></div>
      </div>
      <div className="w-3/4 flex px-9 -mt-10 justify-start items-center gap-4">
        <div className=" flex justify-center items-center">
          <img
            src={user.profile_pic}
            alt="Profile"
            className="size-28 rounded-full z-30"
          />
          <div className=" size-[120px] bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] rounded-full absolute z-20"></div>
        </div>
        <div className="w- mt-8 font-semibold text-xl flex flex-col ">
          <h1>{user.name + " " + user.last_name}</h1>
          <h2 className=" font-light text-md flex">
            {user.grade?.grade + " " + user.grade?.emoji}
            {user.points === 0 ? 0 : <NumberTicker value={user.points} />}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
