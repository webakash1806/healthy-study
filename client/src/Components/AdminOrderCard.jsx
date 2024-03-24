import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { updateOrder } from '../Redux/Slices/OrderSlice';

const AdminOrderCard = ({ data }) => {
    const { productName, itemsTotal, quantity, orderDate, orderTime, userId, totalPrice, userName, number, alternate, address, status } = data

    const dispatch = useDispatch()

    const handleActionOut = async () => {
        dispatch(updateOrder({ id: data?._id, status: "Out For Delivery" }))
        location.reload();
    }

    const handleActionDelivered = async () => {
        dispatch(updateOrder({ id: data?._id, status: "Delivered" }))
        location.reload();
    }

    return (
        <div className='shadow-[0px_0px_5px_#808080] min-w-[19rem] flex flex-col justify-between rounded-xl overflow-hidden text-black bg-gray'>
            <div className='flex items-center justify-center gap-10 p-1 font-semibold text-white bg-red'><p>{orderDate}</p> <p className=''>{orderTime}</p></div>
            <h1 className='text-center text-[1.2rem]'>{userName}</h1>
            <div className='flex items-center justify-around'><p>{number}</p>||<p>{alternate}</p></div>
            <div className=''>
                <div className='pb-2 m-2 mx-3 mb-0 bg-white rounded-md'>
                    <div className='flex items-center border-[#808080c0] justify-between p-2 pb-3 mx-3 mr-10'>
                        <div>      {productName?.map((res, ind) => <h2 key={ind + 1} className='font-semibold capitalize text-red text-[1.1rem]'>{res}</h2>)}
                        </div>
                        <div className='flex flex-col justify-between gap-[9px] mt-[4px] '>
                            {quantity?.map((res, ind) => <p key={ind + 1} className=' text-[0.9rem] leading-[1.15rem]'>{res}</p>)}
                        </div>
                        <div className='flex flex-col justify-between gap-[9px] mt-[4px]'>
                            {itemsTotal?.map((res, ind) => <p key={ind + 1} className=' text-[0.9rem] leading-[1.15rem]'>{res}</p>)}
                        </div>
                    </div>
                    <div className='flex items-center pr-9 border-[#808080c0] justify-between p-1 mx-3 border-y border-dashed mt-1'><p className='flex items-center gap-2 text-[0.98rem]'>Grand Total</p><p className='text-[0.9rem] tracking-wide'>&#8377;{totalPrice}</p></div>
                </div>
                <div className=''>
                    <p className='p-2 px-4 text-center'>Street: {address}, 221005, Varanasi, Uttar Pradesh, India</p>
                    <div className='flex items-center justify-center gap-2 p-[7px] mt-2 font-semibold text-black bg-light'><div className='w-[10px] h-[10px] animate-pulse rounded-full bg-red'></div><p>{status}</p></div>
                    <div className='flex items-center justify-around p-1 text-[1.1rem] px-4'><p>Action</p><MdDeliveryDining onClick={handleActionOut} className='p-1 rounded-sm bg-red cursor-pointer text-[1.8rem] text-white ml-10' /><FaRegCheckCircle onClick={handleActionDelivered} className='p-[5px] rounded-sm bg-red text-[1.8rem] cursor-pointer text-white' /></div>
                </div>
            </div>
        </div >
    )
}

export default AdminOrderCard
