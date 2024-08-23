import React from "react";
import "./checkout.css";

const CheckoutForm = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={dataForm.name}
        onChange={handleChangeInput}
      />
      <label>Telephone: </label>
      <input
        type="text"
        name="telephone"
        value={dataForm.telephone}
        onChange={handleChangeInput}
      />
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={dataForm.email}
        onChange={handleChangeInput}
      />
      <label>Confirm Email: </label>
      <input
        type="email"
        name="confirmEmail"
        value={dataForm.confirmEmail}
        onChange={handleChangeInput}
      />

      <button type="submit">Send order</button>
    </form>
  );
};


export default CheckoutForm;
