import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/Signup.css'

export default function Signin() {
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                const response = await axios.get('/getprofile')
                setData(response.data)
                console.log(response)
            }
            fetchData()
        } catch (error) {
            console.log(error)   
        }
    },[])
    console.log(data)
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [number,setNumber] = useState('')
    const [address,setAddress] = useState('')
    const [LGA,setLGA] = useState('')
    const [state,setState] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/create-profile',{firstname,lastname,number,address,LGA,state}).then((response) =>{
            console.log(response.data)
        }).catch((error) =>{
            console.error(error)
        })
    }
    return ( 
        <>
            <div className='auth-body'>
                <form action="" onSubmit={handleSubmit} className='auth-form' method="post">
                    <h1>Edit Your Profile</h1>
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
                </form>                
            </div>
        </>
    )
}