import { Link } from "react-router-dom";

const Tip = ({ post }: { post: PostI | null }) => {
 

  return (
    <div className="w-full flex justify-center items-center relative mt-4">
      <div className="w-[99.2%] z-10">
        <div className="w-full bg-white border-2 border-PrimaryColor rounded-md flex flex-col justify-center p-3 gap-2">
          <h1 className=" text-2xl font-bold bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] inline-block text-transparent bg-clip-text">
            Conseil:
          </h1>
          <p className="text-black font-[400] text-xs md:text-base">
            <span className=" text-lg font-bold">
              <Link to={"/users/" + post?.author.id}>
                {post?.author.last_name + " " + post?.author.name}
              </Link>
            </span>{" "}
            A donner le conseil:
          </p>
          <p>{post?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tip;
