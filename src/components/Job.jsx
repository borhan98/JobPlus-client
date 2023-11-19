import { useState } from "react";
import { CiLocationOn, CiTimer, CiBadgeDollar } from "react-icons/ci";
import {
  FaChessBishop,
  FaCalendarAlt,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const [love, setLove] = useState(false);
  const {
    _id,
    job_author,
    job_title,
    location,
    job_category,
    salary_range,
    total_applied,
    posting_date,
    deadline,
  } = job;

  return (
    <div className="grid gap-2 grid-cols-12 p-4 bg-base-100 items-center border-b border-l border-r mb-8 rounded-md">
      <div className="col-span-2 border-r">
        <h5>Job Author:</h5>
        <h3 className="text-xl font-medium">{job_author}</h3>
      </div>
      <div className="col-span-7 border-r space-y-4">
        <h3 className="text-2xl font-semibold">{job_title}</h3>
        <div className="flex gap-5">
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiLocationOn />
            </span>
            <span>
              {location.city}, {location.country}
            </span>
          </p>
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiTimer />
            </span>
            <span>{job_category}</span>
          </p>
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiBadgeDollar />
            </span>
            <span>{salary_range}</span>
          </p>
          <p
            className="flex items-center text-zinc-600"
            title={`Total Applied: ${0}`}
          >
            <span className="text-[#FF5200] text-xl mr-1">
              <FaChessBishop />
            </span>
            <span>{total_applied}</span>
          </p>
        </div>
      </div>
      <div className="col-span-3 space-y-1">
        <div className="flex gap-3 justify-between">
          <span
            className="border border-[#FF5200] bg-[#ff510025] rounded-md flex items-center w-fit text-[#FF5200] py-2 px-3 text-xl"
            onClick={() => setLove(!love)}
          >
            {love ? <FaRegHeart /> : <FaHeart />}
          </span>
          <Link to={`/jobdetails/${_id}`} className="w-full">
            <button className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
              View Details
            </button>
          </Link>
        </div>
        <div className="flex items-center text-zinc-600 font-medium">
          <span className="text-[#FF5200] mr-2">
            <FaCalendarAlt />
          </span>
          <p className="grid grid-cols-2">
            <span>Circular: </span>
            <span>{posting_date}</span>
          </p>
        </div>
        <div className="flex items-center text-zinc-600 font-medium">
          <span className="text-[#FF5200] mr-2">
            <FaCalendarAlt />
          </span>
          <p className="grid grid-cols-2">
            <span>Deadline: </span>
            <span>{deadline}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
Job.propTypes = {
  job: PropTypes.object.isRequired,
};
