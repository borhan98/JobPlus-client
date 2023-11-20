import { useLoaderData } from "react-router-dom";
// import JobBanner from "../assets/images/Network-Administator.jpg";
// import companyLogo from "../assets/images/logo2.png";
import { CiLocationOn } from "react-icons/ci";
import { RiHandbagFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const JobDetails = () => {
  const {
    image,
    company_logo,
    job_title,
    job_category,
    job_description,
    responsibilities,
    deadline,
    salary_range,
    total_applied,
    location,
  } = useLoaderData();

  return (
    <div className="container mx-auto">
      {/* Job Banner */}
      <div className="relative">
        <img
          className="h-[450px] w-full object-cover"
          src={image}
          alt="Banner image"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.25)] top-0 left-0"></div>
        <div className="absolute bottom-10 left-10 flex gap-4 items-center  rounded-md bg-[rgba(0,0,0,1)] p-4">
          <figure className="">
            <img
              className="w-28 h-28 p-4 bg-[#FFF] rounded-md"
              src={company_logo}
              alt="Company Logo"
            />
          </figure>
          <div className="text-white pr-4">
            <h3 className="text-2xl font-bold mb-2">{job_title}</h3>
            <span className="flex items-center gap-2 text-zinc-400">
              <CiLocationOn className="text-xl" /> {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>
      {/* Job Details */}
      <div className="mt-6">
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">Description</h3>
        <p className="text-zinc-600">
          {job_description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="py-20 bg-base-200 rounded-md flex flex-col items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span>
                <RiHandbagFill />
              </span>
              <span>{job_category}</span>
            </div>
          </div>
          <div className="py-20 bg-base-200 rounded-md flex flex-col items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span className="text-xl">
                <MdLocationPin />
              </span>
              <span>{location.city}, {location.country}</span>
            </div>
          </div>
          <div className="py-20 bg-base-200 rounded-md flex flex-col items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span className="text-xl">
                <RiMoneyDollarCircleFill />
              </span>
              <span>{salary_range}</span>
            </div>
          </div>
          <div className="py-20 bg-base-200 rounded-md flex gap-2 items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span>
                <FaUsers />
              </span>
              <span>Applied: {total_applied}</span>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">
          Responsibilities
        </h3>
        <ul className="text-zinc-600 mb-4">
            {
                responsibilities.map((res, index) => <li key={index}>- {res}</li>)
            }
        </ul>
        <div className="flex gap-4 items-center">
          <div className="text-zinc-600">
            <p className="text-xl">Apply before</p>
            <p>{deadline}</p>
          </div>
          <button className="bg-[#FF5200] py-2 px-3 rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
