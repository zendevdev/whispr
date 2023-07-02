import { useEffect, useRef, useState } from "react";
import { auth } from "../../config/firebase.js";

interface ChatHistoryProps {
  messages: { text: string; userPhoto: string; user: string }[];
}

export const ChatHistory = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="flex flex-col w-full overflow-y-scroll max-md:max-h-[630px] max-lg:max-h-[650px] max-sm:max-h-[410px] max-h-[650px]"
      ref={containerRef}>
      <div className="h-full">
        {messages.map((message) => (
          <div
            className={`flex flex-col w-full items-${
              message.user !== auth.currentUser.displayName
                ? "start text-right"
                : "end"
            } p-3 mb-1 gap-0`}>
            <div>
              <div
                className={`flex items-center mb-1 gap-3 ${
                  message.user == auth.currentUser.displayName
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}>
                <img
                  src={message.userPhoto}
                  alt="pfp"
                  className="w-6 h-6 rounded-full border border-zinc-500"
                />
                <strong
                  className={`text-sm text-${
                    message.user !== auth.currentUser.displayName
                      ? "zinc"
                      : "rose"
                  }-400`}>
                  {message.user}
                </strong>
              </div>
            </div>
            <div
              className={`flex w-fit border items-end h-auto ${
                message.user !== auth.currentUser.displayName
                  ? "bg-transparent border-zinc-800 text-zinc-200"
                  : "bg-zinc-800 border-transparent text-zinc-100"
              }  rounded-2xl mt-2  p-2 px-4`}>
              <span className="w-fit break-all text-base">{message.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
