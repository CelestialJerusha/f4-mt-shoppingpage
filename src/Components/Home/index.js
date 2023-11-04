import axios from 'axios'
import React, {useState,useEffect } from "react";
import './index.css'

const Home = () => {
  const [data,setData] = useState('');

  useEffect(()=>{
    fetchInfo()
},[])

  async function fetchInfo(){
    try{
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response.data)
      setData(response.data.products)
    }
    catch(err){
      console.log(err);
    }
  }
  // console.log(data)
  
    
  
    return(
      <div className='container'>
        {Array.from(data).map((dataObj,index) => {
          return (
              <div className='sub-container'>
                <img src={dataObj.thumbnail} alt="image1" />
                <h3>{dataObj.title}</h3>
                <span>Rs.{dataObj.price}</span>
                <h5>{dataObj.brand}</h5>
                <p>{dataObj.description}</p>
                <p>Rating:{dataObj.rating}</p> 
                <button>Add To Cart</button>
              </div>
          );
        })}
      </div>
    )
      
  }

  export default Home;

