import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()

  if (loading) {
    return (
      <div className="w-fit mx-auto mt-10">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname ? location.pathname : ""} />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
