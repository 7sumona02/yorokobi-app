import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const Footer = () => {
  return (
    <div className='flex'>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className='group'>
                        <div className='absolute left-2 bottom-1 opacity-100 group-hover:opacity-0 transition-all'>
                            <img src='/assets/cat2.svg' alt='cat' className='w-full'/>
                        </div>
                        <div className='absolute left-2 bottom-1 opacity-0 group-hover:opacity-100 transition-all'>
                            <img src='/assets/cat1.svg' alt='cat' className='w-full'/>
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent className='absolute -bottom-40 left-14'>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <div className='border-2 border-black rounded-full p-1 absolute right-4 bottom-4'>
            <img src='/assets/paw.svg' alt='paw' className='w-8'/>
        </div>
    </div>
  )
}

export default Footer