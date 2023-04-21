const express = require("express");
const routernew = express.Router();

const newscontroller=require("../controllers/news-controller")

routernew.get("/", newscontroller.getAllNews);
routernew.get("/:id",newscontroller.getById);
routernew.post("/", newscontroller.addNews);
routernew.put("/:id", newscontroller.updateNews);
routernew.delete("/:id", newscontroller.deleteNews);

module.exports = routernew;