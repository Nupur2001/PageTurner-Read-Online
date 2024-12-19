import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import listRoute from "./route/list.route.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.mongoDBURL;

// Middleware
app.use(cors());
app.use(express.json()); // Make sure this comes before the routes

// Database Connection
try {
    mongoose.connect(URL);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Routes
app.use("/list", listRoute);
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
