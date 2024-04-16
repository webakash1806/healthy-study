import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { useNavigate } from 'react-router-dom'

const Failed = () => {

    const navigate = useNavigate()
    return (
        <HomeLayout>
            <div className='h-[80vh] bg-white flex flex-col items-center justify-center gap-1 text-black'>
                <p className='text-[1.3rem] font-semibold'>Order Failed!</p>
                <button className='bg-[#FF6700] hover:bg-[#f94b00] duration-300 p-1 px-6 text-[1.1rem] text-white w-[25%] rounded font-semibold mt-3' onClick={() => navigate('/cart')}>Try again!</button>
            </div>
        </HomeLayout>
    )
}

export default Failed
