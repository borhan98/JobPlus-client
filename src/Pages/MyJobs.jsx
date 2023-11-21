import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const MyJobs = () => {
  const { user } = useAuth();
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`/jobs?email=${user.email}`)
      .then((data) => console.log(data.data));
  }, [axios, user.email]);

  return (
    <div className="container mx-auto my-10">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-2xl font-medium text-zinc-600 mb-4">
          All jobs you have added
        </h3>
        <p className="text-zinc-600">
          Your Job Collection. A quick view of all the opportunities you&#39;ve
          added. Stay organized, track progress, and make informed decisions
          effortlessly in one place
        </p>
      </div>
    </div>
  );
};

export default MyJobs;
