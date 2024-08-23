import React from "react";
import { useState } from "react";
import "./itemCount.css";


//Breve resumen:
//Sincrónico: Espera a que una tarea termine antes de comenzar la siguiente.

//Asincrónico: No espera, permite que otras tareas se ejecuten mientras espera que termine una operación.

const ItemCount = ({ stock, AddToCart }) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const substract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button className="substractbutton" onClick={substract}>-</button>
        <p className="number-display">{count}</p>
        <button className="addbutton"onClick={add}>+</button>
      </div>

      <button className="add" onClick={() => AddToCart(count)}>
        {" "}
        Add to cart{" "}
      </button>
    </div>
  );
};

export default ItemCount;
