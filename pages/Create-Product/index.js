import react, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const index = () => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [details, setDetails] = useState('')
    const [previousPrice, setPreviousPrice] = useState('')

    const handleImageChange = (e) => {
        e.preventDefault()

        const file = e.target.files?.[0]

        if (!file) return

        if (!file.type.includes('image')) {
            alert('Please upload an image')

            return
        }

        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            const result = reader.result

            setImage(result)
        }
    }

    const submit = async () => {
        const response = await axios.post('/api/posts', { image, name, price, details, previousPrice })
        console.log(response)
    }


    return (
        <div className='p-20  h-full'>
            <h1 className='text-center text-[30px]'>Create Products</h1>

            <div className='w-[300px] h-[300px] border border-[#5f5f5f] rounded-[10px] mt-10 text-center '>
                {!image ? (
                    <div>
                        <input onChange={handleImageChange} type='file' className='w-full h-full opacity-0' />
                        <h1 className='mt-20 absolute'>Select Image</h1>
                    </div>
                ) : (
                    <Image src={image} width={300} height={300} />

                )}

            </div>

            <div className='mt-10 space-y-5 flex flex-col gap-4'>
                <label className=''>
                    <input onChange={(e) => setName(e.target.value)} className='w-full border border-[#5f5f5f] rounded p-2 bg-transparent' placeholder='Enter Product name' />
                </label>

                <label className='mt-5'>
                    <input onChange={(e) => setPrice(e.target.value)} className='w-full border border-[#5f5f5f] rounded p-2 bg-transparent' placeholder='Enter Product name' />
                </label>

                <label className=''>
                    <input onChange={(e) => setDetails(e.target.value)} className='w-full border border-[#5f5f5f] rounded p-2 bg-transparent' placeholder='Enter Product name' />
                </label>

                <label className=''>
                    <input onChange={(e) => setPreviousPrice(e.target.value)} className='w-full border border-[#5f5f5f] rounded p-2 bg-transparent' placeholder='Enter Product name' />
                </label>
            </div>
            <button onClick={submit}>Post</button>
        </div>
    )
}

export default index