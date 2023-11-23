import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const Profile = () => {
  const { user, logout } = useAuth();
  const axios = useAxios();
  const loggedUser = { email: user?.email };

  // Handle logout user
  const handleLogout = () => {
    logout()
      .then(() => {
        axios
          .post("/logout", loggedUser)
          .then((data) => {
            console.log(data.data);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      {!user ? (
        <Link to={`/login`} className="w-full">
          <button className="bg-[#FF5200] py-2 px-3 w-full rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
            Login
          </button>
        </Link>
      ) : (
        <div className="dropdown dropdown-end">
          <label
            title={user?.displayName}
            tabIndex={0}
            className="avatar btn btn-circle border-4 border-[#FF5200] hover:border-[#FF5200]"
          >
            <div className="w-10 rounded-full">
              <img alt="" src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-fit"
          >
            <li className="text-center">
              <a className="text-center inline-block font-bold capitalize">
                {user?.displayName}
              </a>
            </li>
            <li>
              <a>{user?.email}</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
