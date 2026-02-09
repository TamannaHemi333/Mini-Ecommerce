import mongoose from "mongoose";

export default mongoose.model("Cart", new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }]
}));
