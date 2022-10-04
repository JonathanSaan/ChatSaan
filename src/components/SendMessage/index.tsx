import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Send } from "./styles";
import { auth, databaseApp } from "../../config/firebase";

export const SendMessage = () => {
  let [input, setInput] = useState<string>("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (input === "") {
      return null;
    };
    const {uid, displayName}: any = auth.currentUser
    await addDoc(collection(databaseApp, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    });
    setInput("");
  };

  return (
    <Send onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Message"
      />
      <button type="submit">
        <FiSend size={20} />
      </button>
    </Send>
  );
};