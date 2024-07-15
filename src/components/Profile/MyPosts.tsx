import PlaceHolder from "@/assets/placeholder.png";
const MyPosts = ({ posts }: { posts: PostI[] }) => {
  return (
    <div className="px-4 py-4 flex flex-col gap-2 h-full">
      <div className=" font-bold text-2xl">Posts</div>
      <div className="h-full flex gap-2 mt">
        <div className="flex-1  flex flex-col gap-2 overflow-hidden">
          <div className="flex-1  flex gap-2">
            <div className="flex-1">
              <img
                className="rounded-md aspect-square object-fill w-full "
                src={posts[0]?.images[0] ?? PlaceHolder}
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                className="rounded-md aspect-square object-fill w-full "
                src={posts[1]?.images[0] ?? PlaceHolder}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 ">
            <img
              className="rounded-md aspect-square object-fill w-full "
              src={posts[2]?.images[0] ?? PlaceHolder}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 k flex flex-col gap-2">
          <div className="flex-1 ">
            <img
              className="rounded-md aspect-square object-fill w-full "
              src={posts[3]?.images[0] ?? PlaceHolder}
              alt=""
            />
          </div>
          <div className="flex-1  flex gap-2">
            <div className="flex-1">
              <img
                className="rounded-md aspect-square object-fill w-full "
                src={posts[4]?.images[0] ?? PlaceHolder}
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                className="rounded-md aspect-square object-fill w-full "
                src={posts[5]?.images[0] ?? PlaceHolder}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
