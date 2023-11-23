import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://jobplus-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("logout the user");
          const loggedUser = { email: user?.email };
          logout()
            .then(() => {
              axiosInstance
                .post("/logout", loggedUser)
                .then((data) => {
                  console.log(data.data);
                });
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );
  }, [logout, navigate, user]);

  return axiosInstance;
};

export default useAxios;
