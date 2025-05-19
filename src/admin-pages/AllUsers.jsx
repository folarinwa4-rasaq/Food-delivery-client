import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Admin_Navbar from '../components/Admin-Navbar'
import './styles/Create.css'

export default function View_Users() {
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/allusers')
                    setData(response.data)
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
    return ( 
        <>
            <Admin_Navbar/>
            <div className='pro'>
            {data.map((p) => (
                <div className='prod-box'>
                    <h4>{p.name}</h4>
                    <h4>{p.email}</h4>
                </div>
                ))}
            </div>
        </>
    )
}