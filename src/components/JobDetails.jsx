import { useLoaderData } from "react-router-dom";
import { RiHandbagFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import ApplyModal from "./ApplyModal";
import JobBanner from "./JobBanner";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";

const JobDetails = () => {
  const [applied, setApplied] = useState(0);
  const [canApply, setCanApply] = useState({});
  const axios = useAxios();
  const { user } = useAuth();
  const {
    _id,
    image,
    job_title,
    author_email,
    company_logo,
    job_category,
    job_description,
    deadline,
    responsibilities,
    salary_range,
    total_applied,
    location,
  } = useLoaderData();
  const { email } = canApply;
  // console.log(email, jobId);
  const bannerInfo = { image, job_title, company_logo, location };

  // Handle apply job application
  const handleApplyUser = () => {
    const currentDate = new Date(new Date().toLocaleDateString());
    const jobDeadline = new Date(deadline);

    if (user?.email === author_email) {
      return Swal.fire({
        icon: "warning",
        text: "You can't apply your own job",
      });
    } else if (currentDate > jobDeadline) {
      return Swal.fire({
        icon: "info",
        title: "Opps, sorry...",
        text: "You can't apply, deadline is over",
      });
    } else if (user?.email === email) {
      return Swal.fire({
        text: "You have already applied for the job",
      });
    }
    document.getElementById("my_modal_1").showModal();
  };

  useEffect(() => {
    axios.get(`/applications/${_id}`).then((data) => {
      setCanApply(data.data);
    });
  }, [axios, _id]);

  return (
    <div className="container mx-auto">
      {/* Job Banner */}
      <JobBanner bannerInfo={bannerInfo} />
      {/* Job Details */}
      <div className="mt-6">
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">Description</h3>
        <p className="text-zinc-600">{job_description}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="py-20 bg-base-200 rounded-md flex flex-col items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span>
                <RiHandbagFill />
              </span>
              <span className="capitalize">{job_category}</span>
            </div>
          </div>
          <div className="py-20 bg-base-200 rounded-md flex flex-col items-center justify-center">
            <div className="text-lg font-medium flex flex-col gap-2">
              <span className="text-xl">
                <MdLocationPin />
              </span>
              <span>
                {location ? location.city : ""}{" "}
                {location ? location.country : ""}
              </span>
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
              <span>Applied: {applied ? applied : total_applied}</span>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">
          Responsibilities
        </h3>
        <ul className="text-zinc-600 mb-4">
          {responsibilities ? (
            responsibilities.map((res, index) => <li key={index}>- {res}</li>)
          ) : (
            <li>-Author didn&#39;t add any responsibilities</li>
          )}
        </ul>
        <div className="flex gap-4 items-center">
          <div className="text-zinc-600">
            <p className="text-xl">Apply before</p>
            <p>{deadline}</p>
          </div>
          <button
            onClick={() => handleApplyUser()}
            // onClick={() => user?.email === author_email ? handleApplyUser() : document.getElementById("my_modal_1").showModal()}
            className="bg-[#FF5200] py-2 px-3 rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600"
          >
            Apply Now
          </button>
          <ApplyModal
            jobId={_id}
            applied={applied}
            setApplied={setApplied}
            author_email={author_email}
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
