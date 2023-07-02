import { CaretLeft, Globe } from "@phosphor-icons/react";
import { LogOutBtn } from "../components/logout";
import { LogoZop } from "../components/logo";
import { NoMessages } from "./chat-components/NoMessages";
import { ChatInput } from "./chat-components/ChatInput";
import { ChatHistory } from "./chat-components/ChatHistory";
import { useState } from "react";

interface ChatProps {
  roomName: string;
  goBack: () => void;
}

export const Chat = (props: ChatProps) => {
  return (
    <div className="flex items-center flex-col justify-center overflow-hidden ">
      <div className="w-full items-center justify-center flex max-lg:scale-[80%]">
        <div className="flex items-center justify-between w-1/2 mt-2 max-md:w-full max-md:mx-0">
          <LogoZop />
          <LogOutBtn />
        </div>
      </div>
      <div className="flex items-center flex-col justify-between max-lg:w-full max-lg:border-transparent w-1/2 border border-zinc-800 rounded-3xl">
        <nav className="flex items-center justify-between w-full  border-b border-zinc-800 p-4">
          <div className="flex items-center gap-5">
            <button
              onClick={props.goBack}
              className="rounded-full border border-zinc-800 p-2 hover:bg-zinc-800">
              <CaretLeft />
            </button>
            <div className="flex items-start flex-col gap-0">
              <h1 className="font-bold text-xl leading-0">Chat</h1>
              <span className="leading-0 text-sm text-zinc-400">
                {props.roomName || (
                  <span className="flex items-center gap-1">
                    <Globe size={12} />
                    Global
                  </span>
                )}
              </span>
            </div>
          </div>
        </nav>
        <ChatInput room={props.roomName} />
      </div>
    </div>
  );
};
