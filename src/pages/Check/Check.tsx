import React from 'react'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router'

const Check = () => {

    const navigate = useNavigate();
    return (
        <div className="lg:container bg-background-main w-full text-white h-[100vh] mx-auto  py-[150px] max-sm:px-[50px] ">
            <div className="flex justify-center gap-3 mt-6">
                <Button
                    onClick={()  => navigate("/tickets")}
                    className="mt-4 bg-gray-700 font-Outfit text-white py-3 rounded-none font-medium transition"
                >
                    TICKET HOLDER
                </Button>
                <Button
                    onClick={()  => navigate("/dashboard")}
                    className="mt-4 bg-blue font-Outfit text-white py-3 rounded-none font-medium transition"
                >
                    NFT HOLDER
                </Button>
            </div>
        </div>
    )
}

export default Check
