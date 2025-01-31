import axios from "@/config/axios";
import useToken from "@/hooks/useToken";
import { useEffect } from "react";
import SingleComment from "./SingleComment";
import CommentInput from "./CommentInput";

interface props {
  postInfo: {
    like_count: number;
    reposts: number;
    comments_count: number;
    postId: string;
    liked: boolean;
  };
  comments: CommentI[];
  setComments: (comments: CommentI[]) => void;
  setCommentsCount: (count: number) => void;
  commentsCount: number;
}
const Comments = ({
  postInfo,
  comments,
  setComments,
  setCommentsCount,
  commentsCount,
}: props) => {
  const token = useToken();

  useEffect(() => {
    axios
      .get(`/posts/${postInfo.postId}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postInfo.postId, token, setComments]);
  return (
    <div>
      <h1>Comments</h1>
      <div className=" max-h-48 overflow-y-auto space-y-2">
        {comments.map((comment: CommentI) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentInput
        commentsCount={commentsCount}
        setCommentsCount={setCommentsCount}
        setComments={setComments}
        comments={comments}
        id={postInfo.postId}
      />
    </div>
  );
};

export default Comments;
