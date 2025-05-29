import React from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobs }) => {
    return (
        <div className="px-10 my-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                Hot Jobs of the Day....
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
