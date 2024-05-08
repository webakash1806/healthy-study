import React, { useState } from 'react'
import {  toast } from 'react-toastify';
import { BsPersonFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import HomeLayout from '../../Layouts/HomeLayout'
import { changePassword } from '../../Redux/Slices/AuthSlice'

const ChangePassword = () => {

    const userData = useLocation().state

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target
        setPasswordData({
            ...passwordData,
            [name]: value
        })
    }

    async function login(e) {
        e.preventDefault()
        const { oldPassword, newPassword } = passwordData
        if (!oldPassword || !newPassword) {
            return toast.error('Please fill all the fields!')
        }

        if (!newPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            return toast.error('New password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!')
        }

        const response = await dispatch(changePassword(passwordData))
        console.log(response)

        if (response?.payload?.status)
            navigate('/LMS-Client/me');

        setPasswordData({
            oldPassword: "",
            newPassword: ""
        })

    }

    return (
        <HomeLayout>
            <div className='min-h-[85vh] flex items-center justify-center pb-20 text-black bg-white'>
                <form noValidate onSubmit={login} action="" className='relative h-fit py-8 flex flex-col items-center justify-center gap-[9px] mt-12 bg-gray p-4 rounded-lg rounded-tl-none shadow-md shadow-red'>
                    <div className='flex items-center bg-light justify-between w-fit p-2 gap-3 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                        <BsPersonFill className='text-red text-[1.3rem]' />
                        <h1 className='tracking-wide'>Change Password</h1>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="fullName" className='text-[#a6b0bb] font-semibold text-[0.85rem] tracking-wide'>Full Name
                        </label>
                        <input type="text" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='fullName'
                            id='fullName'
                            disabled
                            defaultValue={userData.fullName} />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="oldPassword" className='text-[#a6b0bb] font-semibold text-[0.85rem] tracking-wide'>Old Password
                        </label>
                        <input type="password" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='oldPassword'
                            id='oldPassword'
                            placeholder='Enter old password...'
                            onChange={handleUserInput}
                            value={passwordData.oldPassword} />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="newPassword" className='text-[#a6b0bb] font-semibold text-[0.85rem] tracking-wide'>New Password
                        </label>
                        <input type="password" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='newPassword'
                            id='newPassword'
                            placeholder='Enter new password...'
                            onChange={handleUserInput}
                            value={passwordData.newPassword} />
                    </div>
                    <button type='submit' className='bg-red border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200 mt-2 text-white w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Change Password</button>


                </form>

            </div>
        </HomeLayout>
    )
}

export default ChangePassword