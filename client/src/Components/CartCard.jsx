import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem, updateCart } from '../Redux/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
const CartCard = ({ data, cartId }) => {
    const [count, setCount] = useState(data?.quantity)
    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const itemId = data?._id
    const price = data?.product?.price

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUpdateCart = async (e) => {
        e.preventDefault(); // Preventing default form submission

        const response = await dispatch(updateCart({ cartId, qnt: count, itemId, price }));

        if (response?.payload?.success) {
            navigate('/cart');
        }
        location.reload()
    }

    const handleRemoveItem = async (e) => {
        e.preventDefault(); // Preventing default form submission

        const response = await dispatch(deleteCartItem({ cartId, itemId }));

        if (response?.payload?.success) {
            navigate('/cart');
        }
        location.reload()
    }


    const inc = () => {
        setCount(count + 1)
    }

    useEffect(() => {

    }, [data, count])

    console.log(data)
    return (
        <div className='shadow-[0px_0px_5px_#808080] w-[18rem] min-h-[18.5rem] flex flex-col justify-between rounded-xl overflow-hidden text-black '>
            <div>
                <img src={data?.product?.thumbnail?.secure_url} alt="" className='w-[18rem] h-[9rem] object-cover' />
                <div className=' font-[500] bg-light pl-2 flex items-center justify-between gap-1 sm:gap-4' >
                    <div className='flex items-center gap-2'><p>&#8377;{data?.subTotal} <span className='font-normal text-[0.9rem]'>for {data?.quantity} items</span></p>
                    </div>
                    <button onClick={handleRemoveItem} className='p-2 bg-gray text-[1.5rem] hover:text-red'><MdDelete /></button>

                </div>
            </div>
            <div className=''>

                <div className='p-2 pb-3'>
                    <h2 className='font-semibold text-red text-[1.2rem]'>{data?.product?.name}</h2>
                    <p className=' text-[0.9rem] leading-[1.15rem]'>{data?.product?.comboDetail}</p>
                </div>
                <div className='flex items-center justify-between gap-2 bg-gray'>
                    <div className='flex items-center justify-center border-[1px] rounded-md overflow-hidden ml-6 border-red'>
                        <button onClick={dec} className=' p-[2px] px-[15px] bg-[#f68822]'> -</button>
                        <p className='px-4'>{count}</p>
                        <button onClick={inc} className=' p-[2px] px-[13px] bg-[#f68822]'>+</button>
                    </div>
                    <button onClick={handleUpdateCart} className=' px-5 w-[40%] p-1 bg-red text-white font-semibold'>Update</button>
                </div>
            </div>
        </div >
    )
}

export default CartCard