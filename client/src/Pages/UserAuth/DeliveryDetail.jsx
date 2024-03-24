import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../../Layouts/HomeLayout'
import { addDeliveryData, editProfile } from '../../Redux/Slices/AuthSlice';

const DeliveryDetail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [deliveryData, setDeliveryData] = useState({
        address: "",
        phoneNumber: "",
        alternateNumber: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target
        setDeliveryData({
            ...deliveryData,
            [name]: value
        })
    }

    const userId = useSelector((state) => state?.auth?.data?._id)

    console.log(userId)

    async function updateProfile(e) {
        e.preventDefault()

        if (!deliveryData.address || !deliveryData.phoneNumber || !deliveryData.alternateNumber) {
            return toast.error("All fields are required!")
        }
        const formData = new FormData()

        formData.append('address', await deliveryData.address)
        formData.append('phoneNumber', await deliveryData.phoneNumber)
        formData.append('alternateNumber', await deliveryData.alternateNumber)

        const response = await dispatch(addDeliveryData([userId, deliveryData]))

        if (response?.payload?.success)
            navigate('/cart')


    }

    useEffect(() => {
        toast('Add delivery details...')
    }, [])
    return (
        <HomeLayout>
            <div className='min-h-[80vh] flex items-center justify-center pb-20 text-black bg-white'>
                <form noValidate onSubmit={updateProfile} action="" className='relative h-fit py-8 flex flex-col items-center justify-center gap-[9px] mt-12 bg-gray p-4 rounded-lg rounded-tl-none shadow-md shadow-red'>
                    <div className='flex items-center bg-light justify-between w-fit p-2 gap-3 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                        <BsPersonFill className='text-red text-[1.3rem]' />
                        <h1 className='tracking-wide'>Delivery Details</h1>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px] text-black">
                        <label htmlFor="address" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Address (only for BHU Campus)
                        </label>
                        <input type="text" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='address'
                            id='address'
                            placeholder='Enter street only'
                            onChange={handleUserInput}
                            value={deliveryData.address} />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px] text-black">
                        <label htmlFor="phoneNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Phone number
                        </label>
                        <input type="number" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Enter phone number...'
                            onChange={handleUserInput}
                            value={deliveryData.phoneNumber} />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[0.5px] text-black">
                        <label htmlFor="alternateNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Phone number
                        </label>
                        <input type="number" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='alternateNumber'
                            id='alternateNumber'
                            placeholder='Enter alternate phone number...'
                            onChange={handleUserInput}
                            value={deliveryData.alternateNumber} />
                    </div>
                    <button type='submit' className='bg-red border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200 mt-2 text-white w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Add</button>
                </form>

            </div>
        </HomeLayout>
    )
}

export default DeliveryDetail