const express = require("express");
const { getAllUsers, userRegister, userLogin } = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(userRegister);
router.route('/all').get(getAllUsers);
router.route("/login").post(userLogin);

module.exports = router;
