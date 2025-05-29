import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
    const { id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (event, application) => {
        const selectedStatus = event.target.value;
        console.log(application);
        axios.patch(`http://localhost:3000/applications/${application}`, {status: selectedStatus})
        .then(res => {
            if(res.data.modifiedCount) {
                toast.success("Status updated successfully");
            }
        })
        .catch(error => {
            toast.error("Failed to update status: " + error.message);
        })
    }

    return (
        <div className="my-10">
            <div className="mb-5">
                <h1 className="text-2xl text-center">
                    {applications.length} Application for : {id}
                </h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Applicant Email</th>
                                <th>Applicants</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {applications.map((application, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{application.name}</td>
                                    <td>{application.email}</td>
                                    <td>{application.email}</td>
                                    <td>
                                        <select onChange={(e) => handleStatusChange(e, application._id)}
                                            defaultValue={application.status}
                                            className="select">
                                            <option disabled={true}>
                                                Update status
                                            </option>
                                            <option>Pending</option>
                                            <option>Call for Interview</option>
                                            <option>Accepted</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;
