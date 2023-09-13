import React from 'react'
import { BiSolidStore, BiLogOut } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch, AiOutlineHistory } from 'react-icons/ai'
import { BsPersonPlus } from 'react-icons/bs'
import { signOut, useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Sidebar = () => {
    const { data: session } = useSession()
    const item = useSelector((state) => state.cart)
    return (
        <div className='bg-white p-5 h-auto box rounded xl:flex hidden'>
            <ul className='flex flex-col items-center p-3'>

                <li className=' fixed'>
                    <BiSolidStore className='text-[25px]' />
                </li>


                <div className='mt-20 space-y-10 fixed '>
                    <li className=''>
                        <RxDashboard className='text-[25px]' />
                    </li>
                    <li className=''>
                        <Link href='/cart' className='flex gap-[-10px] items-center'><AiOutlineShoppingCart className='text-[25px]' />
                            <div className='bg-red-500 rounded-full text-white p-1 w-[22px] h-[22px] text-center text-[10px] absolute ml-4'>
                                <h1>{item.length}</h1>
                            </div>
                        </Link>
                    </li>
                    <li className=''>
                        <AiOutlineHeart className='text-[25px]' />
                    </li>
                    <li className=''>
                        <AiOutlineSearch className='text-[25px]' />
                    </li>
                    <li className=''>
                        <BsPersonPlus className='text-[25px]' />
                    </li>
                    <li className=''>
                        <AiOutlineHistory className='text-[25px]' />
                    </li>

                    <div className='fixed bottom-10'>
                        <li className=''>
                            <BiLogOut className='text-[25px]' onClick={() => signOut()} />
                        </li>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar