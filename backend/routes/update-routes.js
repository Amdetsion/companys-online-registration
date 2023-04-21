const express = require("express");
const routerss = express.Router();
const update = require("../controllers/update-controller");



routerss.get("/", update. getAllUpdate);
routerss.get("/:id",update.getById);
routerss.post("/", update.addUpdate);
routerss.delete("/:id", update.deleteUpdate);

module.exports = routerss;