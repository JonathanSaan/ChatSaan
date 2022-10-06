import styled from "styled-components";


export const OtherPeople = styled.div`
  display: flex;
  padding: 1em .5em;
  
  img {
    margin: auto 1em 0 .5em;
    background-color: blue;
    border-radius: 100%;
    height: 3em;
  }
`;

export const OtherChat = styled.div`
  padding: 1em;
  max-height: 10em;
  height: auto;
  min-width: 30vw;
  max-width: 60vw;
  background-color: #303346;
  color: #FFF;
  border-radius: 10px 10px 10px 0;
`;

export const UserPerson = styled.div`
  display: flex;
  padding: 1em .5em;
  
  img {
    margin: auto .5em 0 1em;
    background-color: blue;
    border-radius: 100%;
    height: 3em;
  }
`;


export const UserChat = styled.div`
  margin: 0 0 0 auto;
  padding: 1em;
  max-height: 10em;
  height: auto;
  min-width: 30vw;
  max-width: 60vw;
  background-color: #6685FD;
  color: #FFF;
  border-radius: 10px 10px 0 10px;
`;