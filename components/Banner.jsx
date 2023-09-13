import React from 'react'
import Img from '@/public/headphones_c_2.webp'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full rounded-[10px] bg-blue-300 sm:p-20 p-10 sm:pt-20 pt-20 xl:flex justify-between'>
      <div>
        <h1 className='font-bold sm:text-[85px] text-[55px] text'>Your Ideal Online Store.</h1>
        <p className='sm:w-[400px] p-3'>Our new products are the best for you and your daily activity.choose your favorites.</p>
        <button className='bg-[#13131a] text-white py-3 px-5 rounded-full mt-8'>See products</button>
      </div>

      <div>
        <Image src={Img} width={500} height={300} className='sm:animate-bounce'/>
      </div>
    </div>
  )
}

export default Banner