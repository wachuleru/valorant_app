import { useState } from 'react'
import { CartContext } from '../contexts/cartContext'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const contextValue = {
    items: cartItems,
    get length() {
      let tamano=cartItems.reduce((r, item) => r + item.cantidad, 0);
      console.log(cartItems.length);
      console.log("tamaño",tamano);
      return tamano;/*tamaño;*/
    },
    tamano(){
      let tamano=cartItems.reduce((r, item) => r + item.cantidad, 0);
      console.log(cartItems.length);
      console.log("tamaño fn tamano",tamano);
      return tamano;/*tamaño;*/
    },
    total() {
      return cartItems.reduce(
        (r, item) => r + item.cantidad * item.precio,
        0
      )
    },
    getItem(cartItemId) {
      return cartItems.find((cartItem) => cartItem.uuid === cartItemId)
    },
    isInCart(cartItemId) {
      let busqueda= cartItems.find((cartItem) =>{ 
        console.log(cartItem.uuid,' vs ',cartItemId.uuid);
        return cartItem.uuid === cartItemId.uuid});
      console.log("busqueda",busqueda);
      console.log("cartItems",cartItems);
      return busqueda === undefined?false:true;
    },
    clear() {
      setCartItems([])
    },
    removeItem(cartItemId) {
      setCartItems((currentItems) => {
        return currentItems.filter((cartItem) => cartItem.uuid !== cartItemId)
      })
    },
    
    addItem(newCartItem) {
      console.log(cartItems);
      console.log("isInCart", this.isInCart(newCartItem));
      setCartItems((currentItems) => {
        const clonedItems = [...currentItems]
        console.log("clonados",clonedItems);
        const itemIndex = clonedItems.findIndex(
          (cartItem) => {
            console.log("additem vs ",cartItem.uuid, ' vs ',newCartItem.uuid );
            return cartItem.uuid === newCartItem.uuid}
        )
        console.log("findIndex", itemIndex);
        if (itemIndex === -1) {
          clonedItems.push(newCartItem)
          console.log("no esta");
        } else {
          clonedItems[itemIndex] = newCartItem;
          console.log("ya existe");
        }
        console.log("provider")
        console.log("clonados insertados",clonedItems);
        return clonedItems
      })
    },
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}