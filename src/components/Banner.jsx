import { FaSearch } from "react-icons/fa";
import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    // <div className="h-[600px] bg-hero-pattern bg-no-repeat bg-cover">
    <div className="h-[350px] md:h-[550px] bg-[#FFE1D4] flex items-center">
      <div className="container mx-auto px-2 lg:px-0 flex items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center md:space-y-4">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-medium">
            Your Next Career Awaits at{" "}
            <span className="font-bold">Job<span className="text-[#FF5200] ">Plus</span></span>
          </h1>
          <p className="text-zinc-600 text-sm md:text-base">
            Find the perfect job for you. Explore opportunities, ignite your
            career, and achieve success with &#39;JobPlus&#39;.
          </p>
          <div className="join">
            <input
              className="input w-full px-1 text-sm md:text-base md:px-3 py-1 md:py-4 join-item"
              placeholder="Search by job category"
            />
            <button className="px-4 bg-[#FF5200] text-white text-xl join-item">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <figure className="flex justify-center">
            <img className="rounded-full" src={banner} alt="Banner Image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
