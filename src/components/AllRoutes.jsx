import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';

function AllRoutes() {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/" element={<Home/>} />    
    </Routes>
  );
}

export default AllRoutes;
