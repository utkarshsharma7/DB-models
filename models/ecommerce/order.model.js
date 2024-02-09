import mongoose from 'mongoose'

const orderItemSchema= new mongoose.Schema({
    productId: {
        type: mongoose.Scehma.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number.EPSILON,
        required: true
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice : {
        type: Number,
        required: true
    },
    customer: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Cancelled", "Delivered"],
        default: "Pending"
    }

} , {timestamps: true})


export const Order = mongoose.Schema("Order", orderSchema)