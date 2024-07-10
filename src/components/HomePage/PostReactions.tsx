import {
  Heart,
  MessageCircle,
  Repeat2,
  SquareArrowOutUpRight,
} from "lucide-react";

interface props {
  postInfo: {
    like_count: number;
    reposts: number;
    comments_count: number;
  };
}

const PostReactions = ({ postInfo }: props) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-4">
        <button className="flex flex-col justify-center">
          <Heart className="w-6 h-6 text-[#2D3A3A]" />
          {postInfo.like_count}
        </button>
        <button className="flex flex-col justify-center">
          <MessageCircle className="w-6 h-6 text-[#2D3A3A]" />
          {postInfo.comments_count}
        </button>
        <button className="flex flex-col justify-center">
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
