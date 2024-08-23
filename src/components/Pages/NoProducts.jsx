import { Link } from "react-router-dom";
import "./notfound.css";

const NoProducts = () => {
  return (
    <div className="notfound-container">
              <h2>404</h2>
        <p>No products found.</p>
        <Link to="/">
        <button className="gohomebutton">Go Back home</button>
        </Link> 
      </div>
      )
}

export default NoProducts;
