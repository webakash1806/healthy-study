import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import uploadImg from '../../assets/Img/logo.png'
import HomeLayout from '../../Layouts/HomeLayout'
import { updateProduct } from '../../Redux/Slices/ProductSlice'

const UpdateProduct = () => {

    const productData = useLocation().state
    const productId = productData?._id
    console.log(productId)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: productData?.name,
        price: productData?.price,
        discount: productData?.discount,
        comboDetail: productData?.comboDetail,
        stock: productData?.stock,
        thumbnail: productData?.thumbnail,
        productImage: productData?.thumbnail?.secure_url
    })


    function getProductImage(e) {
        e.preventDefault()

        const uploadedImage = e.target.files[0]

        console.log(uploadedImage)

        if (uploadedImage) {
            const fileReader = new FileReader()
            const res = fileReader.readAsDataURL(uploadedImage)
            console.log(res)
            fileReader.addEventListener('load', function () {
                setInput({
                    ...input,
                    productImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    }

    function handleProductInput(e) {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const addProduct = async (e) => {
        e.preventDefault()

        const { name, thumbnail, price, discount, comboDetail, stock } = input

        if (!name || !thumbnail || !price || !discount || !comboDetail || !stock) {
            return toast.error("Please fill all fields!")
        }

        let formData = new FormData()
        formData.set('name', name)
        formData.set('thumbnail', thumbnail)
        formData.set('price', price)
        formData.set('discount', discount)
        formData.set('comboDetail', comboDetail)
        formData.set('stock', stock)

        const data = [productId, formData]

        const response = await dispatch(updateProduct(data))

        if (response?.payload?.success) {
            navigate('/')

        }

    }

    return (
        <HomeLayout>
            <div className='flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-white to-light p-10 md:px-1'>
                <form onSubmit={addProduct}
                    className='relative flex flex-col items-center justify-center gap-5 p-4 mt-8 text-black rounded-lg rounded-tl-none bg-gray sm:p-12 sm:pt-6 md:p-10 md:px-5 md:justify-between md:items-start md:flex-row lg:gap-10 md:grid-cols-2 lg:px-8 '
                >
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center bg-light font-semibold justify-between w-fit p-2 gap-6 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                            <Link onClick={() => navigate(-1)}
                                className='p-1 rounded-sm rounded-tl-lg bg-red'>
                                <BsArrowLeft />
                            </Link>
                            <h1 className='tracking-wide'>Update <span className='text-red font-[500]'>Product</span></h1>
                        </div>
                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem]'>
                            <label htmlFor="thumbnail" className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem]  tracking-wide'>
                                <p className='mb-1'>Upload Product image</p>
                                {
                                    input.productImage ?

                                        (
                                            <img src={input.productImage} alt="" className='border w-[17.5rem] sm:w-[23rem] sm:h-[12rem] md:w-[43vw] lg:w-[28rem] h-[9rem] rounded object-cover' />

                                        )
                                        : <img src={uploadImg} alt="" className='border w-[17.5rem] sm:w-[23rem] sm:h-[12rem] md:w-[43vw] lg:w-[28rem] h-[9rem] rounded object-cover' />
                                }
                            </label>
                            <input onChange={getProductImage} type="file" id='thumbnail' name='thumbnail' className='cursor-pointer border border-[#2d3a4b] p-2 focus:border-[#745FDC] w-full  outline-none' accept='.jpg, .jpeg, .png, .svg' />
                        </div>
                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem] flex flex-col items-start gap-1'>
                            <label htmlFor="name"
                                className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem] tracking-wide'
                            >Combo Name</label>
                            <input
                                className='w-full rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide'
                                type="text" name='name' id='name' placeholder='Enter product name'
                                onChange={handleProductInput}
                                value={input.name} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>



                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem] flex flex-col items-start gap-1'>
                            <label htmlFor="comboDetail"
                                className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem]  tracking-wide'
                            >combo Detail</label>
                            <textarea
                                className='w-full rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                type="text" name='comboDetail' id='comboDetail' placeholder='comboDetail'
                                onChange={handleProductInput}
                                value={input.comboDetail} />
                        </div>

                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem] flex flex-col items-start gap-1'>
                            <label htmlFor="price"
                                className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem] tracking-wide'
                            >price before discount</label>
                            <input
                                className='w-full rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide'
                                type="text" name='price' id='price' placeholder='Enter product price'
                                onChange={handleProductInput}
                                value={input.price} />
                        </div>
                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem] flex flex-col items-start gap-1'>
                            <label htmlFor="discount"
                                className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem] tracking-wide'
                            >discount</label>
                            <div className='flex items-center justify-between gap-12'>

                                <label
                                    className='flex items-center justify-center text-[0.95rem] gap-2'
                                    htmlFor="discount"><input type="radio" name="discount" id="discount" onChange={handleProductInput} value='5' />
                                    5%</label>
                                <label
                                    className='flex items-center justify-center text-[0.95rem] gap-2'
                                    htmlFor="discount"><input type="radio" name="discount" id="discount" onChange={handleProductInput} value='10' />
                                    10%</label><label
                                        className='flex items-center justify-center text-[0.95rem] gap-2'
                                        htmlFor="discount"><input type="radio" name="discount" id="discount" onChange={handleProductInput} value='25' />
                                    25%</label>
                            </div>
                        </div>
                        <div className='w-[17.5rem] sm:w-[23rem] md:w-[43vw] lg:w-[28rem] flex flex-col items-start gap-1'>
                            <label htmlFor="stock"
                                className='capitalize cursor-pointer text-[#55595d] font-semibold text-[0.9rem] tracking-wide'
                            >stock</label>
                            <div className='flex items-center justify-between gap-8'>

                                <label
                                    className='flex items-center justify-center text-[0.95rem] gap-2'
                                    htmlFor="stock"><input
                                        type="radio" name="stock" id="stock" onChange={handleProductInput} value='yes' />
                                    Yes</label>
                                <label
                                    className='flex items-center justify-center text-[0.95rem] gap-2'
                                    htmlFor="stock"><input type="radio" name="stock" id="stock" onChange={handleProductInput} value='no' />
                                    No</label>
                            </div>
                        </div>
                        <button type='submit' className='bg-[#FFB827] hover:bg-[#fbb66d] duration-300 mt-2 text-[#000] w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Update Product</button>
                    </div>


                </form>
            </div>
        </HomeLayout>
    )
}

export default UpdateProduct