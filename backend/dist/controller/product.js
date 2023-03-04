"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePorduct = exports.getProductById = exports.getAllProduct = exports.deleteProduct = exports.creatProduct = void 0;
const products_1 = require("../models/products");
const creatProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var products = yield products_1.Products.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "Product created", data: products });
});
exports.creatProduct = creatProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProduct = yield products_1.Products.findByPk(id);
    yield products_1.Products.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Product deleted", data: deletedProduct });
});
exports.deleteProduct = deleteProduct;
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield products_1.Products.findAll();
    return res
        .status(200)
        .json({ message: "Product fetched", data: allProducts });
});
exports.getAllProduct = getAllProduct;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const products = yield products_1.Products.findByPk(id);
    return res.status(200).json({ message: "Product fetched", data: products });
});
exports.getProductById = getProductById;
const updatePorduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield products_1.Products.update(Object.assign({}, req.body), { where: { id } });
    const updateProducts = yield products_1.Products.findByPk(id);
    return res
        .status(200)
        .json({ message: "Product updated", data: updateProducts });
});
exports.updatePorduct = updatePorduct;
