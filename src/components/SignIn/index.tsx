import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../config/firebase";

export const SignIn = () => {
  
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
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