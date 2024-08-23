import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import CheckoutForm from "./CheckoutForm";
import db from "../../db/db.js";
import "./checkout.css";
import validateForm from "../../utils/FormValidation.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    telephone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, clearCart} = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const order = {
      buyer: { ...dataForm },
      product: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };
    const response = await validateForm(dataForm);
    if (response.status === "success") {
      sendOrder(order);
      clearCart();
    } else {
      toast.warning(response.message);
    }
  };

  const sendOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const orderDB = await addDoc(orderRef, order);
      setIdOrder(orderDB.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {idOrder ? (
        <div className="orderComplete">
          <h2>Order Complete! Wait while we hatch your Digi-eggs! </h2>
          <p>Please save the Id of your order for future tracking: {idOrder}</p>
        </div>
      ) : (
        <CheckoutForm
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;