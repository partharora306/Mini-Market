import express from 'express';
// import Product from '../models/productModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  // const category = req.query.category ? { category: req.query.category } : {};
  // const searchKeyword = req.query.searchKeyword
  //   ? {
  //       name: {
  //         $regex: req.query.searchKeyword,
  //         $options: 'i',
  //       },
  //     }
  //   : {};
  // const sortOrder = req.query.sortOrder
  //   ? req.query.sortOrder === 'lowest'
  //     ? { price: 1 }
  //     : { price: -1 }
  //   : { _id: -1 };
  const products = await Product.find({});
  res.send(products);
});

router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    des: req.body.des,
    countInStock: req.body.countInStock
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});
export default router;