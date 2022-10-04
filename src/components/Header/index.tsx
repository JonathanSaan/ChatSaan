import { useAuthState } from "react-firebase-hooks/auth";
import { Nav } from "./styles";
import { auth } from "../../config/firebase";
import { SignOut } from "../SignOut";
import { SignIn } from "../SignIn";

export const Header = () => {
  const [user] = useAuthState(auth);
  
  return (
    <header>
      <Nav>
        <a href="https://github.com/JonathanSaan">JonathanSaan</a>
        {user ? <SignOut /> : <SignIn />}
      </Nav>
    </header>
  );
};