import { useEffect } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import ScrollableFeed from "react-scrollable-feed";
import { ChatMessage } from "../ChatMessage";
import { SendMessage } from "../SendMessage";
import { databaseApp } from "../../config/firebase";

interface Props {
  messages: any;
  setMessages: any;
}

export const Chat = ({ messages, setMessages }: Props) => {
  useEffect(() => {
      
    const q = query(collection(databaseApp, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages: any = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <>
      <main>
        <ScrollableFeed>
          {messages.map((id: number, text: string, photoURL: string, uid: number) => {
            return <ChatMessage text={text} photoURL={photoURL} uid={uid} />
          })}
        </ScrollableFeed>
      </main>
      <SendMessage />
    </>
  );
};