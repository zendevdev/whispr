import { Auth } from "../components/auth";
import { LogoZop } from "../components/logo";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <LogoZop />
      <div>
        <img src="/login.svg" alt="login image" className="w-96 h-96" />
      </div>
      <div className="flex items-center gap-5 flex-col">
        <h1 className="text-sm text-zinc-400">
          Connect with Google to chat with other people!
        </h1>
        <Auth />
      </div>
      <div className="absolute -z-10 w-screen h-screen overflow-hidden">
        <img
          src="/blob.svg"
          className="absolute left-1/4 w-[800px] h-[800px] blur-3xl opacity-10  animate-spin animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-normal animate-fill-both"
        />
      </div>
    </div>
  );
};
