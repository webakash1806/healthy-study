import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    cartData: {}
}

export const getCart = createAsyncThunk("/cart/get", async () => {
    try {
        let res = axiosInstance.get('/cart')

        res = (await res).data
        return res
    }
    catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

export const addCart = createAsyncThunk('/cart/add', async (data) => {
    try {
        console.log(data)
        let res = axiosInstance.post(`/cart/add`, data)
        toast.promise(res, {
            loading: "Adding to Cart",
            success: (data) => {
                return data?.data.message
            },
            error: "failed to create course"
        })

        return (await res).data
    }
    catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

export const updateCart = createAsyncThunk('/cart/update', async (data) => {
    try {
        let res = axiosInstance.put(`/cart/update/${data?.cartId}/${data?.itemId}/${data?.qnt}/${data?.price}`)
        toast.promise(res, {
            loading: "Wait! updating cart",
            success: (data) => {
                return data?.data.message
            },
            error: 'failed to update cart'
        })
        res = await res;
        return res.data
    }
    catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

export const deleteCartItem = createAsyncThunk("/cart/remove", async (data) => {
    try {
        let res = axiosInstance.post(`/cart/remove/${data?.cartId}/${data?.itemId}`)
        toast.promise(res, {
            loading: 'Wait! removing item',
            success: (data) => {
                return data?.data.message
            },
            error: "failed to remove item"
        })
        // getting response resolved here
        res = await res;
        return res.data;
    } catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

export const removeCartAfterOrder = createAsyncThunk("/cart/delete-after-order", async (data) => {
    await axiosInstance.delete(`/cart/remove/order-confirm/${data}`)
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            if (action.payload) {
                state.cartData = { ...action.payload }
            }
        })
    }
})

export default cartSlice.reducer