import { useState } from "react";
import Comments from "../components/Comments";
import LiveChat from "../components/LiveChat";
import { comments } from "../constants/comments";

const Watch = () => {
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <div className="flex gap-4">
      <div>
        <iframe
          className="rounded-xl"
          width="840"
          height="415"
          src="https://www.youtube.com/embed/P3uI5sLosKU?si=Kj1W8bfjUjj47cb2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-4 p-5 h-full overflow-auto">
          <Comments comments={commentsData} setComments={setCommentsData} />
        </div>
      </div>
      <div className="w-full h-105 ">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
