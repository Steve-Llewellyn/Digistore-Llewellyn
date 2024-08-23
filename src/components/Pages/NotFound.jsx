import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>404</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  );
}

export default NotFound;
