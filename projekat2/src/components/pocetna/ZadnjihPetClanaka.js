import React from "react";
import Clanci from "../clanci/Clanci";

const ZadnjihPetClanaka = ({ clanci, kategorija }) => {
  const noviClanci = clanci.filter(
    (clanak) => clanak.kategorija === kategorija
  );
  const zadnjihPet = noviClanci.slice(-5).reverse();

  return (
    <div className="zadnjihPet">
      <h3>{kategorija}</h3>
      <Clanci  clanci={zadnjihPet} />

    </div>
  );
};

export default ZadnjihPetClanaka;
