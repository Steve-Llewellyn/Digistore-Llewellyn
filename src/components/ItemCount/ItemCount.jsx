import React from 'react'
import { useState } from 'react'

//Chekear clase 6 zoom recording
//Breve resumen:
//Sincrónico: Espera a que una tarea termine antes de comenzar la siguiente.

//Asincrónico: No espera, permite que otras tareas se ejecuten mientras espera que termine una operación.

const ItemCount = ({stock, AddToCart}) => {
    const [count, setCount]= useState(1)

    const aumentar = () => {
      if (count < stock){
      setCount (count + 1)
      }
    }


    const disminuir = () => {
      if (count > 1){setCount(count - 1)

    }
  }

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <p>{count}</p>
      <button onClick={aumentar}>+</button>

      <button onClick={() => AddToCart (count)}> Add to cart </button>
      </div>
  )
}

export default ItemCount