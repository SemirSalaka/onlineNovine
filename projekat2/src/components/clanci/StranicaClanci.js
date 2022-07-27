import React from "react";
import { useState } from "react";
import Header from "../Header";
import DodajClanak from "./DodajClanak";
import Clanci from "./Clanci";

const StranicaClanci = ({ clanci, setClanci }) => {
  const [prikazForme, setPrikazForme] = useState(false);

  const obrisiClanak = (id) => {
    setClanci(clanci.filter((clanak) => clanak.id !== id));
  };

  const dodajClanak = (clanak) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const noviClanak = { id, ...clanak };
    setClanci([...clanci, noviClanak]);
  };

  return (
    <div className="container">
      <Header
        title="Svi clanci"
        onDodajClanak={() => setPrikazForme(!prikazForme)}
        prikazForme={prikazForme}
      />
      {prikazForme && <DodajClanak onAdd={dodajClanak} />}


      {clanci.length > 0 ? (
      <Clanci clanci={clanci} onDelete={obrisiClanak} />) : ( "NEMA VISE CLANAKA" )}

      
    </div>
  );
};

export default StranicaClanci;
