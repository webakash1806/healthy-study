import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../Layouts/HomeLayout'
import OrderCard from '../Components/OrderCard'
import { getMyOrders } from '../Redux/Slices/OrderSlice'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
    const orderData = useSelector((state) => state?.order?.userOrderData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(orderData)

    function reverseArr(input) {
        var ret = new Array;
        for (var i = input.length - 1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }

    let sortedOrderData = reverseArr(orderData)



    useEffect(() => {
        dispatch(getMyOrders())
    }, [])
    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-start pt-2 pb-10 bg-white min-h-[80vh]'>
                <h1 className='font-bold border-b-4 border-gray text-red md:text-[2rem] text-[1.5rem]'>My orders</h1>
                {orderData?.length == 0 || !orderData ?
                    <div className='flex flex-col gap-8 mt-1 lg:w-[80vw] items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-4 pt-10 my-4 text-black'>
                            <p className='text-[1rem]'> <span className='font-semibold text-[1.1rem] text-red'>OOPS!</span> No order placed till now</p>
                            <button onClick={() => navigate('/')} className='p-1 px-5 font-semibold text-white rounded-md bg-red'>Order now</button>
                        </div>
                    </div> :
                    <div className='flex flex-col gap-8 mt-1 lg:w-[80vw] items-center justify-center'>

                        {sortedOrderData?.map((res, ind) => {
                            return <OrderCard key={res._id} data={res} index={ind} />
                        })}

                    </div>}
            </div>
        </HomeLayout>
    )
}

export default OrderPage
