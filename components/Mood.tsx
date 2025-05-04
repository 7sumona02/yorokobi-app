import React from 'react'
import { MoodSelector } from './MoodSelector'

const Mood = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5'>
        <p className='font-[Franxurter] text-2xl'>mood log</p>
        <div className='py-4'>
            <MoodSelector />
        </div>
    </div>
  )
}

export default Mood