import React from "react";
import "../styles/HeaderStyles.css";
import { TbPokeball } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";

const Header = () => {
  return (
    <div className="pokeHeader">
      <div className="containerTitle">
        <h1 className="headerTitle">
          <TbPokeball
            style={{
              marginRight: "10px",
              backgroundColor: "Black",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
          />
          Pokedex
        </h1>
      </div>
      <div className="containerInput">
        <label className="labelInput">Name: </label>
        <input className="inputSearch" type="text"></input>
        <FcSearch
          style={{
            backgroundColor: "black",
            height: "40px",
            width: "40px",
            borderEndEndRadius: "20%",
            borderStartEndRadius: "20%",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
