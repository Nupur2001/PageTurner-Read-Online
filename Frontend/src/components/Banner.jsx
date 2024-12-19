import bannerImg from "../assets/bannerImg.jpg";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-x-12 my-20">
                {/* Image Section */}
                <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center">
                    {/* Responsive image sizes */}
                    <img
                        src={bannerImg}
                        alt="Banner Image"
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 pt-3 blob"
                    />
                </div>
                {/* Content Section */}
                <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 pl-4">
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold">Welcome to <span className="colorChange">PageTurner</span> - your next great read is just a click away!</h1>
                        <p className="text-xl">PageTurner offers a vast collection of books, from timeless classics to contemporary hits. Explore genres, discover new favorites, and enjoy seamless browsing for your next great read. Dive into a world of stories today!</p>
                        <label className="px-3 py-3 border rounded-md flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="w-3/4 md:w-2/3 grow dark:bg-slate-900 dark:text-white" placeholder="Email" />
                        </label>
                        <button className="btn bg-white text-white duration-300 cursor-pointer btnChange ">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Banner;
