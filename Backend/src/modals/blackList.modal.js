const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true,"token is required for blacklisting"]
  }
});

const blackListModal = mongoose.model("blacklist", blackListSchema);
module.exports = blackListModal