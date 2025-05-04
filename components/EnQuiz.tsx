import React from 'react'

const EnQuiz = () => {
  return (
    <div className='px-20 text-center space-y-1.5 flex flex-col justify-center items-center'>
        <div className='font-serif max-w-sm leading-5'>get customized advices according to your enneagram</div>
        <p className='font-[Franxurter] text-2xl'>enneagram quiz</p>
        <div className='pt-2'>
            <div className='bg-[#BECFBC] w-10 h-10 flex items-center justify-center rounded-full'><img src='/assets/play.svg' className='w-5' /></div>
        </div>
    </div>
  )
}

export default EnQuiz