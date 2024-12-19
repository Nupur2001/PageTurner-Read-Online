import Footer from "./Footer";
import Navbar from "./Navbar";
// import Login from "./Login";
import { useForm } from "react-hook-form";

function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white">
                {/* Container */}
                <div className="w-[400px] border border-gray-300 shadow-lg rounded-md bg-white p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="relative">


                        {/* Heading */}
                        <h3 className="font-bold text-2xl text-center colorChange mb-6">Contact Us</h3>

                        {/* Name Input */}
                        <div className="space-y-2 mb-2">
                            <label htmlFor="name" className="text-gray-600">Name</label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2 mb-2">
                            <label htmlFor="email" className="text-gray-600">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2 mt-4">
                            <label htmlFor="password" className="text-gray-600">Password</label>
                            <textarea
                                {...register("message", { required: true })}
                                type="message"
                                id="message"
                                placeholder="Enter your concern"
                                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className=" flex justify-center mt-4">

                            <button type="submit" className="btn btnChange text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Contacts