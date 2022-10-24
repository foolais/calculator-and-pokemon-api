import React from "react";
import Header from "../Components/Header";
import PokeApi from "../Components/PokeApi";

const Pokemon = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>Poke API</h1>
      <PokeApi />
    </div>
  );
};

export default Pokemon;
