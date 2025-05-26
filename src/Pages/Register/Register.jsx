import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/lotties/register.json";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div className="hero min-h-[calc(100vh-150px)]">
            <div className="hero-content flex-col-reverse justify-between lg:flex-row-reverse md:max-w-3xl w-full mx-auto shadow-2xl rounded-2xl md:py-10 md:px-10">
                <div className="text-center">
                    <Lottie className="w-52 md:w-72" animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl border-2 mb-10 md:mb-0">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                                <div>
                                    <a className="link link-hover">
                                        Forgot password?
                                    </a>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
