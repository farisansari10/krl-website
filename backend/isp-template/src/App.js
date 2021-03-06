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
import AdminUsers from './Admin/AdminUsers';
import AdminAddProduct from './Admin/AdminAddProduct';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product/:category' element={<Products />} />
          <Route path='/productlist/:subCategory' element={<ProductList />} />
          <Route path='/view-detail/:index' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/userinfo' element={<ShowUserInfo />} />
          <Route path='/adminusers' element={<AdminUsers />} />
          <Route path='/adminaddproduct' element={<AdminAddProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;