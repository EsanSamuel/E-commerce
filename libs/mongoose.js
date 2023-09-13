import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connected to mongodb')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB