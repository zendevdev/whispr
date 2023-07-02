export const NoMessages = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 my-20">
      <img src="/chat-image.svg" alt="chat image" className="w-80 h-80" />
      <div className="flex flex-col items-center">
        <strong className="text-rose-500">There are no messages yet!</strong>
        <span className="text-sm text-zinc-400">Start by typing below</span>
      </div>
    </div>
  );
};
