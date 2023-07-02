import { SignOut } from "@phosphor-icons/react";
import { auth } from "../config/firebase.js";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const LogOutBtn = () => {
  const logOut = async () => {
    try {
      await signOut(auth);

      cookies.remove("auth-token");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={logOut}
      className="border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 p-2 rounded-full flex items-center px-5 gap-2 font-semibold">
      <SignOut weight="bold" />
      logout
    </button>
  );
};
