import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import axios from "@/config/axios";
import { useState } from "react";
// TODO:use useUser hook to get the user
interface props {
  setComments: (comments: CommentI[]) => void;
  comments: CommentI[];
  id: string;
}
const CommentInput = ({ setComments, comments ,id}: props) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [commentContent, setCommentContent] = useState("");
  const handlSubmit = () => {
    axios
      .post(`/posts/${id}/comments`, {
        content:commentContent,
        user_id: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        setComments([...comments, res.data.data]);
        setCommentContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex items-start gap-4 w-full p-3 rounded-lg ">
      <div className="flex items-center gap-2 w-full">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src={user?.profile_pic} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          className="flex-1 rounded-lg p-2 border border-neutral-400 shadow-sm  resize-none"
          placeholder="ecrivez un commentaire beau comme vous"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <Button className=" ml-auto bg-PrimaryColor rounded-full hover:bg-SecondaryColor" onClick={handlSubmit}>
          Publier
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
