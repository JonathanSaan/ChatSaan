import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Chat from "../../components/Chat";
import { auth } from "../../config/firebase";
import { Home } from "./styles";

import { useAuthState } from "react-firebase-hooks/auth";

export const Container = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home>
            <Chat user={user} />
          </Home>
        </>
      )}
    </>
  );
};