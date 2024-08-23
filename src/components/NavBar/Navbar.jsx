import CartWidget from "./CartWidget";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
      </Link>

      <ul className="categories">
        <Link to="/category/boosterpacks" className="category">
          <p>Booster Packs</p>
          <div className="img-category"></div>
        </Link>

        <Link to="/category/singles" className="category">
          <p>Singles</p>
          <div className="img-category"></div>
        </Link>

        <Link to="/category/decks" className="category">
          <p>Premade Decks</p>
          <div className="img-category"></div>
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
