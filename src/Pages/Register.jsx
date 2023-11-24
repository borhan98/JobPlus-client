import LoginImage from "../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const { createUser, updateUserProfile, logout, googleLogin } = useAuth();
  const navigate = useNavigate();

  // Handle create new user
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password should have at least 6 character!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }

    // create user
    createUser(email, password)
      .then(() => {
        toast.success("Successfully Registered", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        // update user profile
        updateUserProfile(name, photo)
          .then(() => {
            //Log out user
            logout()
              .then(() => {
                toast("Please Login", {
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                });
              })
              .catch((err) => {
                console.log(err.message);
              });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged In successfully!", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto px-2 lg:px-0 flex flex-col md:flex-row items-center py-10">
      <figure className="flex-1">
        <img src={LoginImage} alt="Login Image" draggable={false} />
      </figure>
      <div className="flex-1 flex flex-col  shadow p-4">
        <p className="order-4 md:order-1 w-fit mx-auto md:mx-0 md:ml-auto mt-6 md:mt-0 text-zinc-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#FF5200] underline">
            Sign In
          </Link>
        </p>
        <div className="order-1 md:order-2 mt-6 md:mt-13 lg:mt-20 mb-6">
          <h3 className="text-xl md:text-3xl font-semibold">Welcome!</h3>
          <p className="text-zinc-600 text-sm md:text-base">Register to continue</p>
        </div>
        <form onSubmit={handleCreateUser} className="order-2 md:order-3 space-y-3">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-b border-l pl-10 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              required
            />
            <span className="absolute top-5 left-3 text-zinc-600">
              <FaUser />
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="border-b border-l pl-10 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              required
            />
            <span className="absolute top-5 left-3 text-zinc-600">
              <MdAddPhotoAlternate />
            </span>
          </div>
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
              Register
            </button>
          </div>
        </form>
        <div className="order-3 md:order-4">
          <p className="text-center mt-6 mb-2">Login with</p>
          <div onClick={handleGoogleLogin} className="border py-3 rounded-md flex justify-center items-center gap-3 cursor-pointer hover:bg-base-200 duration-300">
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

export default Register;
