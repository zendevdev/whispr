import { Login } from "./pages/Login";
import { useState, useRef, useEffect } from "react";
import Cookies from "universal-cookie";
import { Chat } from "./pages/Chat.js";
import { EnterRoom } from "./pages/EnterRoom.js";
import { LogoZop } from "./components/logo.js";
import { LogOutBtn } from "./components/logout.js";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState<string | null>(null);

  const roomInputRef = useRef(null);

  const resetRoom = () => {
    setRoom(null);
  };

  if (!isAuth) {
    return <Login />;
  }

  return (
    <div className="h-full">
      {room ? (
        <Chat roomName={roomInputRef.current.value} goBack={resetRoom} />
      ) : (
        <EnterRoom refInput={roomInputRef} refSubmit={setRoom} />
      )}
    </div>
  );
}

export default App;
