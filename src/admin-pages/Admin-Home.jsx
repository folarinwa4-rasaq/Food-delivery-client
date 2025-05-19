import React from 'react';
import { Link } from 'react-router-dom';
import Admin_Navbar from '../components/Admin-Navbar'
import './styles/Admin-Home.css'

export default function Admin_Home() {
    return ( 
        <>
            <Admin_Navbar/>
            <div className='table-div'>
                <div className='cart-food'>
                    <div className='table-details'>
                        <p> Products Table</p>
                    </div>
                    <div className='food-buttons'>
                        <Link to='/create-product'><button title='Click Add Products' className='add'>+ Add Product</button></Link>
                        <Link to='/all-products'><button title='View All Products' className='view'>View Products</button></Link>
                    </div>
                </div>
            </div>
            <div className='table-div'>
                <div className='cart-food'>
                    <div className='table-details'>
                        <p> Users Table</p>
                    </div>
                    <div className='food-buttons'>
                        <Link to='/all-users'><button title='View All Users' className='view'>View Users</button></Link>
                    </div>
                </div>
            </div>
            
            <div className='table-div'>
                <div className='cart-food'>
                    <div className='table-details'>
                        <p>Orders Table</p>
                    </div>
                    <div className='food-buttons'>
                        <Link to='/all-orders'><button title='View All Orders' className='view'>View Orders</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}