const redis = require("../config/cache")
const userModal = require("../modals/auth.modle")
const blackListModal = require("../modals/blackList.modal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function registerUser(req, res) {
    const { username, email, password } = req.body

    const isAllreadyExist = await userModal.findOne({
        $or: [
            { email },
            { username }
        ]
    }).select("+password")

    if (isAllreadyExist) {
        return res.status(400).json({
            message: "user is allready exist with same username or password"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModal.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        {

            id: user._id,
            username: user.username

        }
        , process.env.JWT_SECRET,
        {
            expiresIn: "3d"
        }
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })


}

async function loginUser(req, res) {
    const { username, email, password } = req.body

    const user = await userModal.findOne({
        $or: [
            {
                username
            },
            {
                email
            }
        ]
    }).select("+password")

    if (!user) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const ispasswordCorrect = await bcrypt.compare(password, user.password)

    if (!ispasswordCorrect) {
        return res.status(400).json({
            message: "invalid credentials"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "3d"
        }
    )

    res.cookie("token", token)

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

async function getMe(req, res) {

    const user = await userModal.findById(req.user.id)

    res.status(200).json({
        message: "user fetched successfully",
        user
    })
}

async function logOut(req, res) {
    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token,Date.now().toString(),"EX",60*60)

    res.status(200).json({
        message: "logout successfully."
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logOut
}