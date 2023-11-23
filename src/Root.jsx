import { Outlet, useLocation } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.split("/")[1]) {
      document.title = `JobPlus | Home`
    } else if (location.pathname.split("/")[1] === "alljobs") {
      document.title = `JobPlus | All Jobs`
    } else if (location.pathname.split("/")[1] === "appliedjobs") {
      document.title = `JobPlus | Applied Jobs`
    } else if (location.pathname.split("/")[1] === "addjob") {
      document.title = `JobPlus | Add a Job`
    } else if (location.pathname.split("/")[1] === "myjobs") {
      document.title = `JobPlus | My Jobs`
    } else if (location.pathname.split("/")[1] === "blogs") {
      document.title = `JobPlus | Blogs`
    }  else if (location.pathname.split("/")[1] === "login") {
      document.title = `JobPlus | Login`
    } else if (location.pathname.split("/")[1] === "register") {
      document.title = `JobPlus | Register`
    } else if (location.pathname.split("/")[1] === "jobdetails") {
      document.title = `JobPlus | Job Details`
    } else if (location.pathname.split("/")[1] === "update") {
      document.title = `JobPlus | Update Job`
    }  
    else {
      document.title = "JobPlus"
    }
  }, [location.pathname]);

  return (
    <MainLayout>
      <div>
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default Root;
