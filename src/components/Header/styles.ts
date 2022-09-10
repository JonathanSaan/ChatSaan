import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 0 1em;
  background-color: #303346;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  
  a {
    text-decoration: none;
    color: #FFF;
    font-size: 1em;
    font-weight: 600;
  }
  
  button {
    background-color: #1D1F2B;
    color: #FFF;
    padding: .5em;
    width: 12em;
    border: none;
    border-radius: .5em;
    
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  
  button:active {
    filter: Brightness(0.8);
    transform: scale(0.98);
  }
`;