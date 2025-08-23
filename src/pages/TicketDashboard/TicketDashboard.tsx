import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../app/hoot';
import { User } from '../../assets';
import { bottomTItems, ticketBottom, ticketTopT, topT } from '../../contants';
import TicketModal from '../../components/TicketModal/TiicketModal';


const TicketDashboard = () => {


    const [showUserProfile, setShowUserProfile] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


    const userName = useAppSelector((state) => state.user.user)



    const navigate = useNavigate()
    return (
        <section className='max-container flex items-start justify-start w-full padding-x padding-y bg-background-main h-[100vh] overflow-x-auto'>
            <div className='flex flex-col w-full gap-5'>
                <div className='flex -mt-5 items-center justify-between w-full text-white'>
                    <h1 className='text-white font-Outfit text-lg'>
                        Hi, {userName}
                    </h1>
                    <div className='relative'>
                        <Button
                            onClick={() => setShowUserProfile(!showUserProfile)}
                            variant="ghost" size="icon" className='lg:hidden flex' >
                            <img src={User} alt="User" className="rounded-full border-2 border-blue" />
                        </Button>
                        {
                            showUserProfile && <div className='z-10 absolute right-0 font-Outfit'>

                                <Button
                                    onClick={() => setShowUserProfile(false)}
                                    size="normal"
                                    variant="normal"
                                    className='px-6 py-2 whitespace-nowrap bg-gray-600 lg:hidden flex gap-2 flex-col font-Outfit'
                                >
                                    <p className='hover:opacity-45'>Profile</p>
                                    <p onClick={() => navigate('/tickets')} className='hover:opacity-45'>Tickets</p>
                                    <p onClick={() => navigate('/register')} className='hover:opacity-45'>Logout</p>
                                </Button>

                            </div>
                        }
                    </div>

                </div>
                <div className='flex justify-between items-center gap-2 w-full mt-5'>
                    <h1 className='text-white font-Outfit text-xl'>
                        Ticket dasboard
                    </h1>
                    <div
                        onClick={() => setIsCreateModalOpen(true)}
                        className=''>
                        <Button
                            size="normal"
                            variant="normal"
                            className='hover:opacity-70 max-lg:px-5'
                        >Create Ticket</Button>
                    </div>
                </div>
                <div className='flex w-full flex-col gap-4 mt-5'>
                    <div className='flex flex-col w-full overflow-x-auto'>
                        <div className="p-6 overflow-x-auto bg-[#191B1F] rounded-[10px]">
                            <h1 className='text-white font-Outfit text-lg mb-3'>
                                Insured Tickets
                            </h1>
                            <div className="flex flex-col mt-5 min-w-[700px] overflow-x-auto w-full border-separate border-spacing-y-5">
                                <div className="grid justify-center items-center w-full grid-cols-3">
                                    {ticketTopT.map((item) => (
                                        <div key={item.id} className="p-3 rounded-sm font-Outfit font-semibold text-sm text-gray-500">{item.label}</div>
                                    ))}
                                </div>
                                {ticketBottom.map((item) => (
                                    <div
                                        key={item.id}
                                        className="grid mt-2 py-3 grid-cols-4 text-sm font-Outline border-t border-gray-700"
                                    >


                                        <h2 className="text-white font-Outfit text-sm whitespace-nowrap">
                                            {item.label}
                                        </h2>

                                        <div className="font-Outfit text-white flex items-center justify-center text-center">
                                            ${item.ticketID}
                                        </div>
                                        <div
                                            className="font-Outfit flex items-center justify-end text-white"
                                        >
                                            {item.date}
                                        </div>

                                        <div
                                            className="flex items-center justify-end">
                                            <Button
                                                className="font-Outfit px-5 bg-green-500"
                                                size="normal"
                                                variant="normal"
                                            >
                                                View Policy
                                            </Button>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>


            </div>



            {/* Modals */}
            <TicketModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />


        </section >
    )
}

export default TicketDashboard
