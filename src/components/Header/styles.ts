import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  padding: 0 1em;
  height: 5em;
  width: 100%;
  background-color: #1D1F2B;
  justify-content: space-between;
  align-items: center;
  
  a {
    text-decoration: none;
    color: #FFF;
    font-size: 1em;
    font-weight: 700;
  }
  
  button {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #1D1F2B;
    color: #FFF;
    padding: .7em;
    width: auto;
    border: none;
    border-radius: .5em;
    
    span {
      margin: 0 .4em 0 0;
    }
  }
  
  button:hover {
    background-color: #303346;
  }
  
  button:active {
    transition: 300ms;
    transform: scale(0.95);
  }
  
  @media(max-width: 768px) {
    height: 4em;
  }
`;