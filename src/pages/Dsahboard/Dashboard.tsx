import React, { useState } from 'react'
import { activeCoverage, bottomTItems, topT } from '../../contants'
import { text } from 'stream/consumers'
import { Button } from '../../components/Button/Button'
import { MdOutlineShield } from "react-icons/md";
import DashboardForm from '../../components/DashboardForm/DashboardForm';
import InsureNow from '../../components/InsureNow/InsureNow';
import PolicyDetailModal from '../../components/PolicyDetailModal/PolicyDetailModal';
import { User } from '../../assets';
import { useAppSelector } from '../../app/hoot';
import { useNavigate } from 'react-router';

const Dashboard = () => {

  const ShieldIcon = MdOutlineShield as unknown as React.FC

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  
  const [showUserProfile, setShowUserProfile] = useState(false);

  const userName = useAppSelector((state) => state.user.user)

  const navigate = useNavigate()

  return (
    <section className='max-container flex items-start justify-start w-full padding-x padding-y bg-background-main overflow-x-auto'>
      <div className='flex flex-col w-full gap-5'>
        <div className='flex -mt-5 items-center justify-between w-full text-white'>
          <h1 className='text-white font-Outfit text-lg'>
            Hello
          </h1>
          <div className='relative'>
            <Button 
            onClick={()=> setShowUserProfile(!showUserProfile)}
             variant="ghost" size="icon" className='lg:hidden flex' >
              <img src={User} alt="User" className="rounded-full border-2 border-blue" />
            </Button>
            {
              showUserProfile && <div className='z-10 absolute right-0 font-Outfit'>

                <Button 
                onClick={() =>setShowUserProfile(false)}
                 size="normal"
                 variant="normal"
                 className='px-6 py-2 whitespace-nowrap bg-gray-600 lg:hidden flex gap-2 flex-col font-Outfit'
                >
                  <p className='hover:opacity-45'>Profile</p>
                  <p  onClick={()=> navigate('/tickets') } className='hover:opacity-45'>Tickets</p>
                  <p  onClick={()=> navigate('/register') } className='hover:opacity-45'>Logout</p>
                </Button>
                
                </div>
            }
          </div>

        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white font-Outfit text-xl'>
            Insurance Marketplace
          </h1>
          <p className='info-text font-Outfit text-gray-500'>
            Welcome! Here'sa summary of your digital assets and insurance coverage
          </p>
        </div>
        <div className='flex w-full lg:flex-row flex-col gap-4'>
          <div className='flex flex-col lg:w-4/6 w-full overflow-x-auto'>
            <div className="p-6 overflow-x-auto bg-[#191B1F] rounded-[10px]">
              <h1 className='text-white font-Outfit text-lg mb-3'>
                My Somnia Assets
              </h1>
              <div className="flex flex-col mt-5 min-w-[700px] overflow-x-auto w-full border-separate border-spacing-y-5">
                <div className="grid justify-center items-center w-full grid-cols-3">
                  {topT.map((item) => (
                    <div key={item.id} className="p-3 rounded-sm font-Outfit font-semibold text-sm text-gray-500">{item.label}</div>
                  ))}
                </div>
                {bottomTItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid mt-2 grid-cols-4 text-sm font-Outline border-t border-gray-700"
                  >

                    <div className="flex gap-2 items-center">
                      <img
                        alt="crest"
                        src={item.img}
                        className="w-10 h-10 rounded-[2px]"
                      />
                      <div className="flex flex-col gap-1 m-2">
                        <h2 className="text-white font-Outfit text-sm whitespace-nowrap">
                          {item.label}
                        </h2>
                        <h2 className="text-gray-500 font-Outfit text-sm">
                          {item.asset}
                        </h2>
                      </div>
                    </div>
                    <div className="font-Outfit text-white flex items-center justify-center text-center">
                      ${item.value}
                    </div>
                    <div
                      className={`font-Outfit flex items-center justify-end ${item.status === "insured" ? "text-green-500" : "text-red-500"}`}
                    >
                      {item.status}
                    </div>

                    <div
                      onClick={() => { item.status === "Uninsured" ? setIsModalOpen(true) : setIsPolicyModalOpen(true) }}
                      className="flex items-center justify-end">
                      <Button
                        className={`font-Outfit ${item.status === "insured" ? "bg-gray-500" : "bg-blue"}`}
                        size="normal"
                        variant="normal"
                      >
                        {item.status === "insured" ? "View Policy" : "Insure Now"}
                      </Button>
                    </div>

                  </div>
                ))}

              </div>
            </div>


            <div className='mt-5'><DashboardForm /></div>



          </div>
          <div className='flex flex-col lg:w-2/6 w-full p-6 bg-background-card rounded-[10px] h-[70vh] gap-5'>
            <h1 className='text-white font-Outfit text-lg mb-3'>
              Active Coverage
            </h1>
            <div className='flex flex-col gap-5 w-full'>
              {
                activeCoverage.map((item) => (
                  <div key={item.id} className='flex pb-7 gap-7 border-b border-gray-700'>
                    <span className='text-blue text-[35px]'>
                      <ShieldIcon />
                    </span>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-white font-Outfit text-md'>
                        {item.label}
                      </h1>
                      <h3 className='text-gray-500 font-Outfit text-sm'>
                        Policy ID: {item.policyID}
                      </h3>
                      <h3 className='text-gray-500 font-Outfit text-sm'>
                        Coverage: ${item.coverage}
                      </h3>
                      <div className='flex flex-col gap-1'>
                        <h3 className='text-gray-500 font-Outfit text-sm'>
                          Expires in {item.date}days
                        </h3>
                        <div className='w-44 h-2 bg-gray-700 rounded-full overflow-hidden'>
                          <div
                            style={{ width: `${item.percentage}%` }}
                            className={`h-2 rounded-full ${item.percentage > 50 ? "bg-green-500" : "bg-yellow-500"}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div
              onClick={() => setIsPolicyModalOpen(true)}
              className='w-full flex justify-end'>
              <Button
                variant="normal"
                size="normal"
                className='w-full bg-gray-500'
              >
                View All Policies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <InsureNow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PolicyDetailModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />


    </section>
  )
}

export default Dashboard
