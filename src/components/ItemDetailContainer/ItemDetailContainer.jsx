import React from 'react'
import { useState, useEffect } from 'react'
import getProducts from '../../data/data.js'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idProduct}= useParams()


    useEffect (()=> {

        getProducts()
            .then((data)=> {
                const productFound = data.find((productData)=> productData.id === idProduct )
                setProduct(productFound)
            })

    }, [])


  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer