import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate()

    const submitHandle = () => {
        navigate('/dashboard');


    }
    const GoogleIcon = FcGoogle as unknown as React.FC
    const DiscordIcon = FaDiscord as unknown as React.FC

    return (
        <div className="lg:container mx-auto p-[80px] h-[100vh]">
            <div className="max-w-[648px] bg-background-card w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">

                <h3 className="text-3xl text-white text-center font-semibold font-Outfit mb-5 capitalize">Login </h3>

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
                    <input type="email" placeholder="Your Email..." className="w-full text-white bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Your Password..." className="w-full text-white bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full h-[50px] font-Outfit bg-blue rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5">Login</button>
                </form>
                <div className="flex justify-center items-center flex-col gap-1">
                    <span className="text-base text-white font-normal font-Outfit flex gap-2.5 mt-4">Want to join us? <p onClick={() => navigate("/register")} className="text-blue">Register</p></span>
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

export default Login;