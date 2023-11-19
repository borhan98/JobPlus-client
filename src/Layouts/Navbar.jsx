import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeRoute = ({ isActive }) =>
    isActive
      ? "bg-[#FF5200] py-2 px-3 rounded-md text-white"
      : "py-2 px-3 rounded-md";
  return (
    <>
      <NavLink className={activeRoute} to={"/"}>
        Home
      </NavLink>
      <NavLink className={activeRoute} to={"/alljobs"}>
        All Jobs
      </NavLink>
      <NavLink className={activeRoute} to={"/appliedjobs"}>
        Applied Jobs
      </NavLink>
      <NavLink className={activeRoute} to={"/addjob"}>
        Add a Job
      </NavLink>
      <NavLink className={activeRoute} to={"/blogs"}>
        Blogs
      </NavLink>
    </>
  );
};

export default Navbar;
