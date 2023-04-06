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
    width: 100%;
    border: none;
    border-radius: 10px;
    outline: none;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    margin: 0 0 0 1rem;
    padding: 1em;
    height: 3.5em;
    background-color: #6685FD;
    color: #FFF;
    border-radius: 10px;
  }
  
  button:active {
    transition: 300ms;
    transform: scale(0.98);
  }
  button:hover {
    filter: Brightness(0.8);
  }
  
  @media(max-width: 768px) {
    height: 4em;
  }
`;