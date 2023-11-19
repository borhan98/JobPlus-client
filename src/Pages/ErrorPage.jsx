import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import errorImage from "../assets/images/Error404.png";

const ErrorPage = () => {
  return (
    <div className={"bg-error-pattern bg-cover bg-no-repeat h-[80vh]"}>
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="order-2">
          <h2 className="flex">
            <span className="text-xl text-[#FF5200]"><RiMenu3Line className="rotate-45" /></span>
            <span className="first-letter:text-6xl first-letter:text-[#FF5200] text-4xl font-bold mt-2 -ml-2">Ooooops</span>
          </h2>
          <p className="text-zinc-600 mt-2 mb-4">We can&#39;t seem to find a page you <br /> are looking for.</p>
          <button className="bg-[#FF5200] p-3 rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
            <NavLink to={"/"}>Back to Home</NavLink>
          </button>
        </div>
        <figure className="order-1 h-full">
          <img className="h-full" src={errorImage} alt="Error image" />
        </figure>
      </div>
    </div>
  );
};

export default ErrorPage;
