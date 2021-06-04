// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import axios from 'axios';
// import {
//   saveProduct,
//   listProducts,
//   // deleteProdcut,
// } from '../actions/productActions';

// function ProductsScreen(props) {
//   // const [modalVisible, setModalVisible] = useState(false);
//   // const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const [countInStock, setCountInStock] = useState('');
//   const [des, setDes] = useState('');
//   // const [uploading, setUploading] = useState(false);
//   // const productList = useSelector((state) => state.productList);
//   // const { loading, products, error } = productList;

//   const productSave = useSelector((state) => state.productSave);
//   const {
//     loading: loadingSave,
//     success: successSave,
//     error: errorSave,
//   } = productSave;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     // if (successSave) {
//     //   setModalVisible(false);
//     // }
//     return () => {
//       //
//     };
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       saveProduct({
//         // _id: id,
//         name,
//         price,
//         image,
//         countInStock,
//         des
//       })
//     );
//   };
// // return (
//   //   <div className="content content-margined">
//   //     <div className="product-header">
//   //       <h3>Products</h3>
//   //       <button className="button" onClick={() => openModal({})}>
//   //         Create Product
//   //       </button>
//   //     </div>
//   //     {modalVisible && (
//   return <div className="form">
//           <form onSubmit={submitHandler}>
//             <ul className="form-container">
//               <li>
//                 <h2>Create Product</h2>
//               </li>
//               <li>
//                 {loadingSave && <div>Loading...</div>}
//                 {errorSave && <div>{errorSave}</div>}
//               </li>

//               <li>
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={name}
//                   id="name"
//                   onChange={(e) => setName(e.target.value)}
//                 ></input>
//               </li>
//               <li>
//                 <label htmlFor="price">Price</label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={price}
//                   id="price"
//                   onChange={(e) => setPrice(e.target.value)}
//                 ></input>
//               </li>
//               <li>
//                 <label htmlFor="image">Image</label>
//                 <input
//                   type="text"
//                   name="image"
//                   value={image}
//                   id="image"
//                   onChange={(e) => setImage(e.target.value)}
//                 ></input>
//                 {/* <input type="file" onChange={uploadFileHandler}></input>
//                 {uploading && <div>Uploading...</div>} */}
//               </li>
//               <li>
//                 <label htmlFor="countInStock">CountInStock</label>
//                 <input
//                   type="text"
//                   name="countInStock"
//                   value={countInStock}
//                   id="countInStock"
//                   onChange={(e) => setCountInStock(e.target.value)}
//                 ></input>
//               </li>
//               <li>
//                 <label htmlFor="des">Description</label>
//                 <textarea
//                   name="description"
//                   value={des}
//                   id="description"
//                   onChange={(e) => setDes(e.target.value)}
//                 ></textarea>
//               </li>
//               <li>
//                 <button type="submit" className="button"> Create
//                   {/* {id ? 'Update' : 'Create'} */}
//                 </button>
//               </li>
//               {/* <li>
//                 <button
//                   type="button"
//                   onClick={() => setModalVisible(false)}
//                   className="button secondary"
//                 >
//                   Back
//                 </button>
//               </li> */}
//             </ul>
//           </form>
//         </div>
//       // )}

//       // <div className="product-list">
//       //   <table className="table">
//       //     <thead>
//       //       <tr>
//       //         <th>ID</th>
//       //         <th>Name</th>
//       //         <th>Price</th>
//       //         <th>Category</th>
//       //         <th>Brand</th>
//       //         <th>Action</th>
//       //       </tr>
//       //     </thead>
//       //     <tbody>
//       //       {products.map((product) => (
//       //         <tr key={product._id}>
//       //           <td>{product._id}</td>
//       //           <td>{product.name}</td>
//       //           <td>{product.price}</td>
//       //           <td>{product.category}</td>
//       //           <td>{product.brand}</td>
//       //           <td>
//       //             <button className="button" onClick={() => openModal(product)}>
//       //               Edit
//       //             </button>{' '}
//       //             <button
//       //               className="button"
//       //               onClick={() => deleteHandler(product)}
//       //             >
//       //               Delete
//       //             </button>
//       //           </td>
//       //         </tr>
//       //       ))}
//       //     </tbody>
//       //   </table>
//       // </div>
//   //   </div>
//   // );
// }
// export default ProductsScreen;