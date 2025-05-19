import React,{useState} from 'react';
import { data, Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/Signup.css'

export default function Admin_Signin() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/adminsignin',{name,password}).then((response) =>{
            data = response.data
            if (data.value === false) {
                toast.error(data.msg)
            } else {
                toast.success(data.msg)
                navigate('/admin')
            }
        }).catch((error) =>{
            console.error(error)
        })
    } 
    return (
        <>
            <div className='auth-body'>
                <form action=""onSubmit={handleSubmit} className='auth-form' method="post">
                    <h1>Admin Login</h1>
                    <label htmlFor="name">Username</label><br />
                    <input type="text" value={name} onChange={(event) =>setName(event.target.value)} placeholder='Enter Your Username' className='auth-input' name="name" id="name" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)} placeholder='Enter Your Password' className='auth-input' name="name" id="password" /><br />
                    <div className='auth-submit'>
                        <button className='auth-button' type="submit">Login</button>
                    </div>
                    <h4>Don't Have An Account?<Link to='/admin-signup'>Click Here to Signup</Link></h4>
                </form>                
            </div>
        </>
    )
}

//67fb228fdcfa1cbe62396a41