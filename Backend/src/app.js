const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser());

const authRoutes = require("./Routes/auth.Routes")

app.use("/api/auth",authRoutes)


module.exports = app