import React from 'react'

const OrderCard = ({ data }) => {
    const { productName, itemsTotal, quantity, orderDate, orderTime, userId, totalPrice, userName, number, alternate, address, status } = data
    return (
        <>
            {data == {} ?
                <div className='shadow-[0px_0px_5px_#808080] filter grayscale animate-pulse w-[18rem] flex flex-col justify-between items-center rounded-xl overflow-hidden text-black bg-white'>
                    <div className='flex items-center justify-center w-full gap-10 p-1 font-semibold text-white h-[2rem] bg-red'></div>
                    <h1 className='mt-1 text-center rounded-md bg-[#DBDEE3] h-[1.7rem] w-[90%]'></h1>
                    <div className=''>
                        <div className='pb-2 m-2 mx-3 mb-0 items-center flex  flex-col bg-white rounded-md h-[6rem]'>
                            <div className='flex justify-center w-[80%] gap-2 p-[7px] mt-2 font-semibold text-black bg-[#DBDEE3] h-[1.8rem]'></div>
                            <div className='flex justify-center w-[80%] gap-2 p-[7px] mt-2 font-semibold text-black bg-[#DBDEE3] h-[1.8rem]'></div>

                        </div>
                        <div className='w-[18rem] flex flex-col items-center'>
                            <p className='p-2 px-4 text-center w-[90%] h-[3.4rem] rounded-md bg-[#DBDEE3]'></p>

                            <div className='flex justify-center w-full gap-2 p-[7px] mt-2 font-semibold text-black bg-[#DBDEE3] h-[2.1rem]'></div>
                        </div>
                    </div>
                </div > :
                <div className='shadow-[0px_0px_5px_#808080] w-[18rem] flex flex-col justify-between rounded-xl overflow-hidden text-black bg-gray'>
                    <div className='flex items-center justify-center gap-10 p-1 font-semibold text-white bg-red'><p>{orderDate}</p> <p className=''>{orderTime}</p></div>
                    <h1 className='text-center'>Order id: {data?._id}</h1>
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
                        <div>
                            <p className='p-2 px-4 text-center'>Street: {address}, 221005, Varanasi, Uttar Pradesh, India</p>

                            <div className='flex items-center justify-center gap-2 p-[7px] mt-2 font-semibold text-black bg-light'><div className='w-[10px] h-[10px] animate-pulse rounded-full bg-red'></div><p>{status}</p></div>
                        </div>
                    </div>
                </div >}
        </>
    )
}

export default OrderCard
