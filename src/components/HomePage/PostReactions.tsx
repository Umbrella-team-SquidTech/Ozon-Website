import {
  Heart,
  MessageCircle,
  Repeat2,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useState } from "react";
import hred from "@/assets/HomePage/ReadHeart.svg";
import axios from "@/config/axios";
import useToken from "@/hooks/useToken";
import useSound from "use-sound";

import likeSound from "@/assets/sounds/like_effect.mp3";
interface Props {
  postInfo: {
    like_count: number;
    reposts: number;
    comments_count: number;
    postId: string;
    liked: boolean;
  };
}

const PostReactions = ({ postInfo }: Props) => {
  const token = useToken();
  const [isLiked, setIsLiked] = useState(postInfo.liked);
  const [likeCount, setLikeCount] = useState(postInfo.like_count);
  const [play] = useSound(likeSound);
  const handleClick = () => {
    if (!isLiked) play();
    const newLikeStatus = !isLiked;
    setIsLiked((prev) => !prev);
    setLikeCount((prevCount) =>
      newLikeStatus ? prevCount + 1 : prevCount - 1
    );
    axios
      .post(
        `/posts/${postInfo.postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        setIsLiked((prev) => !prev);
      });
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-4">
        <button
          className="flex flex-row justify-center items-center gap-1"
          onClick={handleClick}
        >
          {isLiked ? (
            <img src={hred} alt="heart" className="size-6" />
          ) : (
            <Heart className="w-6 h-6 text-[#2D3A3A]" />
          )}
          {likeCount}
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
