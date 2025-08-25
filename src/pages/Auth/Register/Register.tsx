import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { newUser } from "../../../features/userSlice";
import { useAppDispatch } from "../../../app/hoot";
import React, { useState } from "react";


const Register = () => {
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    const submitHandle = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(newUser(userName))
        navigate('/check');
    }

    const GoogleIcon = FcGoogle as unknown as React.FC
    const DiscordIcon = FaDiscord as unknown as React.FC
    const dispatch = useAppDispatch();

    return (
        <div className="lg:container h-[100vh] mx-auto p-[80px] max-sm:p-[50px]">


            <div className="max-w-[648px] bg-background-card w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">

                <h3 className="text-3xl text-white text-center font-semibold font-Outfit mb-5 capitalize">Register </h3>

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
                    <input type="text" placeholder="Your Name..." className="w-full text-white bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input type="email" placeholder="Your Email..." className="w-full text-white bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Your Password..." className="w-full text-white bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-5005" />
                    <button type="submit" className="w-full h-[50px] font-Outfit bg-blue rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5">Register</button>
                </form>
                <div className="flex justify-center items-center flex-col gap-1 cursor-pointer">
                    <span className="text-base text-white font-normal font-Outfit flex gap-2.5 mt-4">One of us? <p onClick={() => navigate('/login')} className="text-blue">Login</p></span>
                    <div className="flex gap-2 items-center justify-center mt-3">
                        <GoogleIcon />
                        <a href="#" className="text-[12px] text-gray-200 font-Outfit">Continue with Google?</a>
                    </div>
                    <div className="flex gap-2 items-center justify-center text-blue">
                        <DiscordIcon />
                        <a href="#" className="text-[12px] text-gray-300 font-Outfit">Continue with Discord?</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;