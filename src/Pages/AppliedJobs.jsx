import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Job from "../components/Job";

const AppliedJobs = () => {
  const [appliedIds, setAppliedIds] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { user } = useAuth();
  const axios = useAxios();
  console.log(appliedJobs);

  useEffect(() => {
    axios.get(`/applications?email=${user?.email}`).then((data) => {
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
    <div className="container mx-auto">
      <div className="text-center max-w-xl mx-auto my-14">
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">
          Your application history
        </h3>
        <p className="text-zinc-600">
          Application History. Your roadmap to success. Easily track, review,
          and manage all your job applications in one place.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-4">
          Total applied:
          {appliedJobs.length}
        </h3>
        <div className="space-y-1 mb-6 flex items-center gap-2">
          <label htmlFor="category">Filter: </label>
          <select
            className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
            id="category"
            name="category"
          >
            <option value="">All Category</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
      </div>
      {appliedJobs.map((job) => (
        <Job key={job._id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
