const ShopModel = require("../models/Shop")
const getShopDetails = async (ctx) => {
  try {
    const {id} = ctx.params;
    const shopData = await ShopModel.getShopDetails(id);
    ctx.body = {"successCode": "Shop Details Fetched", shopData};
  } catch (error) {
    console.log(error);
  }
};
const createShop = async (ctx) => {
  try {
    const {id, name} = ctx.request.body;
    const data = await ShopModel.createShop(id, name);
    ctx.body = {data, message: "Created Successfully."}
  } catch (error) {
    console.log(error);
  }
};
const updateShop = async (ctx) => {
  try {
    const {id, name} = ctx.request.body;
    const data = await ShopModel.updateShop(id, name);
    ctx.body = {data, message: "Updated Successfully."}
  } catch (error) {
    console.log(error);
  }
};
const removeShop = async (ctx) => {
  try {
    const {id} = ctx.params;
    const data = await ShopModel.deleteShop(parseInt(id));
    ctx.body = {data, message: "Deleted Successfully."}
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getShopDetails,
  createShop,
  removeShop,
  updateShop,
}

