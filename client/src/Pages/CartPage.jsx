import React, { useEffect } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, removeCartAfterOrder } from '../Redux/Slices/CartSlice'
import CartCard from '../Components/CartCard'
import { IoBagHandle } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { userProfile } from '../Redux/Slices/AuthSlice'
import { getRazorpayId, orderFood, verifyPayment } from '../Redux/Slices/RazorpaySlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { getUserOrder } from '../Redux/Slices/OrderSlice'
import SkeletonLoading from '../Components/SkeletonLoading'
import logoImg from '../assets/Img/logo.png'

const CartPage = () => {
    const cartData = useSelector((state) => state?.cart)
    const userData = useSelector((state) => state?.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function loadCartData() {
        await dispatch(getCart())
    }

    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    const orderDate = `${date}-${month}-${year}`
    const orderTime = `${hour}:${min}`

    const cartItemData = cartData?.cartData?.cartItems

    let totalBill = 0

    cartItemData?.map((res) => {
        totalBill = totalBill + res?.subTotal
    })

    const qnt = cartItemData?.map((res) => {
        return res?.quantity
    })

    const iTotal = cartItemData?.map((res) => {
        return res?.subTotal
    })

    const productName = cartItemData?.map((res) => {
        return res?.product?.name
    })

    const productId = cartItemData?.map((res) => {
        return res?.product?._id
    })

    const cartId = cartData?.cartData?._id

    const orderData = {
        userName: userData?.data?.fullName,
        userId: userData?.data?._id,
        quantity: qnt,
        itemsTotal: iTotal,
        productName: productName,
        productId: productId,
        totalPrice: totalBill,
        address: userData?.data?.address,
        number: userData?.data?.phoneNumber,
        alternate: userData?.data?.alternateNumber,
        orderDate: orderDate,
        orderTime: orderTime,
        status: "Packing"
    }

    const razorpayKey = useSelector((state) => state?.razorpay?.key)
    const order_id = useSelector((state) => state?.razorpay?.orderId)

    // const isPaymentVerified = useSelector((state) => state?.razorpay?.isPaymentsVerified)
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_order_id: "",
        razorpay_signature: ""
    }

    const checkoutHandler = async () => {

        if (userData.data.phoneNumber && userData.data.address) {

            await dispatch(orderFood({ amount: totalBill }))

            const options = {
                key: razorpayKey, // Enter the Key ID generated from the Dashboard
                amount: totalBill * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Snacky", //your business name
                description: "",
                image: logoImg,
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: async function (res) {
                    console.log(res)
                    paymentDetails.razorpay_payment_id = await res.razorpay_payment_id,
                        paymentDetails.razorpay_order_id = await res.razorpay_order_id,
                        paymentDetails.razorpay_signature = await res.razorpay_signature
                    const response = await dispatch(verifyPayment(paymentDetails))
                    if (response?.payload?.success) {
                        toast.success("Order Placed!")
                        dispatch(getUserOrder(orderData))
                        dispatch(removeCartAfterOrder(cartId))
                    }
                    response?.payload?.success ? navigate('/order') : navigate('/order/fail')
                },
                prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    "name": userData?.data?.fullName, //your customer's name
                    "email": userData?.data?.email,
                    "contact": userData?.data?.phoneNumber  //Provide the customer's phone number for better conversion rates 
                },
                notes: {
                    "address": "Snacky Office"
                },
                theme: {
                    "color": "#FC683E"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
        }
        else {
            navigate('/delivery/detail')
        }
    }


    useEffect(() => {
        dispatch(getRazorpayId())
        loadCartData()
    }, [])
    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-start pt-2 bg-white min-h-[80vh]'>
                <h1 className='font-bold border-b-4 border-gray text-red md:text-[2rem] text-[1.5rem]'>Cart</h1>
                {cartItemData?.length == 0 || !cartItemData ?
                    <div className='flex flex-wrap gap-8 my-4 lg:w-[80vw] items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-4 pt-10 my-4 text-black'>
                            <p className='text-[1rem]'> <span className='font-semibold text-[1.1rem] text-red'>OOPS!</span> Nothing in cart</p>
                            <button onClick={() => navigate('/')} className='p-1 px-5 font-semibold text-white rounded-md bg-red'>Add now!</button>
                        </div>
                    </div> :
                    <div className='flex flex-wrap gap-8 mt-4 lg:w-[80vw] items-center justify-center'>
                        {
                            cartItemData?.map((res) => {
                                return <CartCard key={res._id} data={res} cartId={cartId} />
                            })
                        }
                        <div className={`${cartItemData?.length == 0 ? "hidden" : "sticky"} bottom-0 flex items-center justify-center w-full p-3 px-5 mt-10 bg-gray`}>
                            <div className=' bg-light w-[20rem] flex flex-col justify-between rounded-xl overflow-hidden text-black '>
                                <h2 className='p-1 font-semibold text-[1.1rem] bg-transparent'>Bill Summary</h2>
                                <div className='font-[500] bg-white'>
                                    <div className='flex items-center border-[#808080c0] justify-between p-1 mx-3 border-b border-dashed'><p className='flex items-center gap-2 text-[1.1rem]'><IoBagHandle /><span className='text-[0.85rem]'>Item Total</span></p><p className='text-[0.85rem] tracking-wide'>&#8377;{totalBill}</p></div>
                                    <div className='flex items-center border-[#808080c0] justify-between p-1 mx-3 border-b border-dashed'><p className='flex items-center gap-2 text-[1.1rem]'><MdDeliveryDining /><span className='text-[0.85rem]'>Delivery partner fee</span></p><p className='text-[0.85rem] tracking-wide'><strike className="mr-1 font-normal">&#8377;15</strike>FREE</p></div>
                                    <div className='flex items-center border-[#808080c0] justify-between p-1 mx-3 border-t border-dashed mt-1'><p className='flex items-center gap-2 text-[0.98rem]'>Grand Total</p><p className='text-[0.9rem] tracking-wide'>&#8377;{totalBill}</p></div>
                                </div>
                                <button onClick={checkoutHandler} className='w-full p-1 px-5 font-semibold text-white bg-red'>Proceed to order</button>
                            </div >
                        </div>
                    </div>
                }

            </div>
        </HomeLayout>
    )
}
export default CartPage
