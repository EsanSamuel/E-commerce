import connectDB from "@/libs/mongoose"
import Products from "@/models/Products"
import { v2 as cloudinary } from 'cloudinary'
import express from 'express'

export default async function handler(req, res) {
    if (req.method !== 'POST' && req.method !== 'GET' && req.method !== 'DELETE') {
        return res.status(405).end()
    }

    const router = express.Router()

    cloudinary.config({
        cloud_name: 'dirm0bwdw',
        api_key: '244737511899697',
        api_secret: 'LBf0Bay00WC4w1bonkdeapChUO4',
    })

    try {
        if (req.method === 'POST') {
            connectDB()

            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                transformation: [{ width: 1000, height: 752, crop: "scale" }],
            };

            const { name, price, image, details, previousPrice } = req.body

            const photoUrl = await cloudinary.uploader.upload(image, options)

            const posts = await Products.create({
                name,
                price,
                image: photoUrl.url,
                details,
                previousPrice
            })

            return res.status(201).json(posts)
        }

        if (req.method === 'GET') {
            connectDB()
            const posts = await Products.find({})

            return res.status(201).json(posts)
        }

        /*if (req.method === 'DELETE') {
            connectDB()

            const deletePosts = await Products.findByIdAndDelete(req.params.id)

            return res.status(201).json(deletePosts)
        }*/

        router.delete('/:id', async (req, res) => {
            connectDB()

            const Id = req.params.id
            const deletePosts = await Products.findByIdAndDelete(Id)

            return res.status(201).json(deletePosts)
        })

    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
}