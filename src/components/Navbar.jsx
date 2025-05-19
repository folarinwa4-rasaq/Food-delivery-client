import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return ( 
        <>
            <header className='header'>
                <h1> Foodie </h1>
                <div>
                    <Link to='/' className='link'><h3>Home</h3></Link>
                    <Link to='/profile' className='link'><h3>Profile</h3></Link>
                    <Link to='/orders' className='link'><h3>Orders</h3></Link>
                    <Link to='/cart' className='link'><h3>Cart</h3></Link>
                     
                </div>
            </header> 
        </>
    )
}

//<button className='logout'> Logout </button>