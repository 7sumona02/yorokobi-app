'use client'
import React, { useState } from 'react'

const Nav = () => {
  const [isJapanese, setIsJapanese] = useState(false);

  return (
    <div className='w-screen flex items-center justify-between py-4 px-6'>
        <div 
          className='font-[Franxurter] text-black text-2xl group cursor-pointer'
          onClick={() => setIsJapanese(!isJapanese)}
        >
            <span className={`block ${isJapanese ? 'hidden' : ''} group-hover:hidden`}>yorokobi</span>
            <span className={`${isJapanese ? 'block' : 'hidden'} group-hover:block text-xl font-extrabold tracking-tighter`}>よろこび</span>
        </div>
        <div className='border-2 border-black rounded-full p-1'>
            <img src='/assets/pfp.svg' alt='pfp' className='w-10'/>
        </div>
    </div>
  )
}

export default Nav