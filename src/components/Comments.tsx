import { useState } from "react";
// import { comments } from "../constants/comments";
import type { CommentsType } from "../types/componentTypes";
import Avatar from "./Avatar";
import CommentsList from "./CommentsList";

const Comments: React.FC<{
  comments: CommentsType[];
  setComments: React.Dispatch<React.SetStateAction<CommentsType[]>>;
}> = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  return (
    <div>
      <span className="text-2xl font-bold">Comments</span>
      <div className="mt-4 flex items-center gap-4">
        <Avatar height={40} width={40} />
        <input
          type="text"
          placeholder="Add a comment"
          className="input w-full rounded-4xl"
          value={newComment}
          onChange={(e) => setNewComment(() => e.target.value)}
        />
        <span
          className="hover:underline cursor-pointer btn btn-square w-20"
          onClick={() => {
            const trimmed = newComment.trim();
            if (!trimmed) return;
            setComments((prev) => [
              ...prev,
              {
                id: Date.now(),
                text: trimmed,
                author: "Current User",
                replyCount: 0,
                replies: [],
                timestamp: new Date().toISOString(),
                likes: 0,
                dislikes: 0,
              },
            ]);
          }}
        >
          Comment
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default Comments;
