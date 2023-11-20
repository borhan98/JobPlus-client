import { Link } from "react-router-dom";


const Profile = () => {
    const isOk = true;
    return (
        <div>
              {isOk ? (
                <Link to={`/login`} className="w-full">
                  <button className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
                    Login
                  </button>
                </Link>
              ) : (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="avatar btn btn-circle border-4 border-[#FF5200]"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
    );
};

export default Profile;