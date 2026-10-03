const express = require("express");
const dotenv = require("dotenv");

const { connectDatabase } = require("./src/db/db");
const complaint = require("./src/routes/complaintRoutes");

const app = express();

app.use(express.json());

connectDatabase();

app.use("/api/complaint", complaintRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
});