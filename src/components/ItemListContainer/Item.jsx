import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <div className="img-card">
        <Link to={"/detail/" + producto.id}>
          <img src={producto.image} alt="" />
        </Link>
      </div>
      <p className="frontpage-text">{producto.name}</p>
      <p className="frontpage-text">Price:${producto.price}</p>
      <Link className="link" to={"/detail/" + producto.id}>
        See details
      </Link>
    </div>
  );
};

export default Item;
