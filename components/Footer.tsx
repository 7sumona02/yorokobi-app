'use client'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex'>
            <Popover>
                <PopoverTrigger asChild>
                    <div 
                        className='group'
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div className={`absolute left-2 bottom-1 transition-all ${isActive ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}>
                            <img src='/assets/cat1.svg' alt='cat' className='w-full'/>
                        </div>
                        <div className={`absolute left-2 bottom-1 transition-all ${isActive ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                            <img src='/assets/cat2.svg' alt='cat' className='w-full'/>
                        </div>
                    </div>       
                </PopoverTrigger>  
                <PopoverContent className="bg-[#BECFBC] text-white font-[Franxurter] w-full text-sm -translate-y-[2vh] translate-x-14">
                    <p>hello meowww</p>
                </PopoverContent>
            </Popover>       
        <div className='border-2 border-black rounded-full p-1 absolute right-4 bottom-4'>
            <img src='/assets/paw.svg' alt='paw' className='w-8'/>
        </div>
    </div>
  )
}

export default Footer