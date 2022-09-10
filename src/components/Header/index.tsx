import { Nav } from "./styles";

import { AiOutlineGoogle } from "react-icons/ai";

export const Header = () => {
  
  return (
    <header>
      <Nav>
        <a href="https://github.com/JonathanSaan">JonathanSaan</a>
        <button>
          <span>
            <AiOutlineGoogle size={20} /> 
            Sign in with Google
          </span>
        </button>
      </Nav>
    </header>
  );
};