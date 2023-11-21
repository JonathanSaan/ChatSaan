import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../../config/firebase";

const SignOut = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <span>
        <FaSignOutAlt size={20} />
      </span>
      Sign out
    </button>
  );
};

export default SignOut;