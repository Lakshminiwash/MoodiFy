const mongoose = require("mongoose")

async function connectToDb(params) {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("database is connected")
}

module.exports = connectToDb;
