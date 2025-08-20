import React from 'react'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router'

const Goverance = () => {
  return (
     <div className='flex h-[80vh] gap-3 justify-center items-center flex-col w-full max-contianer'>
            <h1 className='text-2xl font-Outfit text-black'>Coming Soon...</h1>

            <Link to="/">
                <Button
                    size="normal"
                    variant="normal"
                    className='text-black font-bold'
                >Dashboard</Button>
            </Link>

        </div>
  )
}

export default Goverance
