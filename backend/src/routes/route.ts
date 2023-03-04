import { Router } from "express";
import {
  creatProduct,
  deleteProduct,
  getAllProduct,
  updatePorduct,
  getProductById,
} from "../controller/product";
const router = Router();

router.post("/", creatProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updatePorduct);

export default router;
