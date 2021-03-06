import React, { useEffect, useState } from "react";

import { useCart } from '../hooks/useCart';
import CartItem from "./CartItem";
import { useForm } from "react-hook-form";
import { createOrder } from '../firebase'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'


export function CartList(){
    const cart=useCart()
    const form= useForm();
    const watchFields=form.watch();
    const [buttonSubmit,setButtonSubmit]=useState(false)

    function revisarCampos(nombre,telefono,correo,correo2){
        if(nombre==='' || telefono==='' || correo==='' || correo2==='' ){
            setButtonSubmit(false);
        }else if(correo===correo2){
            setButtonSubmit(true);
        }else{
            setButtonSubmit(false);
        }
    }
    useEffect(()=>{
        const subscription = form.watch((value, { name, type }) => {
            console.log("watch",value, name, type)
            
            revisarCampos(value.name,value.phone,value.email, value.email2)
            });
            
        console.log("subs",subscription);
    }
    )
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
                    <TextField title="Telefono" inputProps={{ placeholder: '990000123', required: true, ...form.register('phone'), }} />
                    <TextField title="Correo" inputProps={{ placeholder: 'me@example.com', required: true, ...form.register('email'), }}/>
                    <TextField title="Confirmar Correo" inputProps={{ placeholder: 'me@example.com', required: true, ...form.register('email2'), }}/>
                    <Button disabled={cart.length === 0 || !buttonSubmit } isLoading={form.formState.isSubmitting}>
                        Finalizar compra
                    </Button>
                    
                    
                </form>
                </div>
            </div>
            
        </div>
    )
}