import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import './styles/Cart.css'

export default function Cart() {
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/cart')
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
    const RemoveCart = async(name) =>{
        try {
            const response = await axios.post('/deletecart',{name:name})
            setData(response.data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const urll = ``
    return (
        <>
            <Navbar/>
            <div className='cart-div'>
                {data.map((p) => (
                    <div className='cart-food' >
                        <div className='food-data'>
                            <p>{p.product_name}</p>
                            <p>&#8358;{p.product_price}</p>
                        </div>
                        <div className='food-buttons'>
                            <Link to={`/prod/${p.id}#buy`}><button className='ordern'>Order</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

//<button title='Delete Cart' onClick={() => RemoveCart(p.product_name)} className='remove-cart'>x</button>