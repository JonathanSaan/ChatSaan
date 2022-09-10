import styled from "styled-components";

export const Home = styled.div`
  background-color: #1D1F2B;
  padding: 1em 0 0 0;
  min-height: 15em;
  height: 100vh;
`;

export const UserChat = styled.div`
  margin: 0 1em 1em auto;
  padding: 1em;
  background-color: #6685FD;
  color: #FFF;
  border-radius: 10px 10px 0 10px;
  max-width: 15em;
`;

export const OtherChat = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #303346;
  color: #FFF;
  border-radius: 10px 10px 10px 0;
  max-width: 15em;
`;
  
export const Chat = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: #1D1F2B;
  border-top: 1px solid #000;
  padding: 0 1em;
  height: 5em;
  width: 100%;
  left: 0;
  bottom: 0;
    
  input {
    background-color: #303346;
    color: #FFF;
    padding: 1em;
    height: 3em;
    width: 88vw;
    border: none;
    border-radius: 10px;
    outline: none;
    
    @media(max-width: 768px) {
      width: 73vw;
    }
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 1em;
    height: 3em;
    background-color: #6685FD;
    color: #FFF;
    border-radius: 10px;
  }
  
  button:active {
    transform: scale(0.98);
    filter: Brightness(0.8);
  }
  
  @media(max-width: 768px) {
    height: 4em;
  }
`;