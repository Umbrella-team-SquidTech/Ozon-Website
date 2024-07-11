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
import { useToast } from "@/components/ui/use-toast";

// add props interface
interface Props {
  postInfo: {
    like_count: number;
    reposts: number;
    comments_count: number;
    postId: string;
    liked: boolean;
  };
  setShowComments: (value: boolean) => void;
  showComments: boolean;
  commentsCount: number;
}
// componnt begining
const PostReactions = ({
  postInfo,
  setShowComments,
  showComments,
  commentsCount,
}: Props) => {
  const { toast } = useToast();

  const token = useToken();
  const [isLiked, setIsLiked] = useState(postInfo.liked);
  const [likeCount, setLikeCount] = useState(postInfo.like_count);

  const handleRepost = () => {
    axios
      .post(
        `/posts/${postInfo.postId}/repost`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast({
          className: "bg-PrimaryColor text-white",
          title: "Post Reposter ",
          
         
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <button
          className="flex flex-row justify-center items-center gap-1"
          onClick={() => setShowComments(!showComments)}
        >
          {!showComments ? (
            <MessageCircle className="w-6 h-6 text-[#2D3A3A]" />
          ) : (
            <MessageCircle className="w-6 h-6 text-PrimaryColor" />
          )}
          {/* <MessageCircle className="w-6 h-6 text-[#2D3A3A]" /> */}
          {commentsCount}
        </button>
        {/* repost component */}
        <button
          className="flex flex-row justify-center items-center gap-1"
          onClick={handleRepost}
        >
          <Repeat2 className="w-6 h-6 text-[#2D3A3A]" />
          {postInfo.reposts}
        </button>
        {/* share component  */}
        <button>
          <SquareArrowOutUpRight className="w-6 h-6 text-[#2D3A3A]" />
        </button>
      </div>
    </div>
  );
};

export default PostReactions;
