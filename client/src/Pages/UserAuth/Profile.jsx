import React, { useEffect } from 'react'
import {  toast } from 'react-toastify';
import { BsPersonCircle, BsPersonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import HomeLayout from '../../Layouts/HomeLayout'

const Profile = () => {

    const navigate = useNavigate()
    const userData = useSelector((state) => state?.auth?.data)
    console.log(userData)
    const { avatar, email, fullName, address, phoneNumber, alternateNumber } = userData



    useEffect(() => {
        userData
    }, [])

    return (
        <HomeLayout>
            <div className='min-h-[85vh] flex pt-[2rem] lg:pt-[4rem] justify-center text-black bg-gradient-to-b from-white to-light'>
                <form noValidate className='relative h-fit flex flex-col md:flex-row md:gap-[2rem] items-center justify-center gap-[9px] my-8 bg-gray p-5 sm:p-10 rounded-lg rounded-tl-none shadow-md shadow-red'>
                    <div className='flex items-center bg-light justify-between w-fit p-2 gap-3 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                        <BsPersonFill className='text-red text-[1.3rem]' />
                        <h1 className='tracking-wide'>Profile</h1>
                    </div>
                    <div className='flex gap-[12px] flex-col items-center md:items-start justify-start'>
                        <div className='md:mb-4'>
                            {
                                avatar?.secure_url ? <img src={avatar?.secure_url} alt="" className='w-[6rem] h-[6rem] border shadow-sm shadow-[#6D75DE] rounded-full' /> :
                                    <BsPersonCircle className='w-[6rem] h-[6rem] ' />
                            }
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="fullName" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Full Name
                            </label>
                            <input type="text" readOnly disabled
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='fullName'
                                id='fullName'
                                placeholder='Enter Full Name...'
                                value={fullName}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="email" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Email
                            </label>
                            <input type="email"
                                readOnly disabled
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                name='email'
                                id='email'
                                placeholder='Enter Email...'
                                value={email}
                            />
                        </div>
                    </div>

                    <div className='flex gap-[9px] flex-col items-center justify-center'>

                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="phoneNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Phone Number
                            </label>
                            <input type="text" readOnly disabled
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                placeholder='Update profile to add'
                                name='phoneNumber'
                                value={phoneNumber}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="alternateNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Alternate Number
                            </label>
                            <input type="text" readOnly disabled
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                placeholder='Update profile to add'
                                name='alternateNumber'
                                value={alternateNumber}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[0.5px]">
                            <label htmlFor="alternateNumber" className='text-[#55595d] font-semibold text-[0.85rem] tracking-wide'>Address
                            </label>
                            <textarea
                                className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                type="text" name='address' id='address' placeholder='Update profile to add'
                                readOnly disabled
                                value={`Street: ${address}, 221005, Varanasi, Uttar Pradesh, India`} />
                        </div>

                        <Link to={'/profile/edit'} className='border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200 text-center bg-red text-white mt-2 w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Edit Profile</Link>
                        <button onClick={() => navigate('/changePassword', { state: { ...userData } })} className='border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200 text-center bg-red text-white mt-2 w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Change Password</button>
                        {/* {userData?.subscription?.status === 'active' && role === 'USER' ?
                            <Link onClick={handleCancellation} className='bg-[#FFB827] hover:bg-[#fbb66d] text-center duration-300 mt-2 text-[#000] w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Unsubscribe</Link> : ""} */}
                    </div>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Profile