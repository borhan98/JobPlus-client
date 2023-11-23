import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axios = useAxios();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const job_author = form.name.value;
    const author_email = user?.email;
    const job_title = form.title.value;
    const job_category = form.category.value;
    const salary_range = form.salary.value;
    const posting_date = form.postingDate.value;
    const total_applied = form.applied.value;
    const company_logo = form.conpany_logo.value;
    const locate = form.location.value;
    const location = { city: locate };
    const image = form.photo.value;
    const job_description = form.description.value;
    const responsibilities = [form.responsibilities.value];
    const deadline = startDate.toLocaleDateString();

    const newJob = {
      job_author,
      author_email,
      job_title,
      job_description,
      job_category,
      salary_range,
      posting_date,
      total_applied,
      company_logo,
      location,
      deadline,
      responsibilities,
      image,
    };
    
    // POST to database
    axios.post("/jobs", newJob)
    .then(data => {
        if (data.data.insertedId) {
          form.reset()
          Swal.fire({
            icon: "success",
            title: "Successfully posted the job",
            showConfirmButton: false,
            timer: 1500
          });
        }
    })
    .catch(err => {
        console.log(err);
    })

  };

  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-2 lg:px-0">
        <div className="text-center max-w-sm mx-auto mb-14 pt-10">
          <h3 className="text-2xl font-medium text-zinc-600 mb-4 border-b">
            Post a new Job
          </h3>
        </div>
        <form onSubmit={handleAddJob} className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email">Your Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base rounded-md focus:outline-none focus:shadow-md w-full bg-base-100"
                required
                id="email"
                disabled
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full bg-base-100"
                required
                id="email"
                disabled
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email">Job title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter job title"
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                required
                id="email"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Job category</label>
              <select
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                id="email"
                name="category"
              >
                <option value="">Select One</option>
                <option value="on-site">On-site</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="salary">Salary range</label>
              <input
                type="text"
                name="salary"
                placeholder="Enter salary range"
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
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
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                required
                id="posting_date"
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="applied">Applicant&#39;s number</label>
              <input
                type="text"
                name="applied"
                defaultValue={0}
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                required
                id="applied"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Application deadline</label>
              <DatePicker
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company_logo">Company logo URL</label>
              <input
                type="text"
                name="conpany_logo"
                placeholder="Enter company logo URL"
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                id="company_logo"
              />
            </div>
            <div>
              <label htmlFor="location">Company location</label>
              <input
                type="text"
                name="location"
                placeholder="City name"
                className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
                required
                id="location"
              />
            </div>
          </div>
          <div>
            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter job banner photo URL"
              className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
              required
              id="photo"
            />
          </div>
          <div>
            <label htmlFor="description">Job description</label>
            <textarea
              name="description"
              placeholder="Enter job description"
              className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea
              name="responsibilities"
              placeholder="Enter job responsibilities"
              className="border pl-1 md:pl-3 py-2 md:py-4 text-sm md:text-base focus:outline-none focus:shadow-md w-full"
              id="responsibilities"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600"
          >
            Add Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
