import React, { useState } from 'react'
import {  toast } from 'react-toastify';
import { BsPersonCircle, BsPersonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HomeLayout from '../../Layouts/HomeLayout'
import { editProfile, userProfile } from '../../Redux/Slices/AuthSlice'

const EditProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [image, setImage] = useState('')


    const userData = useSelector((state) => state?.auth?.data)
    const { avatar, email, fullName, address, phoneNumber, alternateNumber } = userData

    const [data, setData] = useState({
        fullName: fullName,
        address: address,

        phoneNumber: phoneNumber,
        alternateNumber: alternateNumber,

        avatar: avatar?.secure_url,
        userId: useSelector((state) => state?.auth?.data?._id)
    })

    console.log(data)

    function imgUpload(e) {
        e.preventDefault()
        const uploadedImg = e.target.files[0]

        if (uploadedImg) {
            setData({
                ...data,
                avatar: uploadedImg
            })
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImg)
            fileReader.addEventListener('load', function () {
                setImage(this.result)
            })
        }
    }

    function handleUpdateProfile(e) {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    async function updateProfile(e) {
        e.preventDefault()

        if (!data?.fullName) {
            return toast.error("Full name is required!")
        }


        if (!data?.fullName.length > 6) {
            return toast.error("Name cannot be of less than 6 characters!")
        }

        const formData = new FormData()

        formData.append('fullName', data.fullName)
        formData.append('avatar', data.avatar)
        formData.append('address', data.address)
        formData.append('phoneNumber', data.phoneNumber)
        formData.append('alternateNumber', data.alternateNumber)

        const response = await dispatch(editProfile([data.userId, formData]))

        await dispatch(userProfile())

        if (response?.payload?.success)
            navigate('/me')


    }

    return (
        <HomeLayout>
            <div className='min-h-[90vh] flex pt-[2rem] lg:pt-[4rem] justify-center  bg-gradient-to-b text-black from-white to-light'>
                <form noValidate onSubmit={updateProfile} className='relative h-fit flex flex-col md:flex-row md:gap-[2rem] items-center justify-center gap-[9px] my-8 bg-gray p-5 sm:p-10 rounded-lg rounded-tl-none shadow-md shadow-red'>
                    <div className='flex items-center bg-light justify-between w-fit p-2 gap-3 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.55rem] text-[1.02rem]'>
                        <BsPersonFill className='text-red text-[1.3rem]' />
                        <h1 className='font-semibold tracking-wide'>Update Profile</h1>
                    </div>
                    <div className='flex gap-[12px] flex-col items-center md:items-start justify-start'>
                        <div className='md:mb-4'>
                            <label htmlFor="image_uploads" className='cursor-pointer'>
                                {
                                    image ? <img src={image} alt="" className='w-[3.8rem] h-[3.8rem] border-[2px] border-[#FFB827] rounded-full' /> :
                                        <img src={avatar?.secure_url} alt="" className='w-[3.8rem] h-[3.8rem] border-[2px] border-[#FFB827] rounded-full' />

                                }
                            </label>
                            <input onChange={imgUpload} type="file" id='image_uploads' name='image_uploads' className='hidden' accept='.jpg, .jpeg, .png, .svg' />

                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="fullName" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Full Name
                            </label>
                            <input type="text" required
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='fullName'
                                id='fullName'
                                placeholder='Enter Full Name...'
                                onChange={handleUpdateProfile}
                                value={data.fullName}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="email" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Email
                            </label>
                            <input type="email"
                                readOnly disabled
                                className='min-w-[17rem] bg-[#80808026] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none  text-[0.95rem] tracking-wide resize-none'
                                name='email'
                                id='email'
                                value={email}
                            />
                        </div>
                    </div>

                    <div className='flex gap-[9px] flex-col items-center justify-center'>

                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="phoneNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Phone Number
                            </label>
                            <input type="number" required
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='phoneNumber'
                                id='phoneNumber'
                                placeholder='Enter Number...'
                                onChange={handleUpdateProfile}
                                value={data?.phoneNumber}
                            />
                        </div>

                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="alternateNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Alternate Number
                            </label>
                            <input type="number" required
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='alternateNumber'
                                id='alternateNumber'
                                placeholder='Enter Number...'
                                onChange={handleUpdateProfile}
                                value={data?.alternateNumber}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="address" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Address (Enter Only Street)
                            </label>
                            <input type="text" required
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='address'
                                id='address'
                                placeholder='Enter only Street...'
                                onChange={handleUpdateProfile}
                                value={data?.address}
                            />
                        </div>
                        <button type='submit' className='bg-red border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200 mt-2 text-white w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Update</button>


                    </div>
                </form>

            </div>
        </HomeLayout>
    )
}

export default EditProfile