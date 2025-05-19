import React,{useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Signup.css'

export default function Signin() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/signin',{name,password}).then((response) =>{
            console.log(response)
            const data = response.data
            console.log(data.value)
            if(data.value === false){
                toast.error(data.msg)
            }else{
                setName('')
                setPassword('')
                toast.success(data.msg)
                navigate('/')
            }
        }).catch((error) =>{
            console.error(error)
        })
    }
    return ( 
        <>
            <div className='auth-body'>
                <form action="" onSubmit={handleSubmit} className='auth-form' method="post">
                    <h1>Login Now</h1>
                    <label htmlFor="name">Username</label><br />
                    <input type="text" value={name} onChange={(event) =>setName(event.target.value)} placeholder='Enter Your Username' className='auth-input' name="name" id="name" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)} placeholder='Enter Your Password' className='auth-input' name="name" id="password" /><br />
                    <div className='auth-submit'>
                        <button className='auth-button' type="submit">Login</button>
                    </div>
                    <h4>Don't Have An Account?<Link to='/signup'>Click Here to Signup</Link></h4>
                </form>                
            </div>
        </>
    )
}