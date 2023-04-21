const express = require("express");
const routers = express.Router();
const user = require("../controllers/user-controller");

const eventController=require("../controllers/event-controller")

routers.get("/", eventController. getAllEvent);
routers.get("/:id",eventController.getById);
routers.post("/", eventController.addEvent);
routers.put("/:id", eventController.updateEvent);
routers.delete("/:id", eventController.deleteEvent);

module.exports = routers;