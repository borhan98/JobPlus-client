import { useState } from "react";
import { CiBadgeDollar, CiLocationOn, CiTimer } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  FaCalendarAlt,
  FaChessBishop,
  FaHeart,
  FaRegHeart,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import useAxios from "../Hooks/useAxios";

const MyJob = ({ job, myjobs, setMyJobs }) => {
  const [love, setLove] = useState(false);
  const axios = useAxios();
  const {
    _id,
    job_author,
    job_title,
    location,
    job_category,
    salary_range,
    total_applied,
    posting_date,
    deadline,
  } = job;

  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          // Delete API
          axios.delete(`/jobs/${id}`)
          .then(data => {
            if (data.data.deletedCount) {
                const remaining = myjobs.filter(job => job._id !== id);
                setMyJobs(remaining);
            }
          })
          .catch(err => {
            console.log(err.message);
          })
        }
      });
  }

  return (
    <div className="grid gap-2 grid-cols-12 p-4 bg-base-100 items-center border-b border-l border-r mb-8 rounded-md">
      <div className="col-span-2 border-r">
        <h5>Job Author:</h5>
        <h3 className="text-xl font-medium">{job_author}</h3>
      </div>
      <div className="col-span-7 border-r space-y-4">
        <h3 className="text-2xl font-semibold capitalize">{job_title}</h3>
        <div className="flex gap-5">
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiLocationOn />
            </span>
            <span>
              {location.city}, {location.country}
            </span>
          </p>
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiTimer />
            </span>
            <span>{job_category}</span>
          </p>
          <p className="flex items-center text-zinc-600">
            <span className="text-[#FF5200] text-xl mr-1">
              <CiBadgeDollar />
            </span>
            <span>{salary_range}</span>
          </p>
          <p
            className="flex items-center text-zinc-600"
            title={`Total Applied: ${0}`}
          >
            <span className="text-[#FF5200] text-xl mr-1">
              <FaChessBishop />
            </span>
            <span>{total_applied}</span>
          </p>
        </div>
      </div>
      <div className="col-span-3 space-y-1">
        <div className="flex gap-3">
          <span
            className="border border-[#FF5200] bg-[#ff510025] rounded-md flex items-center w-fit text-[#FF5200] py-2 px-3 text-xl"
            onClick={() => setLove(!love)}
          >
            {love ? <FaRegHeart /> : <FaHeart />}
          </span>
          <Link to={`/update/${_id}`}>
            <button className="border border-[#FF5200] text-[#FF5200] text-xl bg-[#ff510025] py-2 px-3 w-fit rounded-md font-bold tracking-wider duration-300 hover:bg-[#FF5200] hover:text-white">
              <FaEdit />
            </button>
          </Link>
          <Link>
            <button onClick={() => handleDelete(_id)} className="border border-[#FF5200] text-[#FF5200] text-xl bg-[#ff510025] py-2 px-3 w-fit rounded-md font-bold tracking-wider duration-300 hover:bg-[#FF5200] hover:text-white">
              <RiDeleteBin5Line />
            </button>
          </Link>
        </div>
        <div className="flex items-center text-zinc-600 font-medium">
          <span className="text-[#FF5200] mr-2">
            <FaCalendarAlt />
          </span>
          <p className="grid grid-cols-2">
            <span>Circular: </span>
            <span>{posting_date}</span>
          </p>
        </div>
        <div className="flex items-center text-zinc-600 font-medium">
          <span className="text-[#FF5200] mr-2">
            <FaCalendarAlt />
          </span>
          <p className="grid grid-cols-2">
            <span>Deadline: </span>
            <span>{deadline}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyJob;
MyJob.propTypes = {
  job: PropTypes.object.isRequired,
  myjobs: PropTypes.array.isRequired,
  setMyJobs: PropTypes.func.isRequired,
};
