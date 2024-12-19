import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Details() {
    const { id } = useParams(); // Get the category ID from the URL
    const [books, setBooks] = useState([]); // Initialize state for books

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBooks(res.data); // Update books state with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        getBook();
    }, []); // Empty dependency array ensures this runs only once when component mounts

    // Filter books after they are fetched
    const categoryBooks = books.filter((book) => book.category.toLowerCase() === id.toLowerCase());

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen mt-20">
                <h1 className="text-3xl font-bold text-center mt-20 pageHeading">
                    Books in <span className="colorChange">{id}</span> Category
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {categoryBooks.length > 0 ? (
                        categoryBooks.map((book) => (
                            <div key={book.id} className="card">
                                <figure>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="card-image"
                                    />
                                </figure>
                                <div className="card-body dark:text-slate-900">
                                    <h2 className="card-title">{book.title}</h2>
                                    <p className="card-author">
                                        <strong>Author:</strong> {book.author}
                                    </p>
                                    <p className="card-price">
                                        <strong>Price:</strong> &#8377;{book.price}
                                    </p>
                                    <p className="card-description">{book.description}</p>
                                </div>
                                <div className="card-details text-center py-2">
                                    <Link to={`/book/${book.id}`}>
                                        <button className="btn btnChange text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                                            More Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl text-center col-span-full ">
                            No books available in this category.
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Details;
