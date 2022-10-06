import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Send } from "./styles";
import { auth, databaseApp } from "../../config/firebase";

export const SendMessage = () => {
  let [input, setInput] = useState<string>("");
  const [user] = useAuthState(auth);
  
  const sendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (input === "") {
      return null;
    };
    const { uid, displayName, photoURL }: any = auth.currentUser;
    setInput("");
    await addDoc(collection(databaseApp, "messages"), {
      text: input,
      name: displayName,
      uid,
      photoURL,
      timestamp: serverTimestamp()
    });
  };

  return (
    <Send onSubmit={sendMessage}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={300}
        placeholder="Message"
        disabled={!user}
      />
      <button 
        type="submit"
        disabled={!user}
      >
        <FiSend size={20} />
      </button>
    </Send>
  );
};