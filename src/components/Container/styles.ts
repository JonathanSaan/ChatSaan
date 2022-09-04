import styled from "styled-components";

export const Home = styled.div`
  background-color: #1D1F2B;
  padding: 1em 0;
  min-height: 100vh;
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
  background-color: #1D1F2B;
  height: 5em;
  width: 100%;
  left: 0;
  bottom: 0;
    
  input {
    background-color: #303346;
    color: #FFF;
    padding: 1em;
    margin: auto 0 auto auto;
    height: 3em;
    width: 85vw;
    border: none;
    border-radius: 10px;
    outline: none;
  }
  
  button {
    margin: 0 auto;
  }
`;