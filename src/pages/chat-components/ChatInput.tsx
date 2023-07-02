import { PaperPlaneRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase.js";
import { ChatHistory } from "./ChatHistory.js";

interface ChatProps {
  room: string;
}

export const ChatInput = (props: ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", props.room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      userPhoto: auth.currentUser.photoURL,
      room: props.room,
    });

    setNewMessage("");
  };

  return (
    <div className="flex items-center w-full p-4 pt-0 flex-col justify-start h-max">
      <div className="w-full">
        <ChatHistory messages={messages} />
      </div>
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full border p-3 rounded-full border-zinc-800">
          <input
            type="text"
            placeholder="type your message..."
            className="bg-transparent border-none outline-none w-full mx-3 font-semibold text-zinc-300 placeholder:text-zinc-500"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            type="submit"
            className="rounded-full border border-zinc-800 bg-zinc-800 p-3 text-rose-400 hover:text-zinc-900 transition-all hover:bg-rose-300 flex items-center gap-3 group">
            <PaperPlaneRight weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
};
