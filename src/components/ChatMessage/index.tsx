import { OtherChat } from "./styles";

interface Props {
  text: string;
  uid: number;
  photoURL: string;
}

//export const ChatMessage = (props: message) => {
export const ChatMessage = ({ text, uid, photoURL }: Props) => {
  //const { text, uid, photoURL } = props;
  //const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  return (
    <OtherChat>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </OtherChat>
  );
};
