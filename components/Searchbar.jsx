import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

const Searchbar = () => {
  const { data: session } = useSession()
  return (
    <div className='w-full pb-5 flex gap-3'>
      <input type='search' placeholder='Search...' className='px-5 w-full bg-[#eaeaea] rounded-full h-[40px]' />
      <div>
        {!session ? (
          <button onClick={() => signIn()} className='bg-[#13131a] rounded-full p-2 text-white px-4'>SignIn</button>
        ) : (
          <Image src={session?.user?.image} width={40} height={40} className='rounded-full ' />
        )}

      </div>
    </div>
  )
}

export default Searchbar