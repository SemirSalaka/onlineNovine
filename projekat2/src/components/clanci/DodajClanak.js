import { useState } from "react";
import Dropdown from "../Dropdown";
import "../../App.css"

const DodajClanak = ({ onAdd }) => {
  const [naslov, setNaslov] = useState("");
  const [text, setText] = useState("");
  const [kategorija, setKategorija] = useState("");


  const kategorije = [
    "Vijesti",
    "Sport",
    "Biznis",
    "Auto",
    "Lifestyle",
    "Crna hronika",
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (!naslov || !text || !kategorija) {
      alert("Morate ispuniti sva polja");
      return;
    }
    //svaki put kada se klikne submit na formi generise se novi datum i vrijeme koji se spajaju u jedan string
    //taj string ubacujem u prosljedjenu funkciju i na kartici ispisujem vrijeme objave clanka 
    var today = new Date();
    var date = today.getDate()+ "-" + (today.getMonth() + 1) + "-" + today.getFullYear() ;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var datum = date + " " + time;

    onAdd({ naslov, text, kategorija, datum});

    setNaslov("");
    setText("");
  };

  return (
    <form className="forma" onSubmit={onSubmit}>
      <div className="forma_unos">
        <label>Clanak</label>
        <input
          type="text"
          placeholder="Unesi naslov clanka"
          value={naslov}
          onChange={(e) => setNaslov(e.target.value)}
        ></input>
      </div>

      <div className="forma_unos">
        <label>Tekst</label>
        <input
          type="text"
          placeholder="Unesi tekst clanka"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="forma_unos">
        <Dropdown state={kategorija} onChange={(e) => setKategorija(e.target.value)} text="Kategorije " items={kategorije} />
      </div>
      <input
        className="btn "
        type="submit"
        value="Spasi clanak"

      ></input>
    </form>
  );
};

export default DodajClanak;
