import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    orderItems: [
            { name:{ type: String, requied: true},
                qty:{ type: Number, required: true},
                image: {type: String, requied: true},
                price: {type: Number, requied: true},
                product: {type: mongoose.Schema.Types.ObjectId,
                        requied: true,
                        ref: 'Pruduct'},
            }
        ],
    shippingAddress: {
        street: {type: String, requied: true},
        suburb: {type: String, requied: true},
        state: {type: String, requied: true},
        country:{type: String, requied: true},
        postCode: {type: String, requied: true}
       
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResult: {
       id: { type: String },
       status: {type: String},
       update_time: {type: String},
       email_address: {type: String}
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },

}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;