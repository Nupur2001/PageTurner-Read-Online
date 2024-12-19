import list from "../data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function FeaturedBooks() {
    // Specify the categories you want to display
    const selectedCategories = ["Fiction", "Romance", "Self-Help"];

    // Filter books by the selected categories
    const filteredBooks = list.filter((book) => 
        selectedCategories.includes(book.category) && (book.age_group === "18+" || book.available_languages.includes("English"))
    );

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // For small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold max-w-screen-2xl container mx-auto px-4 sm:pl-6 sm:pr-6 text-center">
                    <span className="colorChange">Featured Books:</span> Explore the Best of Literature!
                </h1>
                <p className="text-xl text-center pt-1 sm:px-6 px-4">
                    Browse through a curated selection of books based on different categories and themes!
                </p>
            </div>

            {/* Featured Books Carousel */}
            <div className="slider-container px-4"> {/* Add padding to slider container */}
                <Slider {...settings}>
                    {filteredBooks.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>

            {/* Additional Section to Present Books */}
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold">Explore Books by Category</h2>
                <p className="text-lg pt-2">Browse books in selected categories below.</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map((item) => (
                        <div key={item.id} className="border p-4 rounded-lg shadow-md">
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-xl font-semibold mt-4">{item.category}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-sm mt-2 text-gray-500">
                                Available in: {item.available_languages.join(", ")}
                            </p>
                            <p className="text-sm text-gray-500">Age Group: {item.age_group}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedBooks;
