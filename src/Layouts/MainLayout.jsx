import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[#ff51002b]">
          <div className="container mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="grow">
              <h2 className="text-4xl font-bold">
                Job<span className="text-[#FF5200]">Plus</span>
              </h2>
            </div>
            <div className="grow hidden lg:block">
              <div className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <Navbar />
              </div>
            </div>
            <div>
              <button className="btn">Profile</button>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
MainLayout.propTypes = {
  children: PropTypes.node,
};
