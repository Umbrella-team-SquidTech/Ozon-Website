import { Card } from "../ui/card";
import UserProfile from "@/assets/UserProfile.png";
import PostImage from "@/assets/HomePage/PostImage.png";
import PostReactions from "./PostReactions";
import { useState } from "react";

const SinglePost = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const fullText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque idLorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque idLorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id";
  const truncatedText = fullText.substring(0, 72)+"....";
  return (
    <Card className="mt-4 p-4">
      <div>
        <div className="flex flex-row gap-3">
          {" "}
          <img
            src={UserProfile}
            className=" rounded-3xl size-12 flex justify-center items-center   "
          />
          <div>
            <h4 className=" font-Outfit text-TypoColor text-[18px]">
              Karim Younes
            </h4>
            <p className=" font-Outfit text-[#2D3A3A] text-[12px]">08:39 am</p>
          </div>
        </div>
        <p className="font-Outfit text-TypoColor text-[16px] leading-4 mt-2">
          {showFullText ? fullText : truncatedText}
          {fullText.length > 50 && (
            <p onClick={toggleText} className="text-PrimaryColor cursor-pointer">
              {showFullText ? " see less" : "see more"}
            </p>
          )}
        </p>
        <img src={PostImage} alt="post image" className="pt-3" />
      </div>
      <PostReactions />
    </Card>
  );
};

export default SinglePost;
