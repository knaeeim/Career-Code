import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import axios from "axios";


const Home = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        axios.get("https://career-code-server-zeta.vercel.app/jobs", { withCredentials: true })
        .then((res) => setJobs(res.data) )
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={"Loading..."}>
                <HotJobs jobs={jobs}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;
