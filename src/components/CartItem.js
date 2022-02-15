import React from 'react';
import { useCart } from '../hooks/useCart';
export default function CartItem(props) {
    const cart=useCart();

    function deleteItem(){
        cart.removeItem(props.item.uuid);
    }
    console.log("delete",props.delete);
    const eliminar =props.delete===undefined?true:props.delete;
    console.log("eliminar",eliminar);

  return <React.Fragment >
      <tr>
          <td style={{width: '70px', height: '70px'}}><img src={props.item.fullPortrait} className="img-thumbnail" alt=""/></td>
          <td>{props.item.displayName}</td>
          <td>{props.item.cantidad}</td>
          <td>{'$ '+(props.item.cantidad * props.item.precio)}</td>
          {eliminar?<td><button className="btn btn-danger" onClick={deleteItem}><i className="fas fa-trash-alt"></i></button></td>:null}
      </tr>
  </React.Fragment>;
}
