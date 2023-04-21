const express = require("express");
const routerx = express.Router();
const adminuser = require("../controllers/adminuser-controller");


routerx.post("/signup", adminuser.signup);
routerx.post("/login", adminuser.login);
routerx.get("/user", adminuser.verifyToken, adminuser.getUser);
routerx.get("/refresh", adminuser.refreshToken, adminuser.verifyToken, adminuser.getUser);
routerx.post("/logout", adminuser.verifyToken,adminuser.logout);

module.exports = routerx;