import {
  Heart,
  MessageCircle,
  Repeat2,
  SquareArrowOutUpRight,
} from "lucide-react";

const PostReactions = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-4">
        <Heart className="w-6 h-6 text-[#2D3A3A]" />
        <MessageCircle className="w-6 h-6 text-[#2D3A3A]" />
        <Repeat2 className="w-6 h-6 text-[#2D3A3A]" />
        <SquareArrowOutUpRight className="w-6 h-6 text-[#2D3A3A]" />
      </div>    
    </div>
  );
};

export default PostReactions;
