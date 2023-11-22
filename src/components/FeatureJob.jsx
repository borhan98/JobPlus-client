import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureJob = ({ job }) => {
  const {
    company_logo,
    job_title,
    job_category,
    location,
    posting_date,
    salary_range,
    deadline,
  } = job;
  return (
    <div className="bg-base-200 p-4 rounded-md flex flex-col shadow-lg">
      <div className="flex gap-4 items-center">
        <figure className="rounded-md border w-fit bg-white">
          <img className="h-20 w-20" src={company_logo} alt="company logo" />
        </figure>
        <div className="space-y-1">
          <p className="flex items-center gap-2">
            <span className="text-[#FF5200]">
              <CiLocationOn />
            </span>
            <span>
              {location.city} {location.country}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#FF5200]">
              <MdOutlineCalendarMonth />
            </span>
            <span>Post: {posting_date}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#FF5200]">
              <MdOutlineCalendarMonth />
            </span>
            <span>Deadline: {deadline}</span>
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-medium mt-6 mb-2 flex-1">{job_title}</h3>
      <p className="py-3 px-4 bg-white w-fit rounded-md capitalize">
        {job_category}
      </p>
      <div className="flex justify-between mt-4">
        <span className="">{salary_range}</span>
        <button>
            <span>More</span>
            <span><FaArrowRightLong /></span>
        </button>
      </div>
    </div>
  );
};

export default FeatureJob;
FeatureJob.propTypes = {
  job: PropTypes.object.isRequired,
};
