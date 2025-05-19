import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin_Navbar from '../components/Admin-Navbar'
import './styles/View-Products.css'

export default function View_Products() {
    const [data,setData] = useState([])
        useEffect(()=>{
            try {
                const fetchData = async () => {
                    try {
                        const response = await axios.get('/home')
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
                    <div className='prod-box' key={p.id}>
                        <img className='pro-img' src={`data:image/png;base64,${p.image}`} alt="product image" />
                        <h4>{p.name}</h4>
                        <h4>{p.brand}</h4>
                        <h4>&#8358;{p.price}</h4>
                        <div>
                            <button>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}