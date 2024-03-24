import React, { useEffect, useState } from 'react'
import { TbPercentage } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../Redux/Slices/ProductSlice';
import { addCart } from '../Redux/Slices/CartSlice';
import SkeletonLoading from './SkeletonLoading';
const Card = ({ data }) => {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState()
    const [comboPrice, setComboPrice] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state?.auth)

    const productId = data?._id

    const handleAddToCart = async (e) => {

        if (!user?.isLoggedIn) {
            navigate('/login')
        }
        e.preventDefault();

        const response = await dispatch(addCart({ productId, qnt: count, price }));

        if (response?.payload?.success) {
            navigate('/cart');
        }
    }

    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const inc = () => {
        setCount(count + 1)
    }

    const removeProduct = async (e) => {
        e.preventDefault()
        const response = await dispatch(deleteProduct(productId))

        if (response?.payload?.success) {
            navigate('/')
        }
    }

    const priceAfterDiscount = () => {
        const discountPrice = (data?.discount / 100) * data?.price
        const originalPrice = data?.price - discountPrice
        setComboPrice(originalPrice)
    }

    useEffect(() => {
        setPrice(count * comboPrice)
        priceAfterDiscount()
    }, [setCount, price])

    return (
        <>
            {!data || isNaN(price) ?
                <SkeletonLoading />
                :
                (data?.stock === "no" ?
                    <div className='shadow-[0px_0px_5px_#808080] filter grayscale w-[18rem] min-h-[18.5rem] flex flex-col justify-between rounded-xl overflow-hidden text-black '>
                        <div>
                            <img src={data?.thumbnail?.secure_url} alt="" className='w-[18rem] h-[9rem] object-cover' />
                            <div className=' font-[500] bg-light px-2 p-1 flex items-start sm:items-center gap-1 sm:gap-4' >
                                <div className='flex items-center gap-2'><p>&#8377;{comboPrice}</p>
                                    <strike>{data?.price}</strike></div>
                                <div className='text-[#148d3e] text-[1rem] flex items-center justify-center gap-1'>{data?.discount} <p className='bg-[#148d3e] p-[0.5px] rounded-full'><TbPercentage className='text-white text-[0.8rem]' /></p>
                                    Off</div>

                            </div>
                        </div>
                        <div className=''>

                            <div className='p-2 pb-3'>
                                <h2 className='font-semibold text-red text-[1.2rem]'>{data?.name}</h2>
                                <p className=' text-[0.9rem] leading-[1.15rem]'>{data?.comboDetail}</p>
                            </div>
                            {data?.stock === "no" ?
                                <div className='flex items-center justify-center gap-2 bg-gray'>
                                    <p className='p-1 font-bold'>OUT OF STOCK</p>
                                </div> :
                                <div className='flex items-center justify-between gap-2 bg-gray'>
                                    <div className='flex items-center justify-center border-[1px] rounded-md overflow-hidden ml-6 border-red'>
                                        <button onClick={dec} className=' p-[2px] px-[15px] bg-[#f68822]'> -</button>
                                        <p className='px-4'>{count}</p>
                                        <button onClick={inc} className=' p-[2px] px-[13px] bg-[#f68822]'>+</button>
                                    </div>
                                    <button onClick={handleAddToCart} className=' px-10 w-[40%] p-1 bg-red text-white font-semibold'>Add</button>
                                </div>}
                            {user?.role === 'ADMIN' ?
                                <div className='flex items-center justify-between pt-1 text-white'>
                                    <button className='bg-[#FF6700] hover:bg-[#f94b00] duration-300 p-1 px-6 text-[1.1rem] w-[49%] font-semibold' onClick={() => navigate('/product/edit', { state: { ...data } })}>Update</button>
                                    <button onClick={removeProduct} className='bg-[#FF6700] hover:bg-[#f94b00] duration-300 p-1 w-[49%] text-[1.1rem] font-semibold'>Delete</button>
                                </div>
                                : ""}
                        </div>
                    </div > :
                    <div className='shadow-[0px_0px_5px_#808080] w-[18rem] min-h-[18.5rem] flex flex-col justify-between rounded-xl overflow-hidden text-black '>
                        <div>
                            <img src={data?.thumbnail?.secure_url} alt="" className='w-[18rem] h-[9rem] object-cover' />
                            <div className=' font-[500] bg-light px-2 p-1 flex items-start sm:items-center gap-1 sm:gap-4' >
                                <div className='flex items-center gap-2'><p>&#8377;{comboPrice}</p>
                                    <strike>{data?.price}</strike></div>
                                <div className='text-[#148d3e] text-[1rem] flex items-center justify-center gap-1'>{data?.discount} <p className='bg-[#148d3e] p-[0.5px] rounded-full'><TbPercentage className='text-white text-[0.8rem]' /></p>
                                    Off</div>

                            </div>
                        </div>
                        <div className=''>

                            <div className='p-2 pb-3'>
                                <h2 className='font-semibold text-red text-[1.2rem]'>{data?.name}</h2>
                                <p className=' text-[0.9rem] leading-[1.15rem]'>{data?.comboDetail}</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 bg-gray'>
                                <div className='flex items-center justify-center border-[1px] rounded-md overflow-hidden ml-6 border-red'>
                                    <button onClick={dec} className=' p-[2px] px-[15px] bg-[#f68822]'> -</button>
                                    <p className='px-4'>{count}</p>
                                    <button onClick={inc} className=' p-[2px] px-[13px] bg-[#f68822]'>+</button>
                                </div>
                                <button onClick={handleAddToCart} className=' px-10 w-[40%] p-1 bg-red text-white font-semibold'>Add</button>
                            </div>
                            {user?.role === 'ADMIN' ?
                                <div className='flex items-center justify-between pt-1 text-white'>
                                    <button className='bg-[#FF6700] hover:bg-[#f94b00] duration-300 p-1 px-6 text-[1.1rem] w-[49%] font-semibold' onClick={() => navigate('/product/edit', { state: { ...data } })}>Update</button>
                                    <button onClick={removeProduct} className='bg-[#FF6700] hover:bg-[#f94b00] duration-300 p-1 w-[49%] text-[1.1rem] font-semibold'>Delete</button>
                                </div>
                                : ""}
                        </div>
                    </div >)
            }
        </>
    )
}

export default Card