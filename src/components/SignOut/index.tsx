import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../../config/firebase";

export const SignOut = () => {
  const signOut = () => {
    return auth;
  };

  return (
    <button onClick={() => auth.signOut()}>
      <span>
        <FaSignOutAlt size={15} /> 
      </span>
      Sign out
    </button>
  );
};