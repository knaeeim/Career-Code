import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const MyApplication = () => {
    const { user } = useAuth();
    const [myApplication, setMyApplication] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/applications?email=${user.email}`)
            .then((res) => {
                setMyApplication(res.data);
                console.log(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, [user.email]);

    return (
        <div className="my-10">
            <div className="my-5">
                <h1 className="text-3xl font-bold text-center">So Far You have applied for these Jobs</h1>
            </div>
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Email and Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {myApplication.map((app) => (
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={app.company_logo}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-start font-bold">
                                            {app.company}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {app.location}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">
                                    {app.title}
                                </span>
                            </td>
                            <td>
                                {app.name}
                                <br />
                                {app.email}
                            </td>
                            <th>
                                <button className="btn btn-warning btn-xs">
                                    Delete
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyApplication;
