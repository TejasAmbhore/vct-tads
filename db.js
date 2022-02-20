const mongoose = require('mongoose');
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
// const mongostr = "mongodb://localhost:27017/TAdS?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongostr = "mongodb+srv://imshresth:imshresth@cluster0.6c0eb.mongodb.net/TAdS_VCT?retryWrites=true&w=majority";
// const mongostr = process.env.DATABASE

const connectToMongo = () => {
    mongoose.connect(mongostr, () => {
        console.log("MongoDB connection Successfull");
    })
}

module.exports = connectToMongo;