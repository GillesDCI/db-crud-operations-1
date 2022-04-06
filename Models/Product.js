import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const Product = model('Product', ProductSchema);

export default Product;