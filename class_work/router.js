const Router = require("koa-router");
const {
  getShopDetails,
  createShop,
  removeShop,
  updateShop,
} = require("./controllers/shop.controller");

const router = new Router();
router.get("/shop/:id", getShopDetails);
router.put("/create", createShop);
router.delete("/delete/:id", removeShop);
router.put("/update", updateShop);
module.exports = router;
