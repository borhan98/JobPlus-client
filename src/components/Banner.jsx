import { FaSearch } from "react-icons/fa";
import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="h-[600px] bg-hero-pattern bg-no-repeat bg-cover">
      <div className="container mx-auto flex">
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h1 className="text-5xl font-medium">
            Your Next Career Awaits at{" "}
            <span className="font-bold">Job<span className="text-[#FF5200] ">Plus</span></span>
          </h1>
          <p className="text-zinc-600">
            Find the perfect job for you. Explore opportunities, ignite your
            career, and achieve success with &#39;JobPlus&#39;. Your future
            begins here.
          </p>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Search by job category"
            />
            <button className="px-4 bg-[#FF5200] text-white text-xl join-item">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <figure className="flex justify-center">
            <img className="rounded-full" src={banner} alt="Banner Image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
