import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Job from "../components/Job";
import NoDataImage from "../assets/images/no-data.png";

const AppliedJobs = () => {
  const [appliedIds, setAppliedIds] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const [isData, setIsData] = useState(true);
  const { user } = useAuth();
  const axios = useAxios();

  // Handle filter
  const handleFilter = (val) => {
    setIsData(true);
    if (val === "all") {
      setFilterJobs(appliedJobs);
    } else {
      const jobByCategory = appliedJobs.filter(
        (job) => job.job_category === val
      );
      if (jobByCategory.length) {
        setFilterJobs(jobByCategory);
      } else {
        setIsData(false);
      }
    }
  };

  useEffect(() => {
    axios.get(`/applications?email=${user?.email}`, { withCredentials: true }).then((data) => {
      const ids = data.data.map((job) => job.jobId);
      setAppliedIds(ids);
    });
  }, [axios, user.email]);

  useEffect(() => {
    axios
      .post("/jobsByIds", appliedIds)
      .then((data) => setAppliedJobs(data.data));
  }, [axios, appliedIds]);

  return (
    <div className="container mx-auto px-2 lg:px-0">
      <div className="text-center max-w-xl mx-auto my-14">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-600 mb-4">
          Your application history
        </h3>
        <p className="text-zinc-600 text-sm md:text-base">
          Application History. Your roadmap to success. Easily track, review,
          and manage all your job applications in one place.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-4">
          Total jobs:
          {isData
            ? filterJobs.length
              ? filterJobs.length
              : appliedJobs.length
            : 0}
        </h3>
        <div className="space-y-1 mb-6 flex items-center gap-2">
          <label htmlFor="category">Filter: </label>
          <select
            onChange={() => handleFilter(event.target.value)}
            className="border border-black pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base rounded-md focus:outline-none focus:shadow-md w-full"
            id="category"
            name="category"
          >
            <option value="all">All Category</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
      </div>
      <div>
        {isData ? (
          filterJobs.length ? (
            filterJobs.map((job) => <Job key={job._id} job={job} />)
          ) : (
            appliedJobs.map((job) => <Job key={job._id} job={job} />)
          )
        ) : (
          <>
            <p className="text-2xl font-bold text-center">
              You didn&#39;t applied any job yet
            </p>
            <figure className="flex justify-center">
              <img src={NoDataImage} alt="No Data Found Image" />
            </figure>
          </>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
