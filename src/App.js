
import './App.css';
import {NavBar} from './components/NavBar'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import ProductDetailPage from './pages/ProductDetail'
import { CartProvider } from './providers/CartProvider'
import Orders from './pages/Orders';
function App() {
  
  
  return (
    
    <div className="App">
      <CartProvider >
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
            <Route  path="/order/">
              <Orders/>
            </Route>

          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
