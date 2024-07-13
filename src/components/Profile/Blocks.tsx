import { useEffect, useState } from "react";
import Achievements from "./Achievements";
import Contributions from "./Contributions";
import MyPosts from "./MyPosts";
import customAxios from "@/config/axios";

const Blocks = ({ user }: { user: UserI }) => {
  const [contributions, setContributions] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    customAxios
      .get(`/users/${user.id}/contributions`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setContributions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    customAxios
      .get(`/posts/users/${user.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen flex justify-center items-center mt-10">
      <div className="w-10/12 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10">
        <div className=" rounded-md shadow ">
          <Achievements />
        </div>
        <div className=" rounded-md shadow ">
          <Contributions contributions={contributions} />
        </div>
        <div className=" rounded-md shadow">
          <MyPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
