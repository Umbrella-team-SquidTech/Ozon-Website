import {
  Heart,
  MessageCircle,
  Repeat2,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import hred from "@/assets/HomePage/ReadHeart.svg";
import axios from "@/config/axios";
interface props {
  postInfo: {
    like_count: number;
    reposts: number;
    comments_count: number;
  };
}


const PostReactions = ({ postInfo }: props) => {
  const [isLiked, setIsLiked] = useState(false);
  const HandleClick = () => {
    console.log("clicked");
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    return () => {
      if (isLiked) {
        axios.post("/like", { postId: 1 })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

      }
    }
    
  }, []);
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-4">
        <button
          className="flex flex-row  justify-center items-center gap-1"
          onClick={HandleClick}
        >
          {isLiked ? (
            <img src={hred} alt="heart" className="size-6" />
          ) : (
            <Heart className="w-6 h-6 text-[#2D3A3A]" />
          )}
          {postInfo.like_count}
        </button>
        <button className="flex flex-row justify-center items-center gap-1">
          <MessageCircle className="w-6 h-6 text-[#2D3A3A]" />
          {postInfo.comments_count}
        </button>
        <button className="flex flex-row justify-center items-center gap-1">
          <Repeat2 className="w-6 h-6 text-[#2D3A3A]" />
          {postInfo.reposts}
        </button>
        <button>
          <SquareArrowOutUpRight className="w-6 h-6 text-[#2D3A3A]" />
        </button>
      </div>
    </div>
  );
};

export default PostReactions;
