const express = require("express");
const routerc = express.Router();
const contentController = require("../controllers/content-controller");



routerc.get("/", contentController.  getAllContent);
routerc.get("/:id",contentController.getById);
routerc.post("/", contentController.addContent);
routerc.put("/:id", contentController.updateContent);
routerc.delete("/:id", contentController.deleteContent);

module.exports = routerc;