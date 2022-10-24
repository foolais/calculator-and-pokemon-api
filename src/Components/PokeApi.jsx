import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PokeApi.css";

const PokeApi = () => {
  const [num, setNum] = useState("");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemon, setPokemon] = useState({
    name: "",
    moves: "",
  });

  useEffect(() => {
    async function getPokemon() {
      await axios.get(url).then((res) => {
        setPokemon({
          name: res.data.name,
          moves: res.data.moves.length,
        });
      });
    }
    getPokemon();
  }, [url]);

  const formSubmit = (e) => {
    e.preventDefault();
    setUrl(url + num);
  };

  return (
    <div className="container-poke">
      <div>
        <p className="text-poke">You choose {num ? num : "no"} value </p>
        <form onSubmit={formSubmit} className="form-container">
          <input
            type="number"
            placeholder="input number"
            value={num}
            onChange={(event) => setNum(event.target.value)}
            className="input-poke"
          />
          <button>Search</button>
        </form>
        <div>
          {pokemon.name ? (
            <div>
              <p>My name {pokemon.name}</p>
              <p>i have {pokemon.moves} moves</p>
            </div>
          ) : (
            <p>belum memilih pokemon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeApi;
