import { Card } from "../ui/card";
import UserProfile from "@/assets/UserProfile.png";
import PostReactions from "./PostReactions";
import { useState } from "react";
import PostCarousel from "./PostCarousel";

const SinglePost = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const fullText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque idLorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque idLorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla natoque id";
  const truncatedText = fullText.substring(0, 72) + "....";
//   add truncated text for the desktop view
const truncatedTextDesktop = fullText.substring(0, 150) + "....";
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
            <h4 className=" font-Outfit text-TypoColor text-[18px] md:text-xl">
              Karim Younes
            </h4>
            <p className=" font-Outfit text-[#2D3A3A] text-[12px]">08:39 am</p>
          </div>
        </div>
        <p className="font-Outfit text-TypoColor text-[16px] leading-4 mt-2">
          {window.innerWidth > 768 ? (showFullText ? fullText : truncatedTextDesktop) : (showFullText ? fullText : truncatedText)}
          {fullText.length > 50 && (
            <p
              onClick={toggleText}
              className="bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent cursor-pointer"
            >
              {showFullText ? " see less" : "see more"}
            </p>
          )}
        </p>
        <PostCarousel />
      </div>
      <PostReactions />
    </Card>
  );
};

export default SinglePost;
