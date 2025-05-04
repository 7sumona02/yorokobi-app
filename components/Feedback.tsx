import React from 'react'
import MsgInput from './MsgInput'

const Feedback = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-black bg-[#BECFBC] py-10 space-y-0.5'>
            <p className='font-serif'>share your thoughts</p>
            <p className='font-[Franxurter] text-2xl'>how are you feeling right now?</p>
            <div className='pt-4 w-[75vw]'><MsgInput /></div>
        </div>
    </div>
  )
}

export default Feedback