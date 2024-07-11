import Achievements from "./Achievements";
import Contributions from "./Contributions";
import MyPosts from "./MyPosts";

const Blocks = ({ user }: { user: UserI }) => {
  console.log(user);

  return (
    <div className="w-screen flex justify-center items-center mt-10">
      <div className="w-10/12 grid grid-cols-3 gap-10">
        <div className=" rounded-md shadow ">
          <Achievements />
        </div>
        <div className=" rounded-md shadow ">
          <Contributions />
        </div>
        <div className=" rounded-md shadow">
          <MyPosts />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
