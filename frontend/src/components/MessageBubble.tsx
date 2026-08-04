import type { MessageI } from "../types/message";
import useBoundStore from "../store";
import { formatDistance } from "date-fns";
import type { RefObject } from "react";

function MessageBubble({
  message,
  ref,
}: {
  message: MessageI;
  ref: RefObject<HTMLDivElement | null> | null;
}) {
  const { user } = useBoundStore();

  return (
    <div
      className={`flex flex-col ${message.user === user.id ? "self-end" : "self-start"}`}
    >
      <div
        className={`flex flex-col max:w-4/5 p-3 rounded-4xl ${message.user === user.id ? "bg-accent text-white self-end" : "bg-background self-start"}`}
        ref={ref}
      >
        {message.user !== user.id && (
          <span
            className={`font-outfit ${message.user === user.id ? "" : "text-accent"} text-xs`}
          >
            {message.user === user.id ? "You" : message.name}
          </span>
        )}
        {message.message}
      </div>
      <span
        className={`text-xs pl-2 text-muted ${message.user === user.id ? "self-end" : "self-start"}`}
        title={message.created_at}
      >
        {formatDistance(new Date(message.created_at), new Date(), {
          addSuffix: true,
        }).replace("about ", "")}
      </span>
    </div>
  );
}

export default MessageBubble;
