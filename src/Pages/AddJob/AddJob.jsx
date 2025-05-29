import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jobApplication = Object.fromEntries(formData.entries());
        // console.log(jobApplication);
        const { min, max, currency, ...newJob } = jobApplication;
        newJob.salaryRange = {
            min,
            max,
            currency,
        };
        newJob.requirements = newJob.requirements
            .split(",")
            .map((req) => req.trim());
        newJob.responsibilities = newJob.responsibilities
            .split(",")
            .map((res) => res.trim());
        newJob.status = "Active";
        console.log(newJob);

        // save to the database
        axios.post("http://localhost:3000/jobs", newJob)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Job Added Successfully");
                } else {
                    toast.error("Failed to add job");
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="mb-10 mt-5 flex justify-center items-center flex-col">
            <div className="mb-3">
                <h1 className="text-3xl font-bold">
                    Please fill this form to add Job
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Basic Details */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Basic details</legend>

                    <label className="label">Job Title</label>
                    <input
                        name="title"
                        type="text"
                        className="input w-full"
                        placeholder="Job Title"
                    />

                    <label className="label">Company</label>
                    <input
                        name="company"
                        type="text"
                        className="input w-full"
                        placeholder="Company Name"
                    />

                    <label className="label">Location</label>
                    <input
                        name="location"
                        type="text"
                        className="input w-full"
                        placeholder="Company Location"
                    />

                    <label className="label">Company Logo</label>
                    <input
                        name="company_logo"
                        type="url"
                        className="input w-full"
                        placeholder="Company Logo URL"
                    />
                </fieldset>

                {/* JOb Type  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="jobType"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Remote"
                            value={"Remote"}
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="On-Site"
                            value={"On-Site"}
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Hybrid"
                            value={"Hybrid"}
                        />
                    </div>
                </fieldset>

                {/* Job Category  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select
                        defaultValue="Choose a Job Category"
                        name="category"
                        className="select w-full">
                        <option disabled={true}>Choose a Job Category</option>
                        <option>Network Engineer</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Dev Ops</option>
                        <option>Full Stack Developer</option>
                        <option>Back-End Developer</option>
                        <option>Front-End Developer</option>
                    </select>
                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">
                        Application Deadline
                    </legend>
                    <input
                        type="date"
                        name="deadline"
                        className="input w-full"></input>
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                name="min"
                                type="text"
                                className="input"
                                placeholder="Minimum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                                name="max"
                                type="text"
                                className="input"
                                placeholder="Maximum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Choose a Currency"
                                name="currency"
                                className="select w-full">
                                <option disabled={true}>
                                    Choose a Currency
                                </option>
                                <option>BDT</option>
                                <option>INR</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>AUD</option>
                                <option>CAD</option>
                                <option>GBP</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea
                        className="textarea w-full"
                        name="description"
                        placeholder="Enter your Job Description"></textarea>
                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">
                        Job Requirements
                    </legend>
                    <textarea
                        className="textarea w-full"
                        name="requirements"
                        placeholder="Enter your Job Requirements (Separate by Commas)"></textarea>
                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">
                        Job Responsibilities
                    </legend>
                    <textarea
                        className="textarea w-full"
                        name="responsibilities"
                        placeholder="Enter your Job Responsibilities (Separate by Commas)"></textarea>
                </fieldset>

                {/* HR Details */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input
                        name="hr_name"
                        type="text"
                        className="input w-full"
                        placeholder="Enter HR Name"
                    />

                    <label className="label">HR Email</label>
                    <input
                        defaultValue={user.email}
                        readOnly
                        name="hr_email"
                        type="email"
                        className="input w-full"
                        placeholder="Enter HR Email"
                    />
                </fieldset>

                <div className="mt-4 flex justify-center">
                    <input
                        className="btn btn-primary w-full"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddJob;
