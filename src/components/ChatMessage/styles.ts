import styled from "styled-components";


export const OtherPeople = styled.div`
  display: flex;
  padding: 1em 0;
  
  img {
    background-color: blue;
    border-radius: 100%;
    margin: auto 0 0 0;
    height: 3em;
  }
`;

export const Image = styled.div`
  display: flex;
  margin: 0 .5em;
  width: 3em;
  height: 3em;
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
  
  p {
    max-width: 60vw;
  }
`;


export const UserPerson = styled.div`
  display: flex;
  padding: 1em 0;
  
  img {
    background-color: blue;
    border-radius: 100%;
    margin: auto 0 0 0;
    height: 3em;
  }
`;

export const UserChat = styled.div`
  margin: 0 0 0 auto;
  padding: 1em;
  max-height: 10em;
  height: auto;
  text-align: right;
  min-width: 10vw;
  max-width: 60vw;
  background-color: #6685FD;
  color: #FFF;
  border-radius: 10px 10px 0 10px;
  
  p {
    max-width: 60vw;
  }
`;