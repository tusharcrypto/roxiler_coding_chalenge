import express from "express";
import  {fetchproduct, selectedMonth}  from "../controller/productController.js";

const route = express.Router();

route.get("/fetchp",fetchproduct)
route.get("/products/:month",selectedMonth)
// console.log(res.params.month)

export default route