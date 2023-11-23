import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaSearch } from "react-icons/fa";
import Job from "../components/Job";
import dataNotFoundImage from "../assets/images/no-data.png";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const axios = useAxios();  

  useEffect(() => {
    axios.get("/jobs").then((data) => setJobs(data.data));
  }, [axios]);

  useEffect(() => {
    const wantedJob = jobs.filter((job) => job.job_title.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchJob(wantedJob);
  }, [searchValue, jobs]);

  return (
    <div className="container mx-auto px-2 lg:px-0 my-10">
      <div className="text-center max-w-xl mx-auto mb-4 md:mb-10 lg:mb-14">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-600 mb-4">
          All Jobs Await You
        </h3>
        <p className="text-zinc-600 text-sm md:text-base">
          Endless Opportunities Await. Explore All Jobs. Find your perfect fit,
          from entry-level to executive roles. Your next career move starts
          here!
        </p>
      </div>
      <div className="w-fit mx-auto flex justify-center mb-10">
        <div className="join w-9/12">
          <input
            onInput={() => setSearchValue(event.target.value)}
            className="input input-bordered w-full text-sm md:text-base px-1 md:px-3 join-item"
            placeholder="Search by job name"
          />
          <button className="px-4 bg-[#FF5200] text-white text-xl join-item">
            <FaSearch />
          </button>
        </div>
      </div>
      <h3 className="font-bold mb-4">
        Total job:
        {searchValue ? (searchJob.length ? searchJob.length : 0) : jobs.length}
      </h3>
      {searchJob.length === 0 ? (
        <>
          <p className="first-letter:text-2xl">
            Sorry, we couldn&#39;t find any matching results for your search.
            Please try again with different keywords.
          </p>
          <figure className="flex justify-center">
            <img src={dataNotFoundImage} alt="" />
          </figure>
        </>
      ) : searchJob.length === 0 ? (
        jobs.map((job) => <Job key={job._id} job={job} />)
      ) : (
        searchJob.map((job) => <Job key={job._id} job={job} />)
      )}
    </div>
  );
};

export default AllJobs;
