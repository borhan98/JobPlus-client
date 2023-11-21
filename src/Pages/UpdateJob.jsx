import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axios = useAxios();
  const job = useLoaderData();
  const {
    _id,
    job_title,
    job_description,
    job_category,
    salary_range,
    company_logo,
    location,
    responsibilities,
    image,
  } = job;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.title.value;
    const job_category = form.category.value;
    const salary_range = form.salary.value;
    const posting_date = form.postingDate.value;
    const company_logo = form.conpany_logo.value;
    const locate = form.location.value;
    const location = { city: locate };
    const image = form.photo.value;
    const job_description = form.description.value;
    const responsibilities = [form.responsibilities.value];
    const deadline = startDate.toLocaleDateString();

    const updateJob = {
      job_title,
      job_description,
      job_category,
      salary_range,
      posting_date,
      company_logo,
      location,
      deadline,
      responsibilities,
      image,
    };
    
    // Update API
    axios.put(`/jobs/${_id}`, updateJob)
    .then(data => {
        if (data.data.modifiedCount) {
            Swal.fire({
                icon: "success",
                title: "Successfully updated",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            Swal.fire({
                icon: "warning",
                title: "You didn't update anything!",
            });
        }
    })

  };

  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <div className="text-center max-w-sm mx-auto mb-14 pt-10">
          <h3 className="text-2xl font-medium text-zinc-600 mb-4 border-b">
            Update the job: <span className="font-bold">{job_title}</span>
          </h3>
        </div>
        <form onSubmit={handleUpdate} className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email">Job title</label>
              <input
                type="text"
                name="title"
                defaultValue={job_title}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="email"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Job category</label>
              <select
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                id="email"
                name="category"
              >
                <option value={job_category}>{job_category}</option>
                <option value="on-site">On-site</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="salary">Salary range</label>
              <input
                type="text"
                name="salary"
                defaultValue={salary_range}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="salary"
              />
            </div>
            <div>
              <label htmlFor="posting_date">Posting date</label>
              <input
                type="text"
                name="postingDate"
                defaultValue={new Date().toLocaleDateString()}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="posting_date"
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location">Company location</label>
              <input
                type="text"
                name="location"
                defaultValue={location.city}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="location"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Application deadline</label>
              <DatePicker
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company_logo">Company logo URL</label>
              <input
                type="text"
                name="conpany_logo"
                defaultValue={company_logo}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                id="company_logo"
              />
            </div>
            <div>
              <label htmlFor="photo">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={image}
                className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="photo"
              />
            </div>
          </div>
          {/* Row 5 */}
          <div>
            <label htmlFor="description">Job description</label>
            <textarea
              name="description"
              defaultValue={job_description}
              className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          {/* Row 6 */}
          <div>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea
              name="responsibilities"
              defaultValue={responsibilities}
              className="border pl-3 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              id="responsibilities"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
