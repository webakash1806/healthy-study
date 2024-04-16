import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"


const initialState = {
    orderData: [],
    userOrderData: []
}


export const getOrder = createAsyncThunk('/order/get', async () => {
    try {
        const response = await axiosInstance.get('/order/all')
        return response.data.order
    } catch (e) {
        return toast.error("Login please!")
    }
})

export const updateOrder = createAsyncThunk('/order/update', async (data) => {
    try {
        const response = await axiosInstance.post(`/order/${data?.id}`, data)
        return response.data
    } catch (e) {
        return toast.error("Failed to load!")
    }
})

export const getMyOrders = createAsyncThunk('/order/my-order', async () => {
    try {
        const response = await axiosInstance.get('/order/my-orders')
        return response.data.order
    } catch (e) {
        return toast.error("Login please!")
    }
})

export const getUserOrder = createAsyncThunk('/userOrder', async (data) => {
    try {
        console.log(data)
        const response = axiosInstance.post('/order/add', (data))
        return response.data
    } catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrder.fulfilled, (state, action) => {
                if (action.payload) {
                    state.orderData = [...action.payload]
                }
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                if (action.payload) {
                    state.userOrderData = [...action.payload]
                }
            })
    }
})

export default orderSlice.reducer