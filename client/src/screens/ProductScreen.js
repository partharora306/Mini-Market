import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props){
    const [qty, setQty] =useState(1);
    const [weight, setWeight] = useState(100);
    const productDetails= useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch =useDispatch();
     useEffect(()=>{
    dispatch(detailsProduct(props.match.params.id));
    },[])
    // console.log(props.match.params.id);
    // const product = data.products.find(x => x._id === props.match.params.id);

    const handleAddToCart =() =>{
        props.history.push("/cart/"+props.match.params.id +"?qty="+qty);
    }

    return (
        <div>
          <div className="back-to-result">
            <Link to="/">Back to result</Link>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error} </div>
          ) : (
            <>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li><h2>{product.name}</h2></li>
                    <li>{product.des}</li>
                    <li>MRP: <s>Rs {product.mrp}</s></li>
                    <li>Selling Price: <b>Rs {product.price}</b></li>
                </ul>
            </div>
        <div className="details-action">
            <ul>
                <li>Price: Rs {product.price}</li>
                <li>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</li>
                <li>Qty: <select value={qty} onChange={(e) =>{setQty(e.target.value)}} >
                    {[...Array(product.countInStock).keys()].map(x => 
                        <option key={x+1} value={x+1}>{x+1}</option>
                        )}
                    </select></li>
                <li>
                    {
                    product.countInStock > 0 ? <button onClick={handleAddToCart} className="button">Add To Cart</button>
                    :
                    <button className="button"><s>Add To Cart</s></button>
                    }
                </li>
            </ul>
        </div>
        </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;