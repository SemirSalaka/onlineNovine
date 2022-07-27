import React from "react";
import ZadnjihPetClanaka from "./ZadnjihPetClanaka";
import "./Pocetna.css";

const Pocetna = ({ clanci }) => {
  var today = new Date();

  var date =
    today.getDate() + ". " + (today.getMonth() + 1) + ". " + today.getFullYear() + ".";


  return (
    <div >
      <h1>Pocetna stranica</h1>
      <div className="kategorije">
        <ZadnjihPetClanaka clanci={clanci} kategorija="Vijesti"/>
        <ZadnjihPetClanaka clanci={clanci} kategorija="Sport"/>
        <ZadnjihPetClanaka clanci={clanci} kategorija="Biznis"/>
      </div>
      <div className="kategorije">
        <ZadnjihPetClanaka clanci={clanci} kategorija="Auto"/>
        <ZadnjihPetClanaka clanci={clanci} kategorija="Lifestyle"/>
        <ZadnjihPetClanaka clanci={clanci} kategorija="Crna hronika"/>
      </div>
      <p className="datum">{date}</p>
    </div>
  );
};

export default Pocetna;
