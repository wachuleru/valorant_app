
import './App.css';
import {NavBar} from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import ProductDetailPage from './pages/ProductDetail'

function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar className=""></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  path="/cart">
            <CartPage />
          </Route>
          <Route  path="/product/:id">
            <ProductDetailPage/>
          </Route>

        </Switch>
        {/* <ItemListContainer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
