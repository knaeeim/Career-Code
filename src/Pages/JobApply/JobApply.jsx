import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});

    // Fetch job details if needed, e.g., using useEffect
    useEffect(() => {
        axios.get(`https://career-code-server-zeta.vercel.app/jobs/${id}`)
            .then((res) => {
                setJobDetails(res.data);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }, [id]);

    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const applyInfo = Object.fromEntries(formData.entries());
        console.log(applyInfo);

        // post data in the server
        axios
            .post("https://career-code-server-zeta.vercel.app/applications", applyInfo)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Application submitted successfully!");
                    form.reset();
                }
            })
            .catch((error) => {
                toast.error(error.message);
                console.log(error.message);
            });
    };

    return (
        <div className="w-8/12 mx-auto my-10">
            <div className="flex gap-2 justify-center items-center mb-5">
                <img className="w-14" src={jobDetails.company_logo} alt="" />
                <div>
                    <p className="text-xl font-bold">{jobDetails.company}</p>
                    <p className="text-xl font-bold">{jobDetails.location}</p>
                </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-5">
                Please Fill the form to apply for this job. <br /> Position Name : <span className="font-bold text-blue-700">"{jobDetails.title}"</span>
            </h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleApply}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Applicant Name"
                            defaultValue={user?.displayName || ""}
                        />

                        <label className="label mt-4">Email</label>
                        <input
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            type="text"
                            className="input"
                            placeholder="my-awesome-page"
                        />

                        <label className="label mt-4">Job Id</label>
                        <input
                            defaultValue={id}
                            name="jobId"
                            readOnly
                            type="text"
                            className="input"
                            placeholder="Name"
                        />

                        <label className="label mt-4">CV Link</label>
                        <input
                            name="cvUrl"
                            type="url"
                            className="input"
                            placeholder="Enter your CV link"
                        />

                        <div className="flex justify-center items-center mt-5">
                            <input
                                type="submit"
                                value={"Apply"}
                                className="btn btn-primary btn-sm"
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
