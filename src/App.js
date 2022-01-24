
import './App.css';
import {NavBar} from './components/NavBar'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import ProductDetailPage from './pages/ProductDetail'
import { CartContext } from './contexts/cartContext';
import { useState } from 'react';

function App() {
  const [Cart,setCart]=useState([]);
  return (
    
    <div className="App">
      <CartContext.Provider value={Cart}>
        <BrowserRouter>
          <NavBar className=""></NavBar>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route  path="/cart">
              <CartPage />
            </Route>
            <Route  path="/category/:idCategory">
              <HomePage />
            </Route>
            <Route  path="/item/:id">
              <ProductDetailPage/>
            </Route>

          </Switch>
          {/* <ItemListContainer/> */}
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
