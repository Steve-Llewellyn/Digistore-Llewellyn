import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.name}</h2>
    </div>
  );
};
export default ItemDetail;