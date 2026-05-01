const {Router} = require("express")
const router = Router()
const authController = require("../Controllers/authControler")

// /api/auth/register 
router.post("/register",authController.registerUser)

// /api/auth/login 
router.post("/login",authController.loginUser)

module.exports = router