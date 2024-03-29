import Home from './pages/Home'
import Product from './pages/Product';
import ProductList from './pages/ProductList'

import Cart from "./pages/Cart";

import Login from "./pages/Login";

import Register from "./pages/Register";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import { useSelector } from 'react-redux';

const App = () => {
  const user=useSelector((state)=>state.user.currentUser) ;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={user? <Navigate to="/"/> : <Login/>}></Route>
        <Route path="/register" element={user? <Navigate to="/"/>:<Register/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;