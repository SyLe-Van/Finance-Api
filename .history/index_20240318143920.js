const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const financeRoute = require("./routes/financeRoute");
const expensesRoute = require("./routes/expensesRoute");
const incomeRoute = require("./routes/incomeRoute")
const fs = require("fs");
//---------------------------------------------------------- server ----------------------------------------------------------
ip = '134.209.108.2'
app.listen(PORT, ip, () => console.log(`Server running on port http://${ip}:${PORT}`));

//---------------------------------------------------------- MongoDB connect -----------------------------------------------------
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error: ${err}`));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/api/", financeRoute);
app.use("/api/", expensesRoute);
app.use("/api/", incomeRoute);




