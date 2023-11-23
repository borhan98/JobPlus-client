import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Job from "./Job";
import useAxios from "../Hooks/useAxios";

const JobCategory = () => {
  const [jobCategory, setJobCategory] = useState("all-jobs");
  const [jobs, setJobs] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    jobCategory === "all-jobs"
      ? axios.get("/jobs").then((data) => setJobs(data.data))
      : axios
          .get(`/jobs?category=${jobCategory}`)
          .then((data) => setJobs(data.data));
  }, [axios, jobCategory]);

  return (
    <div className="my-14">
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList className={"flex w-fit mx-auto px-2 lg:px-0 flex-wrap"}>
          <Tab
            className={`px-3 py-1 rounded-t border-b border-l`}
            onClick={() => setJobCategory("all-jobs")}
          >
            All Jobs
          </Tab>
          <Tab
            className={`px-3 py-1 rounded-t border-b`}
            onClick={() => setJobCategory("on-site")}
          >
            On-site Jobs
          </Tab>
          <Tab
            className={`px-3 py-1 rounded-t border-b`}
            onClick={() => setJobCategory("remote")}
          >
            Remote Jobs
          </Tab>
          <Tab
            className={`px-3 py-1 rounded-t border-b`}
            onClick={() => setJobCategory("hybrid")}
          >
            Hybrid
          </Tab>
          <Tab
            className={`px-3 py-1 rounded-t border-b`}
            onClick={() => setJobCategory("part-time")}
          >
            Part Time
          </Tab>
        </TabList>
        <div className="container mx-auto px-2 lg:px-0 mt-5">
          <TabPanel>
            <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
            {jobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
            {/* <p>Pagination</p> */}
          </TabPanel>
          <TabPanel>
            <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
            {jobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
            {/* <p>Pagination</p> */}
          </TabPanel>
          <TabPanel>
            <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
            {jobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
            {/* <p>Pagination</p> */}
          </TabPanel>
          <TabPanel>
            <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
            {jobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
            {/* <p>Pagination</p> */}
          </TabPanel>
          <TabPanel>
            <h3 className="font-bold mb-4">Total job: {jobs.length}</h3>
            {jobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
            {/* <p>Pagination</p> */}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default JobCategory;
