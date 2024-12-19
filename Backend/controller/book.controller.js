import Book from "../modal/book.modal.js";
export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books
        return res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error); // Log error
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
