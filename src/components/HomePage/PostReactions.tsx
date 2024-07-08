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
        <button><Heart className="w-6 h-6 text-[#2D3A3A]" /></button>
        <button><MessageCircle className="w-6 h-6 text-[#2D3A3A]" /></button>
        <button><Repeat2 className="w-6 h-6 text-[#2D3A3A]" /></button>
        <button><SquareArrowOutUpRight className="w-6 h-6 text-[#2D3A3A]" /></button>
      </div>    
    </div>
  );
};

export default PostReactions;
