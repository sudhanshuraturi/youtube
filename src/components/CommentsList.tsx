import { useState } from "react";
import Avatar from "./Avatar";
import type { CommentsType } from "../types/componentTypes";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

interface CommentsListProps {
  comments: CommentsType[];
}
const CommentsList: React.FC<CommentsListProps> = ({ comments = [] }) => {
  const [expandedComments, setExpandedComments] = useState<
    Record<number, boolean>
  >({});
  return comments.map((comment) => (
    <div className="h-full">
      <div key={comment.id} className="flex gap-4">
        <Avatar height={40} width={40} />
        <div>
          <span className="font-bold">{comment.author}</span>
          <p>{comment.text}</p>
        </div>
      </div>
      <div className="ml-15 flex gap-4 font-semibold">
        <span className="flex items-center gap-1">
          <ThumbsUpIcon className="w-4 h-4" />
          <span className="text-sm">{comment.likes}</span>
        </span>
        <span className="flex items-center gap-1">
          <ThumbsDownIcon className="w-4 h-4" />
          <span className="text-sm">{comment.dislikes}</span>
        </span>
        <span>Reply</span>
      </div>

      {comment?.replyCount > 0 &&
        (expandedComments[comment.id] ? (
          <>
            <span
              className="text-blue-500 hover:underline cursor-pointer ml-14"
              onClick={() =>
                setExpandedComments({
                  ...expandedComments,
                  [comment.id]: false,
                })
              }
            >
              Hide replies
            </span>
            <div className="ml-12 mt-2">
              {comment.replies && comment.replies.length > 0 && (
                <CommentsList comments={comment.replies} />
              )}
            </div>
          </>
        ) : (
          <span
            className="text-blue-500 hover:underline cursor-pointer ml-14"
            onClick={() =>
              setExpandedComments({ ...expandedComments, [comment.id]: true })
            }
          >
            Show replies ({comment.replyCount || 0})
          </span>
        ))}
    </div>
  ));
};

export default CommentsList;
