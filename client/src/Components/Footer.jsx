import React from 'react'
import {
    BsEnvelope,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTelephone,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate()
    const year = new Date().getFullYear()

    return (
        <>
            <footer className='text-black bg-light '>
                <div className='p-[2.5rem_1rem] md:p-[2.5_5rem] flex flex-col gap-8 lg:flex-row sm:justify-around'>
                    <div className='flex flex-col gap-2'>
                        <div className='mb-3'><img className='w-[8rem]' src="" alt="" /></div>
                        {/* <img src="" alt="" /> */}
                        <a href="" className='flex items-center gap-2 text-[0.83rem] font-[400] tracking-wide'><BsEnvelope /><span>healthystudybhu@gmail.com</span></a>
                        <a href="" className='flex items-center gap-2 text-[0.83rem] font-[400] tracking-wide'><BsTelephone /><span>+9140827671</span></a>
                        <div className='flex gap-6 mt-3'>
                            <Link to="" target='_blank' className='text-[17px]'><BsLinkedin /></Link>
                            <Link to="" target='_blank' className='text-[17px]'><BsFacebook /></Link>
                            <Link to="" target='_blank' className='text-[17px]'><BsWhatsapp /></Link>
                            <Link to="" target='_blank' className='text-[17px]'><BsInstagram /></Link>
                            <Link to="" target='_blank' className='text-[17px]'><BsTwitter /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 sm:flex-row sm:justify-around sm:mr-5 md:mr-[5rem] md:gap-[5rem]'>
                        <div className='w-[17rem] '>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>Company</p>
                                <p className='w-[15rem] m-[9px_0] h-[3.4px] bg-[#ff9500] rounded-md'></p>
                            </div>
                            <div className='flex justify-between gap-4 pr-6 mt-6'>
                                <div className='flex flex-col gap-4 '>
                                    <Link to={'/about'} className="text-[0.82rem] text-slate-300">About Us</Link>
                                    <Link to={'/'} className="text-[0.82rem] text-slate-300">FAQ</Link>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <Link to={'/contact'} className="text-[0.82rem] mr-4 text-slate-300">Contact us</Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-[17rem] '>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>Products</p>
                                <p className='w-[15rem] m-[9px_0] h-[3.3px] bg-[#ff9500] rounded-md'></p>
                            </div>
                            <div className='flex justify-between gap-4 pr-6 mt-6'>
                                <div className='flex flex-col gap-4'>
                                    <Link to={'/cart'} className="text-[0.82rem] text-slate-300">Cart</Link>
                                    <Link to={'/order'} className="text-[0.82rem] text-slate-300">My Orders</Link>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <Link to={'/'} className="text-[0.82rem] text-slate-300">Order Combos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center text-[1.05rem] font-[600] p-3 border-t'><span>&#169;</span> {year} | Copyright Healthy Study</div>
            </footer>
        </>
    )
}

export default Footer