import React from 'react';
import { useCart } from '../hooks/useCart';
export default function CartItem(props) {
    const cart=useCart();

    function deleteItem(){
        cart.removeItem(props.item.uuid);
    }
    
  return <React.Fragment >
      <tr>
          <td style={{width: '70px', height: '70px'}}><img src={props.item.fullPortrait} className="img-thumbnail" /></td>
          <td>{props.item.displayName}</td>
          <td>{props.item.cantidad}</td>
          <td>{'$ '+(props.item.cantidad * props.item.precio)}</td>
          <td><button className="btn btn-danger" onClick={deleteItem}><i className="fas fa-trash-alt"></i></button></td>
      </tr>
  </React.Fragment>;
}
