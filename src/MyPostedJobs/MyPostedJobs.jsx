import React, { Suspense } from "react";
import useAuth from "../Hooks/useAuth";
import JobList from "./JobList";
import { jobsCreatedByPromise } from "../api/jobsapi";

const MyPostedJobs = () => {
    const { user } = useAuth();

    return (
        <div>
            <Suspense>
                <JobList
                    jobsCreatedByPromise={jobsCreatedByPromise(
                        user.email
                    )}>
                </JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
