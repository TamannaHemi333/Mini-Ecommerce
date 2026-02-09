import mongoose from "mongoose";

export default mongoose.model("Order", new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: { type: String, default: "Pending" }
}, { timestamps: true }));
