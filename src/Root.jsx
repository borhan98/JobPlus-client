import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";

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
