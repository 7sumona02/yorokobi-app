import React from 'react'

const Nav = () => {
  return (
    <div className='w-screen flex items-center justify-between py-4 px-6'>
        <div className='font-[Franxurter] text-black text-2xl'>yorokobi</div>
        <div className='border-2 border-black rounded-full p-1'>
            <img src='/assets/pfp.svg' alt='pfp' className='w-10'/>
        </div>
    </div>
  )
}

export default Nav