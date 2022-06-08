import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Paginacion from "./Components/Pagination";

const url = "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0";

function App() {
  const getPokemon = (Baseurl) => {
    fetch(Baseurl)
      .then((response) => response.json())
      .then((data) => {
        setPokeData(data.results);
        setInfo(data);
      });
  };
  const [pokeData, setPokeData] = useState([]);
  const [info, setInfo] = useState({});

  const onPrevious = () => {
    getPokemon(info.previous);
  };

  const onNext = () => {
    getPokemon(info.next);
  };

  useEffect(() => {
    getPokemon(url);
  }, []);

  return (
    <div className="App">
      <Header />
      <Paginacion
        prev={info.previous}
        onPrevious={onPrevious}
        next={info.next}
        onNext={onNext}
      />

      <div className="container">
        {pokeData.map((poke) => (
          <div className="pokeCard">
            <img
              className="image"
              src={`https://img.pokemondb.net/sprites/home/normal/${poke.name}.png`}
              alt=""
            />
            <p>{poke.name}</p>
          </div>
        ))}
      </div>
      <Paginacion
        prev={info.previous}
        onPrevious={onPrevious}
        next={info.next}
        onNext={onNext}
      />
    </div>
  );
}

export default App;
