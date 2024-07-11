const posts = [
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
  {
    id: 1,
    author: {
      name: "Frank Hermiston",
      last_name: "Conn",
      profile_pic: "https://i.pravatar.cc/?u=1YjXwFWJLS",
      grade: {
        grade: "Germe",
        emoji: "🌰",
      },
    },
    content:
      "Quam quisquam consequatur facere illo. Cupiditate ut optio ut tempore aut. Sit cum fuga molestiae cum consequatur consequatur blanditiis.",
    reposts: 60,
    like_count: 1,
    comments_count: 3,
    images: [
      "https://mighty.tools/mockmind-api/content/human/49.jpg",
      "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    type: "post",
    created_at: "2024-07-11T13:06:52.000000Z",
    liked: false,
  },
];
const MyPosts = () => {
  return (
    <div className="px-4 py-4 flex flex-col gap-2 h-full">
      <div className=" font-bold text-2xl">Mes Posts</div>
      <div className="h-full flex gap-2 mt">
        <div className="flex-1  flex flex-col gap-2 overflow-hidden">
          <div className="flex-1  flex gap-2">
            <div className="flex-1">
              <img
                className="rounded-md object-fill w-full "
                src={posts[0].images[0]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                className="rounded-md object-fill w-full "
                src={posts[1].images[0]}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 ">
            <img
              className="rounded-md object-fill w-full "
              src={posts[2].images[0]}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 k flex flex-col gap-2">
          <div className="flex-1 ">
            <img
              className="rounded-md object-fill w-full "
              src={posts[3].images[0]}
              alt=""
            />
          </div>
          <div className="flex-1  flex gap-2">
            <div className="flex-1">
              <img
                className="rounded-md object-fill w-full "
                src={posts[4].images[0]}
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                className="rounded-md object-fill w-full "
                src={posts[5].images[0]}
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
