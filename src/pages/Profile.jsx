import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './styles/Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/getprofile')
                    if(response.data.auth){
                        navigate('/signin')
                    }else{
                        setData(response.data)
                        console.log(response.data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
        } catch (error) {
            console.log(error)   
        }
    },[])
    console.log(data)
    return(
        <>
            <Navbar/>
            <h2 className='y-profile'>Your Profile</h2>
            <div className='profile'>
                <h4>Username: {data.name}</h4>
                <h4>First Name: {data.first_name}</h4>
                <h4>Last Name: {data.last_name}</h4>
                <h4>Phone no: {data.phone_no}</h4>
                <h4>Email: {data.email}</h4>
                <h4>Address: {data.address}</h4>
                <h4>LGA: {data.LGA}</h4>
                <h4>State: {data.state} state</h4>
                <h4>Country: Nigeria</h4>
            </div>
        </>
    )
}