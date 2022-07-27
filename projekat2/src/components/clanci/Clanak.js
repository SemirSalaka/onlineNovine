import { FaTimes } from "react-icons/fa";
import "./Clanci.css"


const Clanak = ({ clanak, onDelete }) => {

  return (
    <div className="clanak">
      <h2>
        {clanak.naslov}
        {onDelete !== undefined && <FaTimes className="ikonaBrisanje" onClick={() => onDelete(clanak.id)} />}
      </h2>
      <p>Kategorija: {clanak.kategorija}</p>
      <h3>{clanak.text}</h3>
      <p>{clanak.datum}</p>
    </div>
  );
};

export default Clanak;
