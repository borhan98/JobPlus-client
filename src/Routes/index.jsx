import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import ErrorPage from "../Pages/ErrorPage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "alljobs",
                element: <AllJobs />
            }
        ]
    }
])

export default routes