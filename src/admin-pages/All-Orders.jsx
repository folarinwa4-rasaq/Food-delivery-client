import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin_Navbar from '../components/Admin-Navbar'
import './styles/View-Products.css'

export default function All_Orders() {
    const [data,setData] = useState([])
        useEffect(()=>{
            try {
                const fetchData = async () => {
                    try {
                        const response = await axios.get('/allOrders')
                        if(response.data.auth){
                            navigate('/signin')
                        }else{
                            setData(response.data)
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
        const handleStatus = (event,id)=>{
            const newStatus = event.target.checked?true:false
            try {
                axios.post('/updatestatus',{id:id,newstatus:newStatus}).then(response=>{
                    setData(data.map(p =>{
                        if (p._id === id) {
                            return{...p,status:newStatus}
                        }
                        return p
                    }))
                }).catch(e=>console.log(e))
            } catch (error) {
                console.log(error)
            }
        }
    return ( 
        <>
            <Admin_Navbar/>
            <div className='pro'>
                {data.map(p => (
                <div className='prod-box'>
                    <img className='pro-img' src={`data:image/png;base64,${p.image}`} alt="product image" />
                    <h4>{p.name}</h4>
                    {console.log(p.id)}
                    <h4>{p.user}</h4>
                    <h4>{p.brand}</h4>
                    <h4>&#8358;{p.price}</h4>
                    <label htmlFor="status">Status:</label>
                    <input type="checkbox" name="" checked={p.status === true} onChange={(event)=>handleStatus(event,p.id)} id="status" />
                </div>
                ))}
            </div>
        </>
    )
}