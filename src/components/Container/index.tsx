import { Header } from "../Header";
import { Chat } from "../Chat";
//import { SendMessage } from "../SendMessage";
import { Home } from "./styles";

import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//import { Home, UserChat, OtherChat, Chat } from "./styles";

export const Container = () => {
  const [user] = useAuthState(auth);
  
  return (
    <>
      <Header />
      <Home>
        <Chat />
      </Home>
    </>
  );
};
        //{user ? <Chat /> : null}
        //<SendMessage />


/*
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
        <UserChat>
          <p>
            Opa 
          </p>
        </UserChat>
        */

