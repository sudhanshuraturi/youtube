import { SendHorizontalIcon } from "lucide-react";

const LiveChat = () => {
  return (
    <div className="flex h-full flex-1 flex-col rounded-xl border border-gray-300 p-4">
      <div>
        <span className="font-semibold">Live Chat</span>
        <div className="divider my-1"></div>
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto"></div>
      <div className="mt-auto flex w-full items-center gap-2">
        <input type="text" placeholder="Type here" className="input flex-1" />
        <button type="button" className="btn btn-circle btn-ghost">
          <SendHorizontalIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
