import React from 'react';
import './styles/Admin-Navbar.css';
import { Link } from 'react-router-dom';

export default function Admin_Navbar() {
    return ( 
        <>
            <header>
                <h1> Foodie </h1>
                <div>
                    <h2>Admin Dashboard</h2>
                    <Link to='/admin' className='link'><h4>Home</h4></Link>
                    <Link to='/' className='link'><h4>View Site </h4></Link>
                </div>
            </header> 
        </>
    )
}