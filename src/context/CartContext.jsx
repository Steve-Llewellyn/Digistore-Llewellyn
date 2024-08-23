import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    const condition = inTheCart(newProduct.id);
    if (condition) {
      let newCart = [...cart];
      newCart.forEach((cartProduct) => {
        if (cartProduct.id === newProduct.id) {
          cartProduct.amount = cartProduct.amount + newProduct.amount;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const inTheCart = (idProduct) => {
    const conditional = cart.some(
      (cartProduct) => cartProduct.id === idProduct
    );
    return conditional;
  };
  const totalAmount = () => {
    const totalProducts = cart.reduce(
      (total, cartProduct) => total + cartProduct.amount,
      0
    );
    return totalProducts;
  };
  const totalPrice = () => {
    const price = cart.reduce(
      (total, cartProduct) => total + cartProduct.amount * cartProduct.price,
      0
    );
    return price;
  };
  const removeProduct = (idProduct) => {
    const filteredProducts = cart.filter(
      (cartProduct) => cartProduct.id !== idProduct
    );
    setCart(filteredProducts);
  };
  const emptyCart = () => {
    setCart([]);
  };
  const clearCart = () => {
    setCart([]);
  };
  

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        totalAmount,
        totalPrice,
        removeProduct,
        emptyCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
