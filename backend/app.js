const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/company-routes");
const routers = require("./routes/event-routes");
const routerss=require("./routes/update-routes")
const routerc=require("./routes/content-routes")
const routerx=require("./routes/adminuser-routes")
const routernew=require("./routes/News-routes")
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/companies", router); // localhost:5000/companies
app.use("/events", routers); // localhost:5000/companies
app.use("/updates", routerss); // localhost:5000/companies
app.use("/content", routerc); // localhost:5000/companies
app.use("/admin", routerx); // localhost:5000/companies
app.use("/news", routernew); // localhost:5000/news
mongoose
  .connect(
    "mongodb://localhost:27017/onlinedatbase"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

  
  