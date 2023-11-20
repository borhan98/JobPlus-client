import LoginImage from "../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Login user
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login
    login(email, password)
      .then(() => {
        toast.success("Logged In successfully!");
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto flex items-center py-10">
      <figure className="flex-1">
        <img src={LoginImage} alt="Login Image" draggable={false} />
      </figure>
      <div className="flex-1 shadow p-4">
        <p className="w-fit ml-auto text-zinc-600">
          New User?{" "}
          <Link to={"/register"} className="text-[#FF5200] underline">
            Sign Up
          </Link>
        </p>
        <div className="mt-20 mb-6">
          <h3 className="text-3xl font-semibold">Welcome Back!</h3>
          <p className="text-zinc-600">Login to continue</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border-b border-l pl-10 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              required
            />
            <span className="absolute top-5 left-3 text-zinc-600">
              <IoMdMail />
            </span>
          </div>
          <div className="relative">
            <input
              type={!showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="border-b border-l pl-10 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              required
            />
            <span className="absolute top-5 left-3 text-zinc-600">
              <FaLock />
            </span>
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-5 right-3 text-xl text-zinc-600"
            >
              {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
            <small className="ml-auto w-fit block mt-2 text-zinc-600 underline cursor-pointer">
              Forgot password?
            </small>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600"
            >
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-center mt-6 mb-2">Login with</p>
          <div className="border py-3 rounded-md flex justify-center items-center gap-3 cursor-pointer hover:bg-base-200 duration-300">
            <span>
              <FcGoogle />{" "}
            </span>
            <p className="">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
