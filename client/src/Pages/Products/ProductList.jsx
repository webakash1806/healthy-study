import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProduct } from '../../Redux/Slices/ProductSlice'
import Card from '../../Components/Card'
import SkeletonLoading from '../../Components/SkeletonLoading'
import { getCart } from '../../Redux/Slices/CartSlice'

const ProductList = () => {
    const dispatch = useDispatch()

    const { productData } = useSelector((state) => state.product)
    const cartData = useSelector((state) => state?.cart)
    console.log(cartData)

    async function loadProduct() {
        await dispatch(getAllProduct())
    }

    async function loadCartData() {
        await dispatch(getCart())
    }

    useEffect(() => {
        loadProduct()
        loadCartData()
    }, [])
    return (
        <div className='flex flex-col items-center justify-center pt-6 pb-16 bg-white min-h-fit'>
            <h1 className='font-bold border-b-4 border-gray text-red text-[2rem]'>Order Now</h1>
            {productData.length == 0 ?
                <div className='flex flex-wrap gap-8 mt-4 lg:w-[80vw] items-center justify-center'>
                    <SkeletonLoading />
                    <SkeletonLoading />
                    <SkeletonLoading />
                </div> :
                <div className='flex flex-wrap gap-10 mt-4 lg:w-[80vw] items-center justify-center'>
                    {productData?.map((res, ind) => {
                        return <Card key={res._id || ind + 1} data={res} />
                    })}
                </div>}
            <div></div>
        </div>
    )
}

export default ProductList