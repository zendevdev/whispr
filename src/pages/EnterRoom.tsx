import { Globe, Link, SignIn } from "@phosphor-icons/react";
import { LogOutBtn } from "../components/logout";
import { LogoZop } from "../components/logo";
import { useState } from "react";
import { auth } from "../config/firebase.js";

interface RoomProps {
  refInput: any;
  refSubmit: (roomName: string) => void;
}

export const EnterRoom = (props: RoomProps) => {
  const [roomName, setRoomName] = useState("");

  const handleRoomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.refSubmit(roomName);
  };

  const handleGlobalButtonClick = () => {
    props.refSubmit("global");
  };

  return (
    <div className="flex items-center justify-evenly mt-48 flex-col w-full">
      <div className="w-full items-center justify-center flex">
        <div className="flex items-center justify-between w-1/2 mt-2 max-md:w-full max-md:mx-8">
          <LogoZop />
          <LogOutBtn />
        </div>
      </div>
      <div className="flex items-center justify-between flex-row h-full max-lg:border-transparent max-lg:w-full w-1/2 gap-5 mb-20 border border-zinc-800 p-8 rounded-2xl">
        <div className="w-full items-center justify-center">
          <div className="flex flex-col items-center mb-10">
            <strong className="flex items-center gap-2">
              <Link weight="bold" />
              Connect with people!
            </strong>
            <span className="text-sm text-zinc-400">
              Enter a room name to begin
            </span>
          </div>
          <div className="flex flex-col-reverse gap-5 items-center">
            <div className="flex flex-row pl-4 items-center justify-center gap-5 w-full">
              <span className="text-xs">or</span>
              <button
                onClick={handleGlobalButtonClick}
                className="rounded-full border border-zinc-800 bg-zinc-800 p-3 text-rose-400 hover:text-zinc-900 w-full transition-all hover:bg-rose-300 font-bold flex items-center gap-2 justify-center">
                <Globe size={20} />
                Go to Global
              </button>
            </div>

            <form
              onSubmit={handleRoomSubmit}
              className="flex items-center border border-zinc-800 rounded-full p-3 w-full">
              <input
                type="text"
                className="w-full bg-transparent text-zinc-200 mx-4 border-none outline-none placeholder:italic"
                placeholder="enter room name"
                ref={props.refInput}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-full border border-zinc-800 bg-zinc-800 p-3 text-rose-400 hover:text-zinc-900 transition-all hover:bg-rose-300">
                <SignIn weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
