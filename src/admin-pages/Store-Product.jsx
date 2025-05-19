import React,{useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Create.css'
import Admin_Navbar from '../components/Admin-Navbar'

export default function Create_Product() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [brand,setBrand] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState(null)
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const Image = await convertImageToBase64(image)
        axios.post('/addproducts',{name:name,brand:brand,description:description,price:price,Image:Image})
        .then((response) =>{
            const data = response.data
            console.log(response)
            if(data.value === false){
                toast.error(data.msg)
            }else{
                toast.success(data.msg)
                setName('')
                setBrand('')
                setDescription('')
                setPrice('')
                setImage(null)
            }
        }).catch((error) =>{
            console.error(error)
        })
    }

    const handleImageChange = (event) =>{
        setImage(event.target.files[0]);
    };

    const convertImageToBase64 = (image) =>{
        const reader = new FileReader();
        reader.readAsDataURL(image);
        return new Promise((resolve, reject) =>{
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        })
    }

    return ( 
        <>
            <Admin_Navbar/>
            <div className='create-body'>
                <div>
                    <h1>Store A Product</h1>
                </div>
                <form action="" onSubmit={handleSubmit} className='create-form' method="post">
                    <label htmlFor="name">Food Name</label><br />
                    <input type="text" value={name} onChange={(event) =>setName(event.target.value)} placeholder='Enter Food Name' className='create-input' name="name" id="name" /><br />
                    <label htmlFor="brand">Brand</label><br />
                    <input type="text" value={brand} onChange={(event) =>setBrand(event.target.value)} placeholder='Enter Food Brand' className='create-input' name="brand" id="brand" /><br />
                    <label htmlFor="description">Description</label><br />
                    <input type="text" value={description} onChange={(event) =>setDescription(event.target.value)} placeholder='Enter A Description' className='create-input' name="description" id="description" /><br />
                    <label htmlFor="price">Price in &#8358;</label><br />
                    <input type="number" value={price} onChange={(event) =>setPrice(event.target.value)} placeholder='Enter A Price' className='create-input' name="price" id="price" /><br />
                    <label htmlFor="image">Product Image</label><br />
                    <input type="file" onChange={handleImageChange} className='create-input' name="image" id="image" /><br/>
                    <div className='create-submit'>
                        <button className='create-button' type="submit">Create</button>
                    </div>
                </form>                
            </div>
        </>
    )
}