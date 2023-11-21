import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase";

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  
  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={googleSignIn}>
      <span>
        <AiOutlineGoogle size={20} />
      </span>
      Sign in with Google
    </button>
  );
};

export default SignIn;