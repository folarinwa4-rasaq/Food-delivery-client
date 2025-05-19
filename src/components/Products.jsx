import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Products.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                try {
                    const response = await axios.get('/home')
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
    return ( 
        <>
            <h2 className='prod-header'>Available Foods/Dishes</h2>
            <div className="product-list">
                <div className="products">
                {data.map((p) => (
                    <Link to={`/prod/${p.id}`}>
                        <div className='prod-card' key={p.id}>
                            <img className="food-img" src={`data:image/png;base64,${p.image}`} alt="Food Image" />
                            <p>{p.name}</p>
                            <p>Brand: {p.brand}</p>
                            <p>&#8358;{p.price}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </>
    )
}

//<Link><button>Check Out</button></Link>