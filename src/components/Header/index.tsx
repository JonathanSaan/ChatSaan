import { useAuthState } from "react-firebase-hooks/auth";

import SignOut from "../SignOut";
import SignIn from "../SignIn";
import { auth } from "../../config/firebase";
import { Nav } from "./styles";

const Header = () => {
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

export default Header;