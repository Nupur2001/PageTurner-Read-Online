import Navbar from "../Navbar";
import Banner from "../Banner"; // Adjust the path relative to 'home.jsx'
import Footer from "../Footer";
// import Freebook from "../Freebook";
import list from "../../data/list.json";
import Cards from "../Cards";
import { FaArrowRight } from "react-icons/fa";

function Home() {
    // Extract only 3 categories for the home page
    const homeCategories = list.slice(0, 3);

    return (
        <>
            <Navbar />
            <Banner />
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <h1 className="text-3xl font-bold text-center mt-12">
                    Explore <span className="colorChange">Featured Categories</span>
                </h1>
                {/* Flex layout for cards and icon */}
                <div className="mt-10 flex items-center justify-center gap-6">
                    {homeCategories.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                    {/* Circular Arrow Icon */}
                    <div>
                        <a href="/categories" className="icon-container">
                            <FaArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
