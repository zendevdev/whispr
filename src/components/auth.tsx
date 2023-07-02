import { GoogleLogo } from "@phosphor-icons/react";

import { auth, provider } from "../config/firebase.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="transition-all flex items-center border-2 rounded-full px-6 border-zinc-700 p-3 text-sm gap-2 hover:bg-rose-300 hover:text-zinc-900 hover:border-rose-300 py-4 text-rose-200">
      <GoogleLogo weight="bold" size={18} />
      Sign in with Google
    </button>
  );
};
