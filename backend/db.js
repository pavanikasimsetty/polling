const mongoose = require('mongoose');

//const dbURI = "mongodb+srv://mdrohitreddy:mdrohitreddy@cluster0.bzga5vf.mongodb.net/teachers";
const dbURI = "mongodb+srv://admin:<pollingsystem123>@polling.y4g05.mongodb.net/teachers?retryWrites=true&w=majority&appName=Polling";
const connectToDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connectToDB;

