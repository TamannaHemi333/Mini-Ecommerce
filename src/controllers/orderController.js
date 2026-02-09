import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const cart = await Cart.findOne({ userId: req.user.id }).session(session);
    let total = 0, items = [];

    for (let i of cart.items) {
      const p = await Product.findById(i.productId).session(session);
      if (p.stock < i.quantity) throw new Error("Out of stock");

      p.stock -= i.quantity;
      await p.save({ session });

      total += p.price * i.quantity;
      items.push({ productId: p._id, quantity: i.quantity, price: p.price });
    }

    const order = await Order.create([{
      userId: req.user.id,
      items,
      totalAmount: total
    }], { session });

    cart.items = [];
    await cart.save({ session });

    await session.commitTransaction();
    res.status(201).json(order);

  } catch (e) {
    await session.abortTransaction();
    res.status(400).json({ message: e.message });
  }
};
