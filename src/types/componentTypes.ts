export interface CommentsType {
    id: number;
    author: string;
    text: string;
    timestamp: string;
    likes: number;
    dislikes: number;
    replyCount: number;
    replies: CommentsType[]
}