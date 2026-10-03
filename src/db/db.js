const moongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

exports.connectDatabase = async () => {
    try {
        await moongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Database connected successfully"))
        .catch(()=> console.log("Error to connect DB"));
    } catch (error) {
        console.error("Error:", error);
    }
};