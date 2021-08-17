const express = require("express");
const { addUserData } = require("../controllers/data");
const router = express.Router();

router.post("/",addUserData)





module.exports = router