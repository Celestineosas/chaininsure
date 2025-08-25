import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hoot';
import { User } from '../../assets';
import { bottomTItems, ticketBottom, ticketTopT, topT } from '../../contants';
import TicketModal from '../../components/TicketModal/TiicketModal';
import Timer from '../../components/Timer/Timer';
import { FaRegTrashAlt } from "react-icons/fa";
import { expireTicket } from '../../features/ticketSlice';


const TicketDashboard = () => {

    const [showUserProfile, setShowUserProfile] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


    const ticket = useAppSelector((state) => state.tickets.activeTickets)
    const expiredTickets = useAppSelector((state) => state.tickets.expiredTickets)

      const TrashIcon = FaRegTrashAlt as unknown as React.FC
      const dispatch = useAppDispatch();

      

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <section className='max-container flex items-start justify-start w-full padding-x padding-y bg-background-main h-[100vh] overflow-x-auto'>
            <div className='flex flex-col w-full gap-5'>
                <div className='flex -mt-5 items-center justify-between w-full text-white'>
                    <h1 className='text-white font-Outfit text-lg'>
                        Hello
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
                                    <p onClick={() => { location.pathname === "/tickets" ? navigate('/dashboard'): navigate('/tickets')  } } className='hover:opacity-45'>{ location.pathname === "/tickets" ? "NFT": "Tickets"  }</p>
                                    <p onClick={() => navigate('/login')} className='hover:opacity-45'>Logout</p>
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
                        >Insure Ticket</Button>
                    </div>
                </div>
                <div className='flex w-full flex-col gap-4 mt-5'>
                    <div className='flex flex-col gap-5 w-full overflow-x-auto'>
                        <div className="p-6 overflow-x-auto bg-[#191B1F] rounded-[10px]">
                            <h1 className='text-white font-Outfit text-lg mb-3'>
                                Active Insured Tickets
                            </h1>
                            {
                                ticket.length === 0 ? (
                                    <div className='text-white flex flex-col gap-5 items-center justify-center w-full h-[50vh]'>
                                        <h2 className='text-4xl rotate-90'>:(</h2>
                                        <div
                                            onClick={() => setIsCreateModalOpen(true)}
                                            className=''>
                                            <Button
                                                size="normal"
                                                variant="normal"
                                                className='hover:opacity-70 max-lg:px-5'
                                            >Insure Ticket</Button>
                                        </div>
                                    </div>) : (
                                    <div className="flex flex-col mt-5 min-w-[700px] overflow-x-auto w-full border-separate border-spacing-y-5">
                                        <div className="grid justify-center items-center w-full grid-cols-3">
                                            {ticketTopT.map((item) => (
                                                <div key={item.id} className="p-3 rounded-sm font-Outfit font-semibold text-sm text-gray-500">{item.label}</div>
                                            ))}
                                        </div>
                                        {ticket.map((item) => (
                                            <div
                                                key={item.id}
                                                className="grid mt-2 py-3 grid-cols-4 text-sm font-Outline border-t border-gray-700"
                                            >


                                                <h2 className="text-white font-Outfit text-sm whitespace-nowrap">
                                                    {item.eventName}
                                                </h2>

                                                <div className="font-Outfit text-white flex items-center justify-center text-center">
                                                    {item.id.slice(0, 5)}...{item.id.slice(-3)}
                                                </div>
                                                <div
                                                    className="font-Outfit flex items-center justify-end text-white"
                                                >
                                                    <Timer id={item.id} endDate={item.endDate} />
                                                </div>

                                                <div
                                                    className="flex gap-2 items-center justify-end">
                                                    <Button
                                                        className="font-Outfit px-3 bg-green-500"
                                                        size="normal"
                                                        variant="normal"
                                                    >
                                                        More
                                                    </Button>
                                                    <Button
                                                        onClick={() => dispatch(expireTicket(item.id)) }
                                                        className="font-Outfit px-3 bg-gray-500"
                                                        size="normal"
                                                        variant="normal"
                                                    >
                                                        <TrashIcon />
                                                    </Button>
                                                </div>

                                            </div>
                                        ))}

                                    </div>)
                            }

                        </div>

                        {
                            expiredTickets.length !== 0 ?
                                <div className="p-6 overflow-x-auto bg-[#191B1F] rounded-[10px]">
                                    <h1 className='text-white font-Outfit text-lg mb-3'>
                                        Expired Tickets
                                    </h1>
                                    <div className="flex flex-col mt-5 min-w-[700px] overflow-x-auto w-full border-separate border-spacing-y-5">
                                        <div className="grid justify-center items-center w-full grid-cols-3">
                                            {ticketTopT.map((item) => (
                                                <div key={item.id} className="p-3 rounded-sm font-Outfit font-semibold text-sm text-gray-500">{item.label}</div>
                                            ))}
                                        </div>
                                        {expiredTickets.map((item) => (
                                            <div
                                                key={item.id}
                                                className="grid mt-2 py-3 grid-cols-4 text-sm font-Outline border-t border-gray-700"
                                            >

                                                <h2 className="text-white font-Outfit text-sm whitespace-nowrap">
                                                    {item.eventName}
                                                </h2>

                                                <div className="font-Outfit text-white flex items-center justify-center text-center">
                                                    {item.id.slice(0, 5)}...{item.id.slice(-3)}
                                                </div>
                                                <div
                                                    className="font-Outfit flex items-center justify-end text-white"
                                                >
                                                    {item.endDate}
                                                </div>

                                                <div
                                                    className="flex items-center justify-end">
                                                    <Button
                                                        className="font-Outfit px-5 bg-gray-500"
                                                        size="normal"
                                                        variant="normal"
                                                    >
                                                        View Details
                                                    </Button>
                                                </div>

                                            </div>
                                        ))}

                                    </div>



                                </div>
                                : null
                        }




                    </div>
                </div>


            </div>



            {/* Modals */}
            <TicketModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />


        </section >
    )
}

export default TicketDashboard
