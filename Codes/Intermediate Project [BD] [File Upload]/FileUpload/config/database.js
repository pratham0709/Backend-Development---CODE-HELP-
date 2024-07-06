const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedToplogy: true,
    })
    .then(() => {console.log("DB Connection successful")})
    .catch((error) => {
         console.log("DB Connection Issues");
         console.error(error);

         process.exit(1);
    })
}