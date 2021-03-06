import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import {getFirestore} from './firebase' */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



/* async function getAllProducts(){
  const firestore=getFirestore();
  const snapshot = await firestore.collection('products').get();
  const products = snapshot.docs.map((doc) => doc.data());
  console.log("firebase",products);
  return products
}

getAllProducts(); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
