import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import ErrorPage from "../Pages/ErrorPage";
import JobDetails from "../components/JobDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../Pages/AddJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import AppliedJobs from "../Pages/AppliedJobs";
import Blogs from "../Pages/Blogs";


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
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "appliedjobs",
                element: <PrivateRoute><AppliedJobs /></PrivateRoute>
            },
            {
                path: "addjob",
                element: <AddJob />
            },
            {
                path: "myjobs",
                element: <PrivateRoute><MyJobs /></PrivateRoute>
            },
            {
                path: "update/:id",
                element: <PrivateRoute><UpdateJob /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs />
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