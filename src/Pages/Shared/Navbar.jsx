import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    const links = (
        <>
            <li>
                {" "}
                <NavLink to="/">Home</NavLink>{" "}
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="myApplication">My Application</NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>{" "}
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            className="w-16"
                            src="https://i.ibb.co/HTQ33ygY/Logo.png"
                            alt=""
                        />
                        <a className="text-xl font-bold">{"{DevCode}"}</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ? (
                        <>
                            <button
                                onClick={handleLogOut}
                                className="btn btn-neutral">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="btn">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="btn">
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
