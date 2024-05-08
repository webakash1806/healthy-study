import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {  toast } from 'react-toastify';


import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    productData: []
}

export const getAllProduct = createAsyncThunk("/product/get", async () => {
    try {
        let res = axiosInstance.get("/product")
        toast.promise(res, {
            success: "Namaste!",
        })
        res = (await res).data.product
        return res
    }
    catch (e) {
        return toast.error("Something went wrong")
    }
})

export const createProduct = createAsyncThunk("/product/add", async (data) => {
    try {
        let res = axiosInstance.post("/product/add", data)
        toast.promise(res, {
            loading: "Adding Products!",
            success: (data) => {
                return data?.data.message
            },
            error: "Failed to add product"
        })

        return (await res).data
    }
    catch (e) {
        return toast.error("Something went wrong!")
    }
})

export const deleteProduct = createAsyncThunk("/product/remove", async (data) => {
    try {
        let res = axiosInstance.delete(`/product/remove/${data}`)
        toast.promise(res, {
            loading: 'Wait! removing Product',
            success: (data) => {
                return data?.data.message
            },
            error: "failed to remove product"
        })
        // getting response resolved here
        res = await res;
        return res.data;
    } catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

export const updateProduct = createAsyncThunk("/product/update", async (data) => {
    try {
        console.log(data)
        let res = axiosInstance.put(`/product/update/${data[0]}`, data[1])
        toast.promise(res, {
            loading: 'Wait! Updating product',
            success: (data) => {
                return data?.data.message
            },
            error: "failed to update product"
        })
        // getting response resolved here
        res = await res;
        return res.data;
    } catch (e) {
        return toast.error(e?.response?.data?.message)
    }
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            if (action.payload) {
                state.productData = [...action.payload]
            }
        })
    }
})


export default productSlice.reducer