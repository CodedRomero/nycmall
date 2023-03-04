import { RequestHandler } from "express";
import { Products } from "../models/products";

export const creatProduct: RequestHandler = async (req, res, next) => {
  var products = await Products.create({ ...req.body });
  return res.status(200).json({ message: "Product created", data: products });
};

export const deleteProduct: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedProduct: Products | null = await Products.findByPk(id);
  await Products.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Product deleted", data: deletedProduct });
};

export const getAllProduct: RequestHandler = async (req, res, next) => {
  const allProducts: Products[] = await Products.findAll();
  return res
    .status(200)
    .json({ message: "Product fetched", data: allProducts });
};

export const getProductById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const products: Products | null = await Products.findByPk(id);
  return res.status(200).json({ message: "Product fetched", data: products });
};

export const updatePorduct: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Products.update({ ...req.body }, { where: { id } });
  const updateProducts: Products | null = await Products.findByPk(id);
  return res
    .status(200)
    .json({ message: "Product updated", data: updateProducts });
};
