import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BookDetail() {
    const { bookId } = useParams(); // Get the book ID from the URL
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null); // New state to store the selected book

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBooks(res.data); // Update books state with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        getBooks();
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            const selectedBook = books.find((b) => b.id === parseInt(bookId));
            setBook(selectedBook); // Set the selected book after books are fetched
        }
    }, [books, bookId]); // Re-run the effect when books or bookId change

    if (!book) {
        return (
            <>
                <div className="text-center mt-20 text-2xl">
                    <p>Book not found!</p>
                    <Link to="/" className="text-blue-500 underline mt-4">
                        Go back to Home
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-screen-lg mx-auto px-4 py-10 mt-20">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-64 h-96 object-cover rounded-lg shadow-lg" />
                    <div className="text-left">
                        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
                        <p className="text-lg mb-2">
                            <strong>Author:</strong> {book.author}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Category:</strong> {book.category}
                        </p>
                        <p className="text-lg mb-4">
                            <strong>Price:</strong> &#8377;{book.price}
                        </p>
                        <p className="text-md leading-relaxed mb-6">{book.detailedDescription}</p>
                        <Link to="/">
                            <button className="btn btnChange text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mx-2">
                                Add To Cart
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="btn btnChange text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookDetail;
