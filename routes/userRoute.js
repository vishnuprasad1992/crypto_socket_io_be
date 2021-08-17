const express = require("express");
const { registerNewUser, loginUser, getAllUsers } = require("../controllers/users");
const router = express.Router();

router.post("/registeration",registerNewUser)
router.post("/login",loginUser)
router.get("/get-all-users",getAllUsers)




module.exports = router