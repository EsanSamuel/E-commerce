import React from 'react'
import Image from 'next/image'
import Img from '@/public/headphones_c_2.webp'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { add } from '@/Redux/Cartslice'

const Products = () => {
    const [product, setProduct] = useState([])
    const [activeProduct, setActiveProduct] = useState()
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        const getApi = async () => {
            const response = await axios.get('api/posts')

            setProduct(response.data)
        }
        getApi()
    }, [])

    const fetchData = (index, list) => {
        setActiveProduct(index)
        router.push({
            pathname: '/details/' + list._id,
            query: {
                name: list.name,
                id: list._id,
                image: list.image,
                details: list.details,
                price: list.price

            }
        })
    }

    const deletePosts = async (_id) => {
        await axios.delete(`/api/posts/${_id}`)
    }

    const handleAddCart = (list) => {
        dispatch(add(list))
    }

    return (

        <div className='sm:mt-20 mt-10 grid xl:grid-cols-5 grid-cols-2 w-full gap-3 '>
            {product.length > 0 ? (
                <>
                    {product.map((list, index) => (
                        <div >
                            <div key={list.id} className='border rounded-[20px] flex flex-col items-center' activeProduct={activeProduct == index} >
                                <div className='bg-[#eaeaea] rounded-[20px] w-full flex justify-center items-center' onClick={() => fetchData(index, list)}>
                                    <Image src={list.image} width={200} height={250} />

                                </div>
                                <div className='p-5 w-full rounded-full'>
                                    <div className='flex justify-between pb-3'><h1 className=''>{list.name}</h1>
                                        <AiOutlineShoppingCart className='text-[25px]' onClick={() => handleAddCart(list)} />
                                    </div>
                                </div>
                                <button className='w-full bg-[#13131a] rounded-full p-2 text-white'>${list.price}</button>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className='text-center w-full'>
                    <h1 className='text-center'>Loading Products...</h1>
                </div>
            )}

        </div>


    )
}

export default Products