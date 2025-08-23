import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { policyDetails } from "../../contants";

interface PolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const PolicyDetailModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);


    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
         onClick={onClose}
        >
            <div
             onClick={(e) => e.stopPropagation()}
             className="bg-background-card text-white p-6 rounded-2xl shadow-2xl w-[400px]">

                <div className="flex justify-between items-center mb-4 pb-5 border-b border-blue">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-white font-Outfit text-xl'>
                            Policy details
                        </h1>
                        <p className="text-gray-500 font-Outfit text-sm">
                            View the comprehensive detials fo your active insurance policy.
                        </p>
                    </div>

                    <button onClick={onClose} className="text-gray-400 text-xl hover:text-white">
                        ✕
                    </button>
                </div>
                {
                    policyDetails.map((item) => (
                        <div key={item.id} className="border-b pb-5 border-blue my-5 flex justify-between">
                            <h1 className="block text-sm font-Outfit text-gray-400">{item.label}</h1>
                            <h1 className="block text-sm font-Outfit  text-white">{item.value}</h1>
                        </div>
                    ))

                }




                <div className="flex gap-5 justify-end">
                    <Button onClick={onClose} className="mt-6 bg-gray-700 font-Outfit text-white py-2 rounded-md font-medium transition">
                        Close
                    </Button>

                    <Button className="mt-6 bg-blue font-Outfit text-white py-2 rounded-md font-medium transition">
                        Manage Policy
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default PolicyDetailModal
