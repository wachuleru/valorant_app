import { firestore } from 'firebase';
import {getFirestore} from './conector.js'


function documentToProduct(document){
    return {...document.data()}
}
export async function getAllProducts(){
    const firestore=getFirestore();
    const snapshot = await firestore.collection('products').get();
    const products = snapshot.docs.map(documentToProduct);
    console.log("firebase",products);
    //setAgentes(products)
    return products
}

export async function getCategoryProducts(idCategory){
    const firestore=getFirestore();
    const snapshot = await firestore
    .collection('products')
    .where('role.uuid','==',idCategory).get();
    
    const products = snapshot.docs.map(documentToProduct);
    console.log("firebase categoria filtrada",products);
    //setAgentes(products)
    return products
}

export async function getProductsById(id){
    const firestore=getFirestore();
    const doc = await firestore.collection('products').doc(id).get();

    if(!doc.exists){
        return null;
    }

    
    console.log("doc",doc.data());
    //setAgent(doc.data())
    return documentToProduct(doc)
}


export async function createOrder(order){
    const db = getFirestore();

    const cartItemsId=order.items.map((item)=>item.uuid);
    const snapshot= await db.collection('products').where(firestore.FieldPath.documentId(),'in', cartItemsId).get()

    const batch= db.batch();
    const outOfStock=[];
    snapshot.docs.forEach((document, index)=>{
        const stock=document.data().stock
        const cantidad=order.items[index].cantidad;
        if(stock >= cantidad){
            batch.update(document.ref,{stock: stock - cantidad})
        }else{
            const product = documentToProduct(document);
            outOfStock.push(product)
        }
    })

    if(outOfStock.length !==0){
        console.log(outOfStock);
        throw Error('No hay stock suficiente');
    }else{
        await batch.commit()
    }

    const data={
        buyer: order.buyer,
        items: order.items,
        createdAt: firestore.Timestamp.fromDate(new Date()),
        total: order.total
    }

    const document= await db.collection('orders').add(data);

    return document.id

}