// import mongoose
const mongoose = require("mongoose");

// route Handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },

    user: {
        type: String,
        required: true,
    }
})

// export
module.exports = mongoose.model("Like", likeSchema);

