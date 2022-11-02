//import { request } from "express";
import productSchema from "../models/products";

const getProducts = async (req, res) => {
  const getPs = await productSchema.find();
  res.json(getPs);
};

const getProduct = async (req, res) => {
  const getP = await productSchema.findById(req.params.id);
  res.json(getP);
};

const postProduct = async (req, res) => {
  const postP = new productSchema(req.body);
  await postP.save();
  res.json("producto creado");
};

const putProduct = async (req, res) => {
  const putP = await productSchema.findByIdAndUpdate(req.params.id, req.body);
  res.json(putP);
};

const deleteProduct = async (req, res) => {
  const deleteP = await productSchema.findByIdAndDelete(req.params.id);
  res.json(deleteP);
};

export const products = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
