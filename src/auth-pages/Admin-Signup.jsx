import React,{useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Signup.css'

export default function Admin_Signup() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/adminsignup',{name,email,password}).then((response) =>{
            const data = response.data
            if(data.value === false){
                toast.error(data.msg)
            }else{
                toast.success(data.msg)
                navigate('/admin-signin')
            }
        }).catch((error) =>{
            console.error(error)
        })
    }
    return ( 
        <>
            <div className='auth-body'>
                <form action="" onSubmit={handleSubmit} className='auth-form' method="post">
                    <h1>Admin Signup</h1>
                    <label htmlFor="name">Username</label><br />
                    <input type="text" value={name} onChange={(event) =>setName(event.target.value)} placeholder='Enter Your Username' className='auth-input' name="name" id="name" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" value={email} onChange={(event) =>setEmail(event.target.value)} placeholder='Enter Your Email' className='auth-input' name="email" id="email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)} placeholder='Enter Your Password' className='auth-input' name="name" id="password" /><br />
                    <div className='auth-submit'>
                        <button className='auth-button' type="submit">Signup</button>
                    </div>
                    <h4>Already Have An Account?<Link to='/admin-signin'>Click Here to Signin</Link></h4>
                </form>                
            </div>
        </>
    )
}