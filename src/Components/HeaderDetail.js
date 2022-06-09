import React from "react";
import { TbPokeball } from "react-icons/tb";

const HeaderDetail = () => {
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
    </div>
  );
};

export default HeaderDetail;
