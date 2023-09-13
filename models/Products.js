import mongoose from 'mongoose'

const Products = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    details: { type: String, required: true },
    previousPrice: { type: String, required: true }
})

const ProductsSchema = mongoose.models.Products || mongoose.model('Products', Products)

export default ProductsSchema