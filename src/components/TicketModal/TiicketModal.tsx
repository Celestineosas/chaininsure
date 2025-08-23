import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";

interface TicketModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
    const [eventName, setEventName] = useState("");
    const [ticketAmount, setTicketAmount] = useState<number | "">("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleProceed = () => {
    
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={onClose}
        >
            <div

                className="bg-background-card rounded-2xl shadow-xl p-6 w-full max-w-lg mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h1

                    className="text-white font-Outfit text-lg mb-6 text-center"
                >
                    Create Ticket
                </h1>


                <div className="space-y-5">
                    <div>
                        <label className="block font-Outfit text-sm mb-2 text-gray-300">
                            Event Name
                        </label>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder="e.g., Music Festival"
                            className="w-full bg-gray-700 text-white font-Outfit border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-Outfit text-sm mb-2 text-gray-300">
                            Amount of Ticket (USD)
                        </label>
                        <input
                            type="number"
                            value={ticketAmount}
                            onChange={(e) =>
                                setTicketAmount(e.target.value ? Number(e.target.value) : "")
                            }
                            placeholder="e.g., 50"
                            className="w-full bg-gray-700 text-white font-Outfit border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-5 w-full">
                        <div>
                            <label className="block font-Outfit text-sm mb-2 text-gray-300">
                                Start Date
                            </label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full bg-gray-700 text-white font-Outfit border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block font-Outfit text-sm mb-2 text-gray-300">
                                End Date
                            </label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full bg-gray-700 text-white font-Outfit border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                </div>

              
                <div className="flex justify-end gap-3 mt-6">
                    <Button
                        onClick={onClose}
                        className="mt-4 bg-gray-700 font-Outfit text-white py-2 rounded-md font-medium transition"
                    >
                        Close
                    </Button>
                    <Button
                        onClick={handleProceed}
                        className="mt-4 bg-blue font-Outfit text-white py-2 rounded-md font-medium transition"
                    >
                        Proceed
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TicketModal;
