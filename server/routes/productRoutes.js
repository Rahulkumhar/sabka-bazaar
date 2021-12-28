const express = require("express");


const productController = require("../controller/productController");
const router = express.Router();

router.get(
  "/product",
  // cors(corsOptionsForProduct),
  productController.getProducts
);
router.get(
  "/banner",
  //  cors(corsOptionsForBanner),
  productController.getBanners
);
router.get(
  "/category",
  //  cors(corsOptionsForBanner),
  productController.getCategories
);
router.get(
  "/cart",
  //  cors(corsOptionsForBanner),
  productController.productAddTocart
);

module.exports = router;
