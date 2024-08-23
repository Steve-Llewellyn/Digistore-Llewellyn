import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const AddToCart = (counter) => {
    const cartProduct = { ...product, amount: counter };

    addProduct(cartProduct);

    setShowItemCount(false);
  };

  return (
    <div className="detail">
      <div className="img-detail">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detail-text">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p> Price: ${product.price}</p>
        {showItemCount ? (
          <ItemCount stock={product.stock} AddToCart={AddToCart} />
        ) : (
          <Link to="/cart">
            <button className="gotocartbutton">Go to Cart</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
