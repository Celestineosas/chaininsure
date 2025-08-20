import React, { useState } from "react";
import { Button } from "../Button/Button";

interface InsuranceModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const InsureNow: React.FC<InsuranceModalProps> = ({ isOpen, onClose }) => {
     if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-background-card text-white p-6 rounded-2xl shadow-2xl w-[400px]">

                <div className="flex justify-between items-center mb-4">
                    <h1 className='text-white font-Outfit text-xl'>
                        Insure Now
                    </h1>
                    <button onClick={onClose} className="text-gray-400 text-xl hover:text-white">
                        ✕
                    </button>
                </div>

                <div className="border-t pt-5 border-gray-700 my-2"></div>


                <h1 className="block text-sm font-Outfit mb-3 text-gray-400">Asset Details</h1>
                <div className="bg-neutral-800 p-2 rounded-lg mb-4 flex gap-3 flex-col">
                    <p className="font-semibold font-Outfit">Bored Ape Yacht Club #8817</p>
                    <p className="text-sm text-gray-400 font-Outfit">
                        A unique digital collectible from the BAYC <br /> collection.
                    </p>
                </div>


                <div className="space-y-3">
                    <div className="flex gap-2">
                        <div>
                            <h1 className="block text-sm font-Outfit mb-3 text-gray-400">Asset Value</h1>
                            <input
                                type="text"
                                defaultValue="€30.5"
                                className="w-full bg-neutral-800 font-Outfit p-2 rounded-md border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <h1 className="block text-sm  font-Outfit mb-3 text-gray-400">Coverage Amount</h1>
                            <input
                                type="text"
                                defaultValue="€30.5"
                                className="w-full bg-neutral-800 font-Outfit p-2 rounded-md border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                    </div>


                    <div>
                        <h1 className="block text-sm font-Outfit mb-3 text-gray-400">Premium</h1>            <input
                            type="text"
                            defaultValue="€0.1525"
                            className="w-full bg-neutral-800 p-2 rounded font-Outfit-md border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>

               
                <Button className="mt-6 w-full bg-blue font-Outfit text-white py-2 rounded-md font-medium transition">
                    Confirm & Purchase
                </Button>
            </div>
        </div>
    );
}

export default InsureNow
