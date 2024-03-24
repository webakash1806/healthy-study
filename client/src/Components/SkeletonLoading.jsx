import React from 'react'
import { FaFileImage } from "react-icons/fa";
const SkeletonLoading = () => {
    return (
        <div className='shadow-[0px_0px_5px_#808080] animate-pulse w-[18rem] min-h-[18.5rem] flex flex-col justify-between rounded-xl overflow-hidden text-black '>
            <div className='w-full flex items-center justify-center h-[9rem] bg-[#4b515349]'>
                <FaFileImage className='text-white text-[2rem]' />
            </div>
            <div className=' font-[500] bg-light m-1 rounded-md p-1 bg-[#4b515349] h-4 flex items-start sm:items-center gap-1 sm:gap-4' >
            </div>
            <div className='w-[8rem] h-5 rounded-lg bg-[#4b515349] mx-4 m-2'></div>
            <div className='w-[16rem] h-3 rounded-lg bg-[#4b515349] mx-4'></div>
            <div className='w-[14rem] h-3 rounded-lg bg-[#4b515349] mx-4 m-2'></div>
            <div className='w-[8rem] h-3 rounded-lg bg-[#4b515349] mx-4 mb-4'></div>
            <div className='flex'>
                <div className='w-[9rem] h-8 rounded-lg bg-[#4b515349] mr-1 m-2'></div>
                <div className='w-[8rem] h-8 rounded-lg bg-[#4b515349] ml-1 m-2'></div>
            </div>
        </div >
    )
}

export default SkeletonLoading
