import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onDodajClanak, prikazForme }) => {


  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="rgb(216, 133, 133)" text={!prikazForme ? "Dodaj clanak" : "Zatvori formu za dodavanje clanaka"} onClick={onDodajClanak} />
    </header>
  );
};

Header.defaultProps = {
  title: "Clanci",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
