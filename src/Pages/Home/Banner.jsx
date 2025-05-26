import React from "react";
import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/team/team-1-min.jpg";
import team2 from "../../assets/team/team-2-min.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{
                            y: [100, 150, 100],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            // repeatType: "reverse", // <--- Makes it go back smoothly
                            ease: "easeInOut",
                        }}
                        className="md:max-w-sm w-auto rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{
                            x: [250, 100, 250],
                        }}
                        transition={{
                            duration: 6,
                            delay: 2,
                            repeat: Infinity,
                            // repeatType: "reverse", // <--- Makes it go back smoothly
                            ease: "easeInOut",
                        }}
                        className="md:max-w-sm w-auto rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <div className="inline-block">
                        <motion.h1
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-5xl font-bold">
                            Remote{" "}
                            <motion.span
                                animate={{
                                    color: [
                                        "#19cc15",
                                        "#1588cc",
                                        "#8915cc",
                                        "#cc155d",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}>
                                Job
                            </motion.span>{" "}
                            for you..!
                        </motion.h1>
                    </div>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
