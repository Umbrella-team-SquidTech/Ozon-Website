import {
  Heart,
  MessageCircle,
  Repeat2,
  SquareArrowOutUpRight,
} from "lucide-react";
import {  useState } from "react";
import hred from "@/assets/HomePage/ReadHeart.svg";
import axios from "@/config/axios";
import useToken from "@/hooks/useToken";

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

  const handleClick = () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);

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
      .then((res) => {
        console.log(res);
        setLikeCount((prevCount) =>
          newLikeStatus ? prevCount + 1 : prevCount - 1
        );
      })
      .catch((err) => {
        console.log(err);

        setIsLiked(!newLikeStatus);
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
