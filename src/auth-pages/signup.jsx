import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';

export default function Signup() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [number,setNumber] = useState('')
    const [address,setAddress] = useState('')
    const [LGA,setLGA] = useState('')
    const [state,setState] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name)
        axios.post('/signup',{name:name,email:email,password:password,firstname:firstname,lastname:lastname,phoneno:number,address:address,LGA:LGA,state:state}).then((response) =>{
            const data = response.data
            console.log(data.value)
            if(data.value === false){
                toast.error(data.msg)
            }else{
                setName('')
                setEmail('')
                setPassword('')
                toast.success(data.msg)
                navigate('/signin')
            }
        }).catch((error) =>{
            console.error(error)
        })
    } 
    return ( 
        <>
            <div className='auth-body'>
                <form action="" onSubmit={handleSubmit} className='auth-form' method="post">
                    <h1>Signup Now</h1>
                    <label htmlFor="name">Username</label><br />
                    <input type="text" value={name} onChange={(event) =>setName(event.target.value)} placeholder='Enter Your Username' className='auth-input' name="name" id="name" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" value={email} onChange={(event) =>setEmail(event.target.value)} placeholder='Enter Your Email' className='auth-input' name="email" id="email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)} placeholder='Enter Your Password' className='auth-input' name="name" id="password" /><br />
                    <hr />
                    <h1>Profile Setup</h1>
                    <hr />
                    <label htmlFor="firstname">Firstname<sup>*</sup></label><br />
                    <input type="text" value={firstname} onChange={(event) =>setFirstname(event.target.value)} placeholder='Enter Your Firstname' className='auth-input' name="firstname" id="firstname" /><br />
                    <label htmlFor="lastname">Lastname<sup>*</sup></label><br />
                    <input type="text" value={lastname} onChange={(event) =>setLastname(event.target.value)} placeholder='Enter Your Lastname' className='auth-input' name="lastname" id="lastname" /><br />
                    <label htmlFor="number">Phone Number<sup>*</sup></label><br />
                    <input type="tel" value={number} onChange={(event) =>setNumber(event.target.value)}placeholder='Enter Your Phone Number' className='auth-input' name="number" id="number" /><br />
                    <label htmlFor="address">Home Address<sup>*</sup></label><br />
                    <input type="text" value={address} onChange={(event) =>setAddress(event.target.value)} placeholder='Enter Your Home Address' className='auth-input' name="address" id="address" /><br />
                    <label htmlFor="lga">Local Government Area(LGA)<sup>*</sup></label><br />
                    <input type="text" value={LGA} onChange={(event) =>setLGA(event.target.value)} placeholder='Enter Your Local Government Area' className='auth-input' name="LGA" id="lga" /><br />
                    <label htmlFor="state">State<sup>*</sup></label><br />
                    <input type="text" value={state} onChange={(event) =>setState(event.target.value)} placeholder='Enter Your State' className='auth-input' name="state" id="state" /><br />
                    <div className='auth-submit'>
                        <button className='auth-button' type="submit">Submit</button>
                    </div>
                    <h4>Already Have An Account?<Link to='/signin'>Click Here to Signin</Link></h4>
                </form>                
            </div>
        </>
    )
}