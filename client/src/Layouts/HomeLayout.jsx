import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Img/logo.png'
import Footer from '../Components/Footer'
import { logout } from '../Redux/Slices/AuthSlice'
import { FaCartPlus } from "react-icons/fa";
import { getMyOrders } from '../Redux/Slices/OrderSlice'

const HomeLayout = ({ children }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
    const fullName = useSelector((state) => state?.auth?.data?.fullName)
    const avatar = useSelector((state) => state?.auth?.data?.avatar)
    const role = useSelector((state) => state?.auth?.role)

    useEffect(() => {

    }, [isLoggedIn, role, fullName, avatar])

    const handleLogout = async (e) => {
        e.preventDefault()
        const res = await dispatch(logout())

        if (res?.payload?.success) {
            navigate("/")
        }
    }

    const handleOrder = async () => {
        const res = await dispatch(getMyOrders())

        if (res?.payload) {
            navigate("/order")
        }
    }

    return (
        <>
            <div className=''>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="flex flex-col drawer-content">
                        {/* Navbar */}
                        <div className="w-full bg-light navbar">
                            <div className="flex-none text-black lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 pt-1 mx-4 lg:ml-20"><img className='w-[9rem]' src={logo} alt="" /></div>
                            <div className="flex-none hidden lg:block">
                                <ul className="text-black menu menu-horizontal font-semibold text-[1.02rem]">
                                    {/* Navbar menu content here */}
                                    <li><Link to='/'>Home</Link></li>

                                    {isLoggedIn && role === 'ADMIN' && (
                                        <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                                    )}
                                    {isLoggedIn && role === 'ADMIN' && (
                                        <li><Link to='/product/add'>Add Product</Link></li>
                                    )}

                                    <li><Link to='/about'>About</Link></li>

                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><div onClick={handleOrder}>My orders</div></li>
                                    <div className='ml-6'>
                                        {!isLoggedIn ?
                                            <div className='flex items-center justify-center gap-3 '>
                                                <Link to='/login' className='btn btn-primary text-white btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                    Login
                                                </Link>
                                                <Link to='/register' className='btn btn-secondary btn-sm rounded-md bg-red text-white px-5 text-[1.03rem] tracking-wide'>
                                                    Register
                                                </Link>
                                            </div>
                                            :
                                            <div className='flex items-center justify-center gap-4'>
                                                <Link to='/me' >
                                                    <img src={avatar?.secure_url} alt={`${fullName} img`} className='w-[2.3rem] h-[2.3rem] rounded-full object-cover shadow-[0px_0px_5px_#7479FF]' />
                                                </Link>
                                                <Link to='/logout' onClick={handleLogout} className='btn bg-red text-white btn-secondary btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                    Logout
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                </ul>
                            </div>
                            <FaCartPlus onClick={() => navigate('/cart')} className='ml-4 mr-2 md:mx-8 text-[2.3rem] text-black hover:bg-[#00000010] cursor-pointer hover:text-red p-[8px] rounded-md' />
                        </div>
                        {/* Page content here
                    Content */}
                        {children}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="justify-between min-h-full p-4 font-semibold text-black bg-light menu w-80 text-[1.02rem]">
                            {/* Sidebar content here */}
                            <div>
                                <Link to={'/'} className="m-[0_auto] border-b mb-6 w-full pb-2 flex items-center justify-around border-slate-500"><img className='w-[9.5rem]' src={logo} alt="" /></Link>
                                <li><Link to='/'>Home</Link></li>
                                {isLoggedIn && role === 'ADMIN' && (
                                    <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                                )}
                                {isLoggedIn && role === 'ADMIN' && (
                                    <li><Link to='/product/add'>Add Product</Link></li>
                                )}
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><div onClick={handleOrder}>My orders</div></li>

                            </div>
                            <div className='mb-6'>
                                {!isLoggedIn ?
                                    <div className='flex items-center justify-center gap-3 mt-4 '>
                                        <Link to='/login'
                                            className='btn btn-primary text-white btn-sm rounded-md px-9 text-[1.03rem] tracking-wide'>
                                            Login
                                        </Link>
                                        <Link to='/register'
                                            className='btn btn-secondary bg-red text-white btn-sm rounded-md px-9 text-[1.03rem] tracking-wide'>
                                            Register
                                        </Link>
                                    </div>
                                    :
                                    <div className='flex flex-col gap-2'>
                                        <Link to='/me' className='flex items-center  justify-start p-2 gap-3 hover:text-white rounded-md  w-[16.5rem] ml-3 cursor-pointer bg-gray-800 bg-gray hover:bg-[#0d011c] duration-300'>
                                            <img src={avatar?.secure_url} alt={`${fullName} img`} className='w-[2.3rem] h-[2.3rem] rounded-full object-cover shadow-[0px_0px_6px_#808080]' />
                                            <p className='text-[1.1rem]  capitalize'>{fullName}</p>
                                        </Link>
                                        <Link to='/logout' onClick={handleLogout} className='w-[16.5rem] ml-3 btn btn-secondary btn-sm rounded-md px-9 text-[1.03rem] tracking-wide'>
                                            Logout
                                        </Link>
                                    </div>}
                            </div>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout