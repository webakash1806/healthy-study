import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from './Slices/AuthSlice'
import productSliceReducer from './Slices/ProductSlice'
import cartSliceReducer from './Slices/CartSlice'
import RazorpaySlice from './Slices/RazorpaySlice'
import OrderSlice from './Slices/OrderSlice'

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        product: productSliceReducer,
        cart: cartSliceReducer,
        razorpay: RazorpaySlice,
        order: OrderSlice,
    },
    devTools: true
})

export default store