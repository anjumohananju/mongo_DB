const express = require('express');
const router = express.Router();

const user= require("./users");
//const user =require("./user");

router.use("/users",user);
//router.use("/user",user);

module.exports =router;