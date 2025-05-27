import React from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { Link } from "react-router";

const JobCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        company,
        salaryRange,
        applicationDeadline,
        category,
        jobType,
        company_logo,
        requirements,
        description,
    } = job;
    return (
        <div>
            <div className="card bg-base-100 items-center shadow-lg py-4 border-2">
                <div className="flex items-center gap-4">
                    <figure className="w-12 h-12 rounded-full border-2 py-2 px-2">
                        <img src={company_logo} alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-2xl">{company}</h3>
                        <p className="text-sm flex gap-2 items-center">
                            <PiMapPinAreaFill />
                            {location}
                        </p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="font-bold">
                        Salary Range: {salaryRange.min} - {salaryRange.max}{" "}
                        {salaryRange.currency}
                    </p>
                    <p className="text-justify">{description}</p>
                    <div className="card-actions">
                        {requirements.map((skill, index) => (
                            <div key={index} className="badge badge-outline">
                                {skill}
                            </div>
                        ))}
                    </div>
                    <div className="font-bold">
                        <p>Job Type: {jobType}</p>
                        <p>Job Type: {category}</p>
                        <p>Last Date for Application: {applicationDeadline}</p>
                    </div>
                    <div className="justify-end card-actions">
                        <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
