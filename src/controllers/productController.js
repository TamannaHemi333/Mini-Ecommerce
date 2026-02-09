import Product from "../models/Product.js";

export const addProduct = async (req, res) =>
  res.status(201).json(await Product.create(req.body));

export const updateProduct = async (req, res) =>
  res.json(await Product.findByIdAndUpdate(req.params.id, req.body));

export const deleteProduct = async (req, res) =>
  res.json(await Product.findByIdAndDelete(req.params.id));
