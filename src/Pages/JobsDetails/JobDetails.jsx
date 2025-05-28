import { Link, useLoaderData } from "react-router";

const JobDetailsPage = () => {
    const job = useLoaderData(); // loader provides job object

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
        <div className="flex flex-col mt-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-2">
                <img
                    src={company_logo}
                    alt={`${company} Logo`}
                    className="h-16 w-16 rounded-full"
                />
                <div>
                    <p className="text-xl font-bold">{company}</p>
                    <p className="text-xl font-bold">{location}</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 space-y-6">
                {/* Job Title and Description */}
                <div className="p-4 bg-white shadow rounded-2xl">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-gray-600">{description}</p>
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Job Details */}
                    <div className="p-4 bg-white shadow rounded-2xl">
                        <h2 className="font-semibold text-lg">Job Details</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <strong>Location:</strong> {location}
                            </li>
                            <li>
                                <strong>Company:</strong> {company}
                            </li>
                            <li>
                                <strong>Category:</strong> {category}
                            </li>
                            <li>
                                <strong>Job Type:</strong> {jobType}
                            </li>
                            <li>
                                <strong>Salary Range:</strong> {salaryRange.min}{" "}
                                - {salaryRange.max} {salaryRange.currency}
                            </li>
                            <li>
                                <strong>Application Deadline:</strong>{" "}
                                {applicationDeadline}
                            </li>
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="p-4 bg-white shadow rounded-2xl">
                        <h2 className="font-semibold text-lg">Requirements</h2>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                            {requirements?.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-end">
                    <Link to={`/jobApply/${_id}`}>
                        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default JobDetailsPage;
