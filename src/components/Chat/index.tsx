import { useState, useEffect } from "react";

import ChatMessage from "../ChatMessage";
import SendMessage from "../SendMessage";
import { databaseApp } from "../../config/firebase";

import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import ScrollableFeed from "react-scrollable-feed";

interface Props {
  user: any;
}

const Chat = ({ user }: Props) => {
  const [messages, setMessages] = useState<any>([]);

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
          {messages.map((message: any) => (
            <ChatMessage key={message.id} text={message.text} photoURL={message.photoURL} uid={message.uid} />
          ))}
        </ScrollableFeed>
      </main>
      {user ? <SendMessage /> : null }
    </>
  );
};

export default Chat;