import { useState, useEffect } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { ChatMessage } from "../ChatMessage";
import { SendMessage } from "../SendMessage";
import { databaseApp } from "../../config/firebase";


export const Chat = () => {
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
  console.log(messages)
  
  return (
    <>
      <main>
        {messages.map((id: number, text: string, photoURL: string, uid: number) => {
          <ChatMessage key={id} text={text} photoURL={photoURL} uid={uid} />
          
        })}
      </main>
      <SendMessage />
    </>
  );
};