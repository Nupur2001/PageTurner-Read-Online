import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async(data) => {
        const userInfo = {
        // fullname: data.fullname,
        email: data.email,
        password: data.password
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res) => {
            console.log(res.data)
            if (res.data) {
                // alert("Login Successful")
                toast.success('Successfully loggedin!');

                document.getElementById("my_modal_3").close()
                setTimeout(()=>{
                    window.location.reload()
            localStorage.setItem("Users",JSON.stringify(res.data.user))

                },1000)
                
            }
        })
        .catch((err) => {
            if (err.response) {
                console.log(err)
                // alert("Login Error: "+ err.response.data.message)
                toast.error("Login Error: "+ err.response.data.message);
                setTimeout(()=>{},3000)
            }
        })}
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  dark:text-slate-700 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <div
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </div>


                        {/* Title */}
                        <h3 className="font-bold text-lg colorChange">Login</h3>
                        <br />

                        {/* Email */}
                        <div className="mt-4 space-y-2 ">
                            <label className="dark:text-slate-700 ">Email</label>
                            <br />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label className="dark:text-slate-700 ">Password</label>
                            <br />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btnChange text-white rounded-md px-4 py-2 duration-200 w-full border:none mt-4"
                        >
                            Login
                        </button>
                    </form>

                    {/* Signup Link */}
                    <div className="mt-4 text-gray-600">
                        <span>
                            Not registered?{" "}
                            <a
                                href="/signup"
                                className="underline text-blue-500 cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                Signup
                            </a>
                        </span>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Login;
