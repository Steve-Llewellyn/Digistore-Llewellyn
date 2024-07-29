import React from 'react'
import getProducts from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

//el .then() permite manejar el resultado de una Promise y encadenar acciones a realizar una vez que la Promise se resuelva.


const ItemListContainer = ({greetings}) => {
  const [productos, setProductos] = useState([])
  const {idCategory}= useParams();

  useEffect(()=> {
    getProducts()
    .then((respuesta)=> {
      if(idCategory){
        const productosFiltrados = respuesta.filter( (producto)=>producto.category === idCategory)
        setProductos(productosFiltrados)      }
      else {
      setProductos(respuesta);
      }
    })
    .catch((error)=> {
      console.error(error);
    })
    .finally(()=> {
      console.log("Finalizo la promesa");
    });

  }, [idCategory])

      return (
    <div>
        <p>{greetings}</p>
        <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;