import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import ErrorPage from "../Pages/ErrorPage";
import JobDetails from "../components/JobDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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
            },
            {
                path: "jobdetails/:id",
                element: <JobDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])

export default routes