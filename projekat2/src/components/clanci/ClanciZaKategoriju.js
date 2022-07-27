import React from "react";
import Clanci from "./Clanci";
import "./Clanci";

const ClanciZaKategoriju = ({ clanci, setClanci, kategorija }) => {
  const noviClanci = clanci.filter((clanak) => clanak.kategorija === kategorija);

  return (
    <div>
        <h1>{kategorija}</h1>
      {noviClanci.length > 0 ? (<Clanci  clanci={noviClanci} />) : 
      (  "NEMA CLANAKA ZA ODABRANU KATEGORIJU" )}
    </div>
  );
};

export default ClanciZaKategoriju;
