import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (userProfile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userProfile);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // if (currentUser?.email) {
            //     const userData = { email: currentUser.email };
            //     axios
            //         .post("https://career-code-server-zeta.vercel.app/jwt", userData, {
            //             withCredentials: true,
            //         })
            //         .then((res) => {
            //             console.log(res);
            //         })
            //         .catch((error) => {
            //             toast.error(error.message);
            //         });
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        updateUserProfile,
    };

    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
