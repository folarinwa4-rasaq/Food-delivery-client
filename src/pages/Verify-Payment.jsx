import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './styles/Cart.css'

export default function Verify_Payment() {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    useEffect(()=>{
        try {
            const fetchData = async () => {
                const queryParams = new URLSearchParams(window.location.search)
                const reference = queryParams.get('reference')
                const id = localStorage.getItem('id')
                const quantity = localStorage.getItem('quantity')
                try {
                    const response = await axios.post('/verifypay',{ reference,id,quantity })
                    if(response.data.auth){
                        navigate('/signin')
                    }else{
                        setData(response.data)
                    }
                    if (response.data.value === true){
                        toast.success(data.msg)
                        localStorage.removeItem('id')
                        localStorage.removeItem('quantity')
                        navigate('/orders')
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
    return (
        <>
            <h1>{data.msg}</h1>
        </>
    )
}