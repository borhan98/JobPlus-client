import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import MyJob from "../components/MyJob";
import NoDataImage from "../assets/images/no-data.png";

const MyJobs = () => {
  const [myjobs, setMyJobs] = useState([]);
  const { user } = useAuth();
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/jobs?email=${user.email}`).then((data) => setMyJobs(data.data));
  }, [axios, user.email]);

  return (
    <div className="container mx-auto my-10">
      {myjobs.length ? (
        <>
          <div className="text-center max-w-xl mx-auto mb-14">
            <h3 className="text-2xl font-medium text-zinc-600 mb-4">
              All jobs you have added
            </h3>
            <p className="text-zinc-600">
              Your Job Collection. A quick view of all the opportunities
              you&#39;ve added. Stay organized, track progress, and make
              informed decisions effortlessly in one place
            </p>
          </div>
          <h3 className="font-bold mb-4">
            Total:
            {myjobs.length}
          </h3>
        </>
      ) : (
        <>
          <p className="text-2xl font-bold text-center">
            You didn&#39;t post any job yet
          </p>
          <figure className="flex justify-center">
            <img src={NoDataImage} alt="No Data Found Image" />
          </figure>
        </>
      )}
      {myjobs.map((job) => (
        <MyJob key={job._id} job={job} myjobs={myjobs} setMyJobs={setMyJobs} />
      ))}
    </div>
  );
};

export default MyJobs;
