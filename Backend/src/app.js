const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")


app.use(express.static("./public"))
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:3000",
    ],
    credentials: true
}))


const authRoutes = require("./Routes/auth.Routes")
const songRoutes = require("./Routes/song.routes")

app.use("/api/auth", authRoutes)
app.use("/api/songs", songRoutes)


module.exports = app