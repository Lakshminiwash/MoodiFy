const {Router} = require("express")
const router = Router()
const authController = require("../Controllers/authControler")
const authMiddleWare = require("../MiddleWare/auth.middleWare")

// /api/auth/register 
router.post("/register",authController.registerUser)

// /api/auth/login 
router.post("/login",authController.loginUser)

// /api/auth/get-me 
router.get("/get-me",authMiddleWare.authUser,authController.getMe)

router.get("/logOut",authController.logOut)


module.exports = router