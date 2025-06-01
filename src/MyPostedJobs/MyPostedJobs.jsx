import React, { Suspense, useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import JobList from "./JobList";
import useJobApi from "../api/useJobApi";
import Loading from "../Pages/LaodingPage/Loading";
import toast from "react-hot-toast";

const MyPostedJobs = () => {
    const { user } = useAuth();
    const { jobsCreatedByPromise } = useJobApi()
    const [jobs, setJobs] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        if(user?.email){
            jobsCreatedByPromise(user?.email)
            .then(res => {
                setIsLoading(false)
                setJobs(res)
            })
            .catch((err) => toast.error(err.message))
        }
    }, [user?.email, jobsCreatedByPromise])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Suspense>
                <JobList
                    postedJobs={jobs}>
                </JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
