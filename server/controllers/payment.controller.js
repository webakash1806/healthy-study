import { razorpay } from "../server.js"
import AppError from "../utils/error.utils.js"
import crypto from 'crypto'

import Payment from "../models/payment.model.js"
import Cart from "../models/cart.models.js"

export const razorpayApiKey = async (req, res, next) => {
    try {
        // Sending Razorpay API key in the response
        res.status(200).json({
            success: true,
            message: "Razorpay API key",
            key: process.env.RAZORPAY_KEY_ID
        })
    } catch (e) {
        // Handling errors and passing them to the next middleware
        return next(new AppError(e.message, 500))
    }
}

export const checkout = async (req, res, next) => {
    try {

        const { amount } = req.body
        console.log(amount)
        if (!amount) {
            return next(new AppError('No amount provided', 400))
        }

        const razorAmount = await Number(amount) * 100
        console.log(razorAmount)
        const options = {
            amount: razorAmount,
            currency: "INR"
        }

        const order = await razorpay.orders.create(options)


        res.status(200).json({
            success: true,
            order
        })

    } catch (e) {
        return next(new AppError(e.message, 500))

    }
}

export const paymentVerification = async (req, res, next) => {
    try {
        // Extracting necessary data from the request
        const { id } = req.user
        console.log(id)

        // const cart = await Cart.findOne({
        //     user: id,
        // });

        const { razorpay_payment_id, razorpay_signature, razorpay_order_id } = await req.body


        const body = razorpay_order_id + "|" + razorpay_payment_id

        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
            .update(body.toString())
            .digest('hex')


        if (expectedSignature === razorpay_signature) {
            await Payment.create({
                razorpay_order_id,
                razorpay_signature,
                razorpay_payment_id
            })

            res.status(200).json({
                success: true,
                message: "Payment successfull"
            })
        } else {
            return next(new AppError('Payment Unsuccessfull! Please try again', 400))
        }

    } catch (e) {
        // Handling errors and passing them to the next middleware
        return next(new AppError(e, 500))
    }
}