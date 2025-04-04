const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    deliveryAddress: { type: String, required: true },
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);