import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import FeatureJob from "./FeatureJob";

const FeatureJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/featureJobs").then((data) => setFeatureJobs(data.data));
  }, [axios]);
  return (
    <div className="container mx-auto px-2 lg:px-0 my-14">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-600 mb-4">
          Featured jobs
        </h3>
        <p className="text-zinc-600 text-sm md:text-base">
          Unlock top-tier opportunities handpicked for you. Dive into our
          curated Featured Jobs for a shortcut to success. Your next career move
          starts here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureJobs.map((job) => (
          <FeatureJob key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
