import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  cart.items.push(req.body);
  await cart.save();
  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.items = cart.items.filter(i => i.productId != req.body.productId);
  await cart.save();
  res.json(cart);
};
