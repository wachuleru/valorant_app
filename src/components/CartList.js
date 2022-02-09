import React from "react";

import { useCart } from '../hooks/useCart';
import CartItem from "./CartItem";
import { useForm } from "react-hook-form";
import { createOrder } from '../firebase'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'


export function CartList(){
    const cart=useCart()
    const form= useForm();
    console.log("cartlist items", cart.items);
    console.log("cart total", cart.total());
    async function onSubmit(formValues) {
        try {
          const newOrderData = {
            buyer: formValues,
            items: cart.items,
            total: cart.total(),
          }
    
          const newOrderId = await createOrder(newOrderData)
    
          alert(`Gracias por tu compra. OrderID: ${newOrderId}`)
    
          form.reset()
    
          cart.clear()
        } catch (error) {
          alert(`Algo inesperado ha ocurrido.`)
    
          console.error(error)
        }
    }

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                        <tbody>
                        {cart.items.map(item =>{
                            console.log(item.displayName)
                            return <CartItem key={item.uuid} item={item}/>
                        })}
                            <tr>
                                <td></td>
                                <th>TOTAL</th>
                                <td></td>
                                <td>$ {cart.total()}</td>

                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="col-sm-12 col-md-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4" >
                    <TextField title="Nombre" inputProps={{ placeholder: 'Juan Perez', required: true, ...form.register('name'), }} />
                    <TextField title="Correo" inputProps={{ placeholder: 'me@example.com', required: true, ...form.register('email'), }}/>
                    <TextField title="Telefono" inputProps={{ placeholder: '990000123', required: true, ...form.register('phone'), }} />
                    <Button disabled={cart.length === 0} isLoading={form.formState.isSubmitting}>
                        Finalizar compra
                    </Button>
                </form>
                </div>
            </div>
            
        </div>
    )
}