import { IoClose } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const ApplyModal = ({ jobId, applied, setApplied }) => {
  const axios = useAxios();
  const { user } = useAuth();

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;
    const application = { jobId, name, email, resume };
    const applicant = { increaseApplicant: 1 };

    // application POST API
    axios.post("/applications", application).then((data) => {
      if (data.data.insertedId) {
        form.reset();
        toast.success("Application Successfull", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    });

    // handle applicant number
    axios.put(`/jobs/${jobId}`, applicant).then((data) => {
      if (data.data.modifiedCount) {
        setApplied(++applied);
      }
    });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-11/12 md:w-10/12 lg:w-[650px] bg-base-200">
        <div className="text-center mx-auto mt-6 mb-8">
          <h3 className="text-2xl font-medium text-zinc-600 mb-4">
            Apply Your Dream Job
          </h3>
        </div>
        <form onSubmit={handleSubmitApplication} className="space-y-6">
          {/* Name and Email Field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
                required
                id="email"
              />
            </div>
          </div>
          {/* Resume link field */}
          <div className="space-y-1">
            <label htmlFor="resume">Your resume</label>
            <input
              type="text"
              name="resume"
              placeholder="Enter resume link"
              className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-full"
              required
              id="resume"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600"
          >
            Submit Application
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="border border-zinc-600 btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
              <IoClose />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ApplyModal;
ApplyModal.propTypes = {
  jobId: PropTypes.string.isRequired,
  applied: PropTypes.number.isRequired,
  setApplied: PropTypes.func.isRequired,
};
