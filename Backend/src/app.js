const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
// const path = require("path")


// app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static("./public"))
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


const authRoutes = require("./Routes/auth.Routes")
const songRoutes = require("./Routes/song.routes")

app.use("/api/auth",authRoutes)
app.use("/api/songs",songRoutes)

// app.use((req, res) => {
//    res.sendFile(path.join(__dirname, "../public", "index.html"))
// })

module.exports = app