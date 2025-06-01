import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: "https://career-code-server-zeta.vercel.app",
});

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth();

    axiosInstance.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.status === 401 || error.status === 403) {
                logOutUser()
                    .then(() => {})
                    .catch((error) => console.log(error.message));
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
