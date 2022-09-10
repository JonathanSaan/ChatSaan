import { FiSend } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Home, UserChat, OtherChat, Chat } from "./styles";

export const Container = () => {
  
  return (
    <>
      <Header />
      <Home>
        <UserChat>
          <p>
            Opa 
          </p>
        </UserChat>
        <OtherChat>
          <p>
            oi
          </p>
        </OtherChat>
        <OtherChat>
          <p>
            oi
          </p>
        </OtherChat>
        <UserChat>
          <p>
            Opa 
          </p>
        </UserChat>
      </Home>
      <Chat>
        <input placeholder="Sign in to chat" />
        <button>
          <FiSend size={20} />
        </button>
      </Chat>
    </>
  );
};