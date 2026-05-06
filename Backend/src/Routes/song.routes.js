const express = require("express")
const router = express.Router()
const songController = require("../Controllers/songControllers")
const upload = require("../MiddleWare/upload.middleware")
const { route } = require("./auth.Routes")

// /api/songs/upload 
router.post("/upload",upload.single("song"),songController.uploadSong)

//  /api/songs/getSong
router.get("/getSong",songController.getSong)

module.exports = router