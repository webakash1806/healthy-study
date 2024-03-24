import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import HomeLayout from '../Layouts/HomeLayout';

const Contact = () => {
    return (
        <HomeLayout>
            <div className='min-h-screen  flex flex-col justify-between w-[100%] overflow-x-hidden bg-white dark:bg-darkBg text-black dark:text-white'>
                <div className=' w-full shadow-[0px_0px_40px_#1d037b80] bg-[#09031f] h-fit pb-8 flex flex-col items-center justify-center bg-no-repeat bg-cover contact-img'
                >
                    <p className='py-[1rem] text-[2.4rem] bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)] md:text-[3rem]  font-mono font-bold text-center'>Let's have a talk</p>
                    <div className='text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 text-[17px] w-fit'>
                        <a href={`tel:+916207234759`} className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold  gap-2 bg-white '>
                            <FaPhoneAlt className='text-[#1d7f20] text-[20px]' />
                            <p>+91 9876543210</p>
                        </a>
                        <a href={`mailto:itsakash18.06@gmail.com`} className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                            <IoMdMail className='text-[#EA4335] text-[20px]' />
                            <p>itsakash18.06@gmail.com</p>
                        </a>
                        <a target={`_blank`} href="https://github.com/webakash1806" className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                            <FaWhatsapp className='text-[#161a16] text-[20px]' />
                            <p>+91 1234567890</p>
                        </a>
                        <a target={`_blank`} href="https://www.linkedin.com/in/itsakash18/" className='w-[16rem] cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold gap-2 bg-white '>
                            <FaLinkedin className='text-[#3766ff] text-[20px]' />
                            <p>itsakash18</p>
                        </a>
                    </div>
                    <form action="https://formspree.io/f/myyqbdzv" method='POST' className='flex flex-col items-center justify-center w-screen gap-4 pt-6 text-white'>
                        <h2 className='text-[1.5rem] font-bold mb-2 border-b bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Pitch us</h2>
                        <div>
                            <p className='text-[18px]'>hello,</p>
                            <p>
                                my name is
                                <input type="text"
                                    name='username'
                                    placeholder='your name'
                                    autoComplete='off'
                                    required className='bg-transparent border-b p-[0.5px_5px] w-[14rem] text-center text-[17px] text-[#17fbd1] m-1 outline-none' />
                                <br /> and <br /> my e-mail is
                                <input type="email" name='email'
                                    placeholder='your email'
                                    autoComplete='off'
                                    required className='bg-transparent border-b p-[0.5px_5px] w-[14rem] text-center text-[17px] text-[#17fbd1] m-1 outline-none' />
                                <br /> and
                                <br />I would like to discuss about
                                <br />
                                <textarea name="message" placeholder='Write Message...'
                                    id="" cols="35" rows="5"
                                    className='bg-transparent resize-none border p-[0.5px_5px] text-center text-[17px] text-[#17fbd1] m-1 outline-none'></textarea>
                            </p>
                            <div className='p-[1.2px] px-[1.4px] cursor-pointer rounded-md bg-gradient-to-r  from-[#35C8F2] to-[#27B872] w-fit mt-4'>
                                <input type="submit" value="Send" className='cursor-pointer bg-gradient-to-r border-[2.3px] border-[#0C1015] px-10 from-[#35C8F2] to-[#27B872] duration-300 text-[#000] w-fit rounded-md p-[5px] font-semibold text-[1.05rem]' />
                            </div>
                        </div>
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3165540293458!2d84.3656415749541!3d24.750333349656273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cfdcad948d435%3A0x9489d29d4efc8c6e!2sMG%20Rd%2C%20Aurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1696148532454!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </HomeLayout>
    )
}

export default Contact