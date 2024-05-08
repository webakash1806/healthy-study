import React, { useEffect } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../Redux/Slices/OrderSlice'
import AdminOrderCard from '../../Components/AdminOrderCard'
const Dashboard = () => {
    const orderData = useSelector((state) => state?.order?.orderData)
    const dispatch = useDispatch()


    function reverseArr(input) {
        var ret = new Array;
        for (var i = input.length - 1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }

    let sortedOrderData = reverseArr(orderData)



    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(getOrder())
        }, 2000);

        return () => {
            clearTimeout(timeOut)
        }

    }, [orderData])
    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-center pt-2 pb-10 bg-white min-h-fit'>
                <h1 className='font-bold border-b-4 border-gray text-red md:text-[2rem] text-[1.5rem]'>All orders</h1>
                <div className='flex flex-col gap-8 mt-4 lg:w-[80vw] items-center justify-center'>
                    {
                        sortedOrderData?.map((res, ind) => {
                            return <AdminOrderCard key={ind + 1} data={res} />
                        })
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default Dashboard
