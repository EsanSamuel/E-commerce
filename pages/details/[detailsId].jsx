import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHeart ,AiOutlineShoppingCart} from 'react-icons/ai'

const ProductDetails = () => {
    const router = useRouter()

    const { name, image, price, details } = router.query
    return (
        <div className='p-5 flex w-full'>
            <div className=' flex h-screen'>
                <Sidebar />
            </div>

            <div className='sm:p-20 '>
            <BiArrowBack className='text-[40px] pb-5'/>
                <div className='sm:flex justify-center gap-20 w-full items-center'>
                    <div className='w-full'>
                        <Image src={image} width={500} height={800} alt='' className='border rounded-[20px] bg-[#eaeaea]' />
                    </div>
                    <div className='space-y-5 w-full sm:mt-0 mt-10'>
                        <h1 className='text-[50px] font-bold'>{name}</h1>
                        <h1 className='text-[30px] mt-5 font-bold'>${price}</h1>
                        <h1 class>{details}</h1>
                        <div className='flex gap-3'><button className='bg-[#13131a] p-2 text-white rounded-full w-full'>Buy ${price}</button>
                        <AiOutlineHeart className='text-[45px] border rounded-[10px] p-2'/>
                        <AiOutlineShoppingCart className='text-[45px] border rounded-[10px] p-2'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
