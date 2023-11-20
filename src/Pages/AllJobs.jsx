import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaSearch } from "react-icons/fa";
import Job from "../components/Job";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const axios = useAxios();

  const plit = "2023-11-15";
  const date = plit.split("-").join("/");
  const currentDate = new Date().toLocaleDateString();
//   console.log(currentDate);
  const date1 = new Date(date);
  const date2 = new Date(currentDate);
//   if (date1 > date2) {
//     console.log("date1 boro");
//   } else {
//     console.log("date2 boro");
//   }

  useEffect(() => {
    axios.get("/jobs").then((data) => setJobs(data.data));
  }, [axios]);

  useEffect(() => {
    const wantedJob = jobs.filter((job) => job.job_title.includes(searchValue));
    setSearchJob(wantedJob);
  }, [searchValue, jobs]);

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
            onInput={() => setSearchValue(event.target.value)}
            className="input input-bordered join-item"
            placeholder="Search by job name"
          />
          <button className="px-4 bg-[#FF5200] text-white text-xl join-item">
            <FaSearch />
          </button>
        </div>
      </div>
      <h3 className="font-bold mb-4">
        Total job: {searchJob.length ? searchJob.length : jobs.length}
      </h3>
      {searchJob.length === 0
        ? <p className="first-letter:text-2xl">Sorry, we couldn&#39;t find any matching results for your search. Please try again with different keywords.</p>
        : searchJob.length === 0
        ? jobs.map((job) => <Job key={job._id} job={job} />)
        : searchJob.map((job) => <Job key={job._id} job={job} />)}
    </div>
  );
};

export default AllJobs;
