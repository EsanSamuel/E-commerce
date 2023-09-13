import Banner from '@/components/Banner'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Searchbar from '@/components/Searchbar'
import Products from '@/components/Products'
import Banner2 from '@/components/Banner2'
import Navbar from '@/components/Navbar'

const index = () => {
  return (
    <div className='xl:flex  p-5 gap-5'>
      <div className=' flex'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Searchbar />
        <Navbar />
        <Banner />
        <Products />
        <Banner2 />
      </div>
      <div>

      </div>
    </div>
  )
}

export default index