import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaSearch } from "react-icons/fa";
import Job from "../components/Job";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/jobs").then((data) => setJobs(data.data));
  }, [axios]);

  return (
    <div className="container mx-auto my-10">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">
          All Jobs Await You
        </h3>
        <p className="text-zinc-600">
          Endless Opportunities Await. Explore All Jobs. Find your perfect fit,
          from entry-level to executive roles. Your next career move starts
          here!
        </p>
      </div>
      <div className="w-fit mx-auto mb-10">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search by job name"
          />
          <button className="px-4 bg-[#FF5200] text-white text-xl join-item">
            <FaSearch />
          </button>
        </div>
      </div>
      {/* <hr className="mb-10 mt-6" /> */}
      <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
      {jobs.map((job) => (
        <Job key={job._id} job={job} />
      ))}
    </div>
  );
};

export default AllJobs;
