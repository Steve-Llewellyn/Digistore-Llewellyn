import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <Link to ={"/detail/"+ producto.id} >
        <img width={200} src={producto.image} alt="" />
        <p className='MainProduct'>{producto.name}</p> 
    </Link>
  )
}

export default Item;