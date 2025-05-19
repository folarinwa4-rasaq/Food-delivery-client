import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/product.css'

export default function SingleProduct() {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const [user,setUser] = useState([])
    const params = useParams()
    const id = params.id
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`/prod/${id}`)
                if(response.data.auth){
                    navigate('/signin')
                }else{
                    setData(response.data.Products)
                }
                setUser(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    console.log(data)
    const [quantity,setQuantity] = useState(1)
    const [email, setEmail] = useState(user?.email ||"")
    const amount = data.price
    const total = (amount * quantity) + 2000;

    const handleQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }

    const AddCart = async() =>{
        try {
            const response = await axios.post('/addcart',{name:data.name,description:data.description,brand:data.brand,price:data.price})
            console.log(response)
            if (response.data.value === true){
                toast.success(response.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('id',id)
        localStorage.setItem('quantity',quantity)
        try {
            const frontUrl = window.location.origin
            const callbackUrl =`${frontUrl}/payment-callback`
            const response = await axios.post('/paye', { email, amount: total * 100, callbackUrl,id:id,quantity:quantity });
            if(response.data.value===false){
                toast.error(response.data.msg)
            }
            const paymentUrl = response.data?.data?.authorization_url;
    
            if (!paymentUrl) {
                throw new Error("Authorization URL not found");
            }
    
            window.location.href = paymentUrl;
        } catch (error) {
            console.error("Payment error:", error);
            toast.error("An error occured. Please confirm complete credentials.");
        }
    };
    return (
        <>
            <Navbar/>
            <div className='content'>
                <h1 className='prod-name'>{data.name}</h1>
                <div className='food-content'>
                    <img src={`data:image/png;base64,${data.image}`} className='prodimg' alt="Food Image" />
                    <div className='proddiv'>
                        <h2>Description</h2>
                        <p>{data.description}</p>
                        <h2>Brand</h2>
                        <p>{data.brand}</p>
                        <h2>Price</h2>
                        <p>&#8358;{amount}</p>
                        <h2>Delivery price</h2>
                        <p>&#8358;2000</p>
                        <div>
                            <button className='add-cart' onClick={AddCart}>Add to Cart</button>
                        </div><hr />
                        <h3 id='buy'>Do You Want To Buy Now ?</h3><hr />
                        <form onSubmit={handleSubmit} method="post">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Enter Your Email' /><br />
                            <label htmlFor="quantity">Quantity</label><br />
                            <input type="number" value={quantity} onChange={handleQuantityChange} name="quantity" id="quantity" placeholder='Enter Quantity To Buy' /><br />
                            <label htmlFor="total">Total + Delivery</label><br />
                            <input type="number" value={quantity<1?0:total} name="total" id="total" /><br />
                            <button type='submit' className='order'>Order Now</button>
                        </form>
                    </div>
                </div>
                <Link to="/"><button className='back'>Back</button></Link>
            </div>
        </>
    )
}