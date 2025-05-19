import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import './styles/Orders.css'
import { useNavigate } from 'react-router-dom';

export default function Orders() {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/orders')
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
    console.log(typeof data)
    return (
        <>
            <Navbar/>
            <div className='order-div'>
                {data.map((p) => (
                <div className='order-food'>
                    <div className='imgdiv'>
                        <img src={`data:image/png;base64,${p.image}`} className='order-img' alt="product" />
                    </div>
                    <div>
                        <p>Name:{p.name}</p>
                        <p>Brand:{p.brand}</p>
                    </div>
                    <div>
                        <p>price: &#8358;{p.price}</p>
                        <p>quantity: {p.quantity}</p>
                    </div>
                    <div>
                        <p>status</p>
                        <p>{p.status === true?'Delivered':'Not Delivered'}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}
/**
 * 
 * 
 */