import defaultCompanyLogo from "../assets/images/logo2.png";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";

const JobBanner = ({ bannerInfo }) => {
  const { image, job_title, company_logo, location } = bannerInfo;

  return (
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
            src={company_logo ? company_logo : defaultCompanyLogo}
            alt="Company Logo"
          />
        </figure>
        <div className="text-white pr-4">
          <h3 className="text-2xl font-bold mb-2">{job_title}</h3>
          <span className="flex items-center gap-2 text-zinc-400">
            <CiLocationOn className="text-xl" />
            {location ? location.city : ""} {" "}
            {location ? location.country : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
JobBanner.propTypes = {
    bannerInfo: PropTypes.object.isRequired, 
}