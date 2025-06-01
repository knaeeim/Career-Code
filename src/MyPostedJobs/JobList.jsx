import React from "react";
import { Link } from "react-router";
import Loading from "../Pages/LaodingPage/Loading";

const JobList = ({ postedJobs }) => {

    const jobs = postedJobs;

    return (
        <div className="my-10">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-center">Jobs Created by You : {jobs.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company Name</th>
                                <th>Job Role</th>
                                <th>Applicants</th>
                                <th>View Applications</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows*/}
                            {
                                jobs.map((job, index) => (
                                    <tr key={job._id}>
                                        <th>{index + 1}</th>
                                        <td>{job.company}</td>
                                        <td>{job.title}</td>
                                        <td>{job?.applicationsCount}</td>
                                        <td><Link className="btn btn-sm" to={`/applications/${job._id}`}>Details</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobList;
