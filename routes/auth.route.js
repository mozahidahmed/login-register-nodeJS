const express = require('express');
const authController = require("../controller/auth.controller")
const { verifyToken } = require("../middleware/verifyToken")
const authorization="../middleware/authorization.js"
const router = express.Router();

router.route("/signup")
    .post(authController.signup)
router.route("/login")
    .post(authController.login)

router.get("/me",verifyToken,authController.getMe)


// router.get("/admin",authorization("admin").getMe)

module.exports = router;
