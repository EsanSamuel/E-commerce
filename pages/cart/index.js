import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '@/Redux/Cartslice'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const index = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const { data: session } = useSession()
    return (
        <div className='p-20'>
            <h1 className='text-[30px] font-bold'>Hello, {session?.user?.name}, <br />Here are your Cart items.</h1>
            {cartItems.map((list) => (
                <div>
                    <Image src={list.image} width={200} height={200} />
                    <h1>{list.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default index