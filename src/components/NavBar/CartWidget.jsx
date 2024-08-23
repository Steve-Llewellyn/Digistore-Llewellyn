import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);
 
  let amount = totalAmount();
  const buttonClass = amount > 0 ? 'button-visible' : 'button-hidden';

  return (
    <Link to="/cart" className="cartwidget">
      <GiShoppingCart className={amount === 0 ? "cartRed" : "cartGreen"} />
      <button className={buttonClass}> {amount > 0 && amount}</button>
    </Link>
  );
};
export default CartWidget;
