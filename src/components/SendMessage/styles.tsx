import styled from "styled-components";

export const Send = styled.form`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: #1D1F2B;
  padding: 0 1em;
  height: 5em;
  width: 100%;
  left: 0;
  bottom: 0;
    
  input {
    background-color: #303346;
    color: #FFF;
    padding: 1em;
    height: 3.5em;
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
    height: 3.5em;
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