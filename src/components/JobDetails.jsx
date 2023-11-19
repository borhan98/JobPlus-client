import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const {_id} = useLoaderData();
    
    return (
        <div>
            job details about : {_id}
        </div>
    );
};

export default JobDetails;