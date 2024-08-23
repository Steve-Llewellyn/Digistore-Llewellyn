import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, removeProduct, emptyCart} =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        <h2>Your cart is empty 😥</h2>
        <Link to="/">
          <button className="gohomebutton">Go Back home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartcontent">
      <ul>
        {cart.map((cartProduct) => (
          <li className="cartindividualitem" key={cartProduct.id}>
            <img class className="cartimg" src={cartProduct.image} alt="" />
            <p className="carttext">{cartProduct.name}</p>
            <p className="carttext">Amount: {cartProduct.amount}</p>
            <p className="carttext">Price: ${cartProduct.price}</p>
            <p className="carttext">Precio parcial: ${cartProduct.amount * cartProduct.price}</p>
            <button className = "deletebutton" onClick={() => removeProduct(cartProduct.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2 className="totalprice">Total price: ${totalPrice()}</h2>
      <button className= "emptycartbutton"onClick={emptyCart}>Empty cart</button>
      <Link to="/checkout">
        <button className= "checkoutbutton">Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;

//Array en return -> .map
