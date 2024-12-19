// import list from "../data/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Category() {

    const [list,setList]=useState([])
    useEffect(()=>{
        const getList=async()=>{
        try {
           const res= await axios.get("http://localhost:4001/list")
           console.log(res.data)
           setList(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getList()
},[])

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center text-center "> {/* Ensure relative positioning */}
                    <h1 className="text-2xl font-semibold md:text-4xl heading">
                        Discover Books by <span className="colorChange">Category</span>
                    </h1>
                    <p className="text-xl mt-3">
                        Dive into a world of stories, knowledge, and inspiration by exploring our diverse book categories. From thrilling adventures and timeless classics to self-help and modern fiction, there&apos;s something here for every reader. Start your journey today!
                    </p>

                </div>

                {/* Cards Container */}
                <div className="cards-container mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {list.map((item) => (
                        <div key={item.id} className="card-wrapper">
                            <Cards item={item} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link to={"/"}>
                        <button className="btn btnChange text-white">Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Category;
