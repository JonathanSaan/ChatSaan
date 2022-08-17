import React, { useEffect } from "react";
import { Header } from "./components/Header";
import APIKey from "./data/api";

export const App = () => {
  
  useEffect(() => {
    const load = async () => {
      const respost = await axios.get(`https://api.rawg.io/api/platforms?key=${APIKey}`);
    }
  })
  
  return (
    <>
      <Header />
      <div className="Container">
        <h2>Opa </h2>
      </div>
    </>
  );
};