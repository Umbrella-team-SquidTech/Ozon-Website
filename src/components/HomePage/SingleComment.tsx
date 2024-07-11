import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {formatDate } from "@/utils/formatDate"
interface props {
    comment: CommentI;
  }



const SingleComment = ({ comment }: props) => {
   
    const {author,content,created_at} = comment;
  
  return (
        <div className="flex items-start gap-2 p-2 rounded-lg border ">
        <Avatar className="w-10 h-10 border">
        <AvatarImage src={author?.profile_pic} />
        <AvatarFallback>Zr</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid ">
        <div className="flex items-center gap-2 text-sm">
            <div className="font-medium">{author?.name} {author?.last_name || "hiokeu"} </div>
            <div className="text-muted-foreground">{formatDate(created_at) || "date" }</div>
        </div>
        <div className="text-sm  text-muted-foreground">
            <p>
    {content ||"content"}
            </p>
        </div>
        </div>
    </div>
  )
}

export default SingleComment

