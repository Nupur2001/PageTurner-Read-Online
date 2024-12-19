import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add these imports
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successful");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Signup Error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-black">
                {/* Container */}
                <div className="w-[400px] border border-gray-300 shadow-lg rounded-md bg-white p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="relative">
                        {/* Heading */}
                        <h3 className="font-bold text-2xl text-center colorChange mb-6">Signup</h3>

                        {/* Name Input */}
                        <div className="space-y-2 mb-2">
                            <label htmlFor="fullname" className="text-gray-600">
                                Name
                            </label>
                            <input
                                {...register("fullname", { required: true })}
                                type="text"
                                id="name"
                                placeholder="Enter your fullname"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.fullname && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2 mb-2">
                            <label htmlFor="email" className="text-gray-600">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2 mt-4">
                            <label htmlFor="password" className="text-gray-600">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                        </div>

                        {/* Signup Button */}
                        <div className="flex flex-col items-center mt-6">
                            <button
                                type="submit"
                                className="btnChange text-white bg-blue-500 rounded-md px-6 py-2 duration-200 w-full"
                            >
                                Signup
                            </button>
                            <p className="mt-4 text-gray-600">
                                Already registered?{" "}
                                <button
                                    className="underline text-blue-500 cursor-pointer"
                                    onClick={() =>
                                        document.getElementById("my_modal_3").showModal()
                                    }
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {/* Separate Login Dialog */}
            <Login />
            <Footer />
        </>
    );
}

export default Signup;
