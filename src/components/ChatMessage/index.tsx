import { auth } from "../../config/firebase";
import { OtherPeople, OtherChat, UserPerson, UserChat } from "./styles";

interface Props {
  text: string;
  uid: number;
  photoURL: string;
}

export const ChatMessage = ({ text, uid, photoURL }: Props) => {
  //const messageClass = uid === auth.currentUser.uid ? true : false;
  return (
    <>
      <OtherPeople>
        <img src={photoURL} alt="User" />
        <OtherChat>
          <p>{text}</p>
        </OtherChat>
      </OtherPeople>
    </>
  );
};

    /*
      {messageClass ? (
        <OtherPeople>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User" />
          <OtherChat>
            <p>{text}</p>
          </OtherChat>
        </OtherPeople>
      ) : (
        <UserPerson>
          <img src={photoURL} alt="User" />
          <UserChat>
            <p>{text}</p>
          </UserChat>
        </UserPerson>
      )}
    */