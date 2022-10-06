import { auth } from "../../config/firebase";
import { OtherPeople, Image, OtherChat, UserPerson, UserChat } from "./styles";

interface Props {
  text: string;
  uid: number;
  photoURL: string;
}

export const ChatMessage = ({ text, uid, photoURL }: Props) => {
  //const messageClass: any = uid === auth.currentUser.uid ? false : true;
  //console.log(photoURL)
  return (
    <>
      <OtherPeople>
        <Image>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User" />
        </Image>
        <OtherChat>
          <p>{text}</p>
        </OtherChat>
      </OtherPeople>
      <UserPerson>
        <UserChat>
          <p>ggddhshdhsjdushdhshshhhggffgdhshdhdjasf</p>
        </UserChat>
        <Image>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User" />
        </Image>
      </UserPerson>
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
          <UserChat>
            <p>{text}</p>
          </UserChat>
          <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User" />
        </UserPerson>
      )}
    */