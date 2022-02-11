export function PriceStock({precio,stock}) {
    return (
        <>
        <p className='text-center' style={{ background: 'rgba(0,0,0,0.7)', color:'white', position:'relative', top:'2px', left:'30px', width:'40%'}}>Precio: $ {precio}</p>
        <p className='text-center' style={{ background: 'rgba(0,0,0,0.7)', color:'white',position:'relative', top:'-6px', left:'30px', width:'40%'}}>Stock: {stock}</p>
        </>
    )
  }


                