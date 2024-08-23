import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import NotFound from "../Pages/NotFound"; 
import NoProducts from "../Pages/NoProducts"; 
import "./itemListContainer.css";
import { GridLoader } from "react-spinners";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(false);
  const { idCategory } = useParams();

  const getProducts = async () => {
    try {
      const refProducts = collection(db, "products");
      const dataDb = await getDocs(refProducts);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const refProducts = collection(db, "products");
      const q = query(refProducts, where("category", "==", idCategory));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  if (isLoading) {
    return (
      <div>
        <GridLoader color="orange" />
      </div>
    );
  }

  if (error) {
    return <NotFound />; 
  }

  if (productos.length === 0) {
    return <NoProducts />;

  }

  return (
    <div>
      <p>{greetings}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
