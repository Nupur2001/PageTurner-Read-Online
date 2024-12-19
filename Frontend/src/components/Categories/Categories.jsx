import Navbar from "../Navbar";
import Footer from "../Footer";
import Category from "../Category";

function Categories() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Category />
            </div>
            <Footer />
        </>
    );
}

export default Categories;
