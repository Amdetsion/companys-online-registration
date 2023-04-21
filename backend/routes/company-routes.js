const express = require("express");
const router = express.Router();
const user = require("../controllers/user-controller");
const companysController = require("../controllers/company-cotroller");
const eventController=require("../controllers/event-controller")
router.get("/", companysController. getAllCompany);
router.get("/:id",companysController.getById);
router.post("/", companysController.addCompany);
router.put("/:id", companysController.updateCompany);
router.delete("/:id", companysController.deleteCompany);

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/user", user.verifyToken, user.getUser);
router.get("/refresh", user.refreshToken, user.verifyToken, user.getUser);
router.post("/logout", user.verifyToken, user.logout);

module.exports = router;