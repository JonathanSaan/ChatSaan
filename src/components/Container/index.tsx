import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "../Loading";
import { Header } from "../Header";
import { Home } from "./styles";
import { Chat } from "../Chat";
import { auth } from "../../config/firebase";

export const Container = () => {
  const [messages, setMessages] = useState<any>([]);
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home>
            <Chat messages={messages} setMessages={setMessages} user={user} />
          </Home>
        </>
      )}
    </>
  );
};