import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailStyle.css";
import HeaderDetail from "./HeaderDetail";
import RingLoader from "react-spinners/RingLoader";

const Details = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  let { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="MainContainer">
      <HeaderDetail />
      <h1 className="detailsTitlePoke">{data.name}</h1>
      {loading ? (
        <div>
          <div className="containerDetails">
            <div className="containerImage-Title">
              <img
                className="pokeImagen"
                src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
                alt={name}
              />
            </div>
            <div className="containerAllDetails">
              <h2>ID: {data.id}</h2>
              <h2>Name: {data.name}</h2>
              <h2>Height: {data.height}</h2>
              <h2>Weight: {data.weight}</h2>
              <h2>Base experience: {data.base_experience}</h2>
            </div>
          </div>
          <div className="container-stats">
            {data.stats.map((stat) => (
              <div className="stats">
                <h2>{stat.stat.name}</h2>
                <h2>{stat.base_stat}</h2>
              </div>
            ))}
          </div>
          <div className="abilityTypes">
            <div className="container-types">
              <h2 className="title">Types</h2>
              <hr />
              {data.types.map((type) => (
                <h2> {type.type.name}</h2>
              ))}
            </div>
            <div className="container-abilities">
              <h2 className="title">Abilities</h2>
              <hr />
              {data.abilities.map((ability) => (
                <h2> {ability.ability.name}</h2>
              ))}
            </div>
            <div className="container-moves">
              <h2 className="title">Moves</h2>
              <hr />
              <h2>{data.moves[0].move.name}</h2>
              <h2>{data.moves[1].move.name}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <RingLoader color={"#000"} loading={true} size={500} />
        </div>
      )}
    </div>
  );
};

export default Details;
