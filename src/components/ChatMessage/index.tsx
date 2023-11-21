import { auth } from "../../config/firebase";
import { OtherPeople, Image, OtherChat, UserPerson, UserChat } from "./styles";

interface Props {
  text: string;
  uid: string;
  photoURL: string;
}

const ChatMessage = ({ text, uid, photoURL }: Props) => {
  let messageClass: boolean = uid === auth.currentUser?.uid ? false : true;

  return (
    <>
      {messageClass ? (
        <OtherPeople>
          <Image>
            <img src={photoURL} alt="User" referrerPolicy="no-referrer" />
          </Image>
          <OtherChat>
            <p>{text}</p>
          </OtherChat>
        </OtherPeople>
      ) : (
        <UserPerson>
          <UserChat>
            <p>{text}</p>
          </UserChat>
          <Image>
            <img src={photoURL} alt="User" referrerPolicy="no-referrer" />
          </Image>
        </UserPerson>
      )}
    </>
  );
};

export default ChatMessage;