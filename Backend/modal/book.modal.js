import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: String,
    image: String,
    detailedDescription: String
});

const Book = mongoose.model("Book", bookSchema); // "books" collection in MongoDB
export default Book;
