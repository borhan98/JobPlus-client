import Banner from "../components/Banner";
import FeatureJobs from "../components/FeatureJobs";
import JobCategory from "../components/JobCategory";
import Newsletter from "../components/Newsletter";


const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategory />
            <FeatureJobs />
            <Newsletter />
        </div>
    );
};

export default Home;