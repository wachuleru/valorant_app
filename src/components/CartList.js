import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
function CartItem({item}){
    return <p>Cart Item:{item.id}</p>
}

export function CartList(){
    const cartItems=useContext(CartContext);

    return (
        <div>
            {cartItems.map(item =>{
                return <CartItem key={item.id} item={item}/>
            })}
        </div>
    )
}