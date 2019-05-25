"use strinct"

// started project
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();

//conection with database

const conectionString = "mongodb+srv://lucas:lucassousa@tranningapi-hbqnj.mongodb.net/test?retryWrites=true"
mongoose.connect(conectionString)

//models
const User = require("./models/user");


//routes
const indexRoutes = require("./routes/index")
const userRoutes = require("./routes/user")



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))



app.use("/", indexRoutes)
app.use("/user", userRoutes)

module.exports = app;