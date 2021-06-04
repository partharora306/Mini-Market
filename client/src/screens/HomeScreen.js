import React, { useEffect, useState,Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from '../data.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props){
  // const [products,setProduct] = useState([]);
  const productList =useSelector(state => state.productList);
  const {products,loading, error}=productList
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(listProducts());
  },[])
  const sell="Best Sellers";
  // useEffect(()=>{
  //   const fetchData= async ()=>{
  //     const {data} = await axios.get("/api/products");
  //     setProduct(data);
  //   }
  //   fetchData();
  //   return ()=>{

  //   };
  // },[])
  useEffect(()=>{
    setFilteredProducts(
      products.filter( product =>{
        return (
        product.name.toLowerCase().includes(search.toLowerCase())
        )
      })
    )
    },[search])
  // const filteredProducts= products.filter( product =>{
  //   return product.name.toLowerCase().includes(search.toLowerCase())
  // })
    const offers=data.offers;
  
    return loading ? <div>Loading...</div>:
    error ? <div>Error</div>: 
    
    <div>
      
       <Carousel className="slideshow" showArrows={true} autoPlay showThumbs={false}>
            {offers.map((offer) => (
              <div>
                <Link to={`/product/${offer._id}`}>
                  <img className="slideshow-img" src={offer.image}/>
                </Link>
              </div>
            ))}
          </Carousel>
          <div className="search"><input type="text" placeholder="Search for Products..." size="100" className="search-input" onChange={(e) =>{setSearch(e.target.value)}}/></div>
      <div className="heading-border"><h2 className="heading">Best Sellers</h2></div>

    <ul className="products">
    {
      filteredProducts.map(product =>
        <li>
          <div className="product">
          <Link to={"/product/"+product._id}><img className="product-image" src={product.image} alt={product.name}></img></Link>
              <div className="product-name"><Link to={"/product/"+product._id}>{product.name}</Link></div>
              <div className="product-des">{product.des}</div>
              <div className="product-price">Rs {product.price}</div>
              <div className="product-mrp"><s>Rs {product.mrp}</s></div>
          </div>
      </li>)
    }
      
      </ul>
      </div>
}
export default HomeScreen;