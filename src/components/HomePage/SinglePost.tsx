import { Card } from "../ui/card";
import PostReactions from "./PostReactions";
import { useState } from "react";
import PostCarousel from "./PostCarousel";

interface props {
  post: PostI;
}

const SinglePost = ({ post }: props) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const fullText = post.content;
  const truncatedText = fullText.substring(0, 72) + "....";
  //   add truncated text for the desktop view
  const truncatedTextDesktop = fullText.substring(0, 150) + "....";
  const postInfo = {
    like_count: post.like_count,
    reposts: post.reposts,
    comments_count: post.comments_count,
  };
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex flex-row gap-3">
          <img
            src={post.author?.profilePic}
            className=" rounded-3xl size-12 flex justify-center items-center   "
          />
          <div>
            <h4 className=" font-Outfit text-TypoColor text-[18px] md:text-xl">
              {post.author?.name} {post.author?.lastName}
            </h4>
            <p className=" font-Outfit text-[#2D3A3A] text-[12px]">08:39 am</p>
          </div>
        </div>
        <p className="font-Outfit text-TypoColor text-[16px] leading-4 mt-2">
          {window.innerWidth > 768
            ? showFullText
              ? fullText
              : truncatedTextDesktop
            : showFullText
            ? fullText
            : truncatedText}
          {fullText.length > 50 && (
            <p
              onClick={toggleText}
              className="bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent cursor-pointer"
            >
              {showFullText ? " see less" : "see more"}
            </p>
          )}
        </p>
        <PostCarousel postGallery={post.images} />
      </div>
      <PostReactions postInfo={postInfo} />
    </Card>
  );
};

export default SinglePost;
