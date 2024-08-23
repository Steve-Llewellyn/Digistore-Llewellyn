import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import NotFound from "../Pages/NotFound"; 
import "./itemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const { idProduct } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);
      
      if (!dataDb.exists()) {
        
        setError(true);
        setProduct(null);
      } else {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <NotFound />; 

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
