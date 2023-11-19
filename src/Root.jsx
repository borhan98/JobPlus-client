import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const Root = () => {
  return (
    <MainLayout>
      <div>
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default Root;
