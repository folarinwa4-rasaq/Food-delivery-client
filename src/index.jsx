import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import App from './pages/App';
import SingleProduct from './pages/product'
import Profile from './pages/Profile'
import Verify_Payment from './pages/Verify-Payment'
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Admin_Home from './admin-pages/Admin-Home'
import Create_Product from './admin-pages/Store-Product'
import View_Products from './admin-pages/ViewProducts'
import View_Users from './admin-pages/AllUsers'
import View_Admins from './admin-pages/AllAdmins'
import All_Orders from './admin-pages/All-Orders';
import Signup from './auth-pages/signup'
import Signin from './auth-pages/Signin'
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'https://food-delivery-server.onrender.com/api'
axios.defaults.withCredentials = true
root.render(
    <BrowserRouter>
        <Toaster position='top-center' toastOptions={{duration:3000}}/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/prod/:id' element={<SingleProduct/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/payment-callback' element={<Verify_Payment/>} />
            /*Admin Routes */
            <Route path='/admin' element={<Admin_Home/>} />
            <Route path='/create-product' element={<Create_Product/>} />
            <Route path='/all-products' element={<View_Products/>} />
            <Route path='/all-users' element={<View_Users/>} />
            <Route path='/all-admins' element={<View_Admins/>} />
            <Route path='/all-orders' element={<All_Orders/>} />
            /*Auth Routes */
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
        </Routes>
    </BrowserRouter>  
);
//<React.StrictMode>