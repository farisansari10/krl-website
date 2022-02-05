import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import ShowUserInfo from './components/ShowUserInfo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product' element={<Products />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/fridges' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/userinfo' element={<ShowUserInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;