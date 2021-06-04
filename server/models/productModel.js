const prodctSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    des: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true }
  });
  
  const productModel = mongoose.model('Product', prodctSchema);
  
  export default productModel;