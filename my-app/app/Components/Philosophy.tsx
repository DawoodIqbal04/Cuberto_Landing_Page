import React from 'react'
import Roboto from './Roboto'

const Philosophy = () => {
  return (
    <div className='w-full min-h-screen bg-white text-black flex flex-col items-start px-34 py-40  gap-30 rounded-t-[60px] '>
        <div className='text-[140px] flex flex-col items-start leading-32'>
            <h1 className=' tracking-tight'>Our</h1>
            <div>
                <Roboto text='philosophy'/>
            </div>
        </div>
        <div className='flex items-center pr-20 gap-5 pl-24'>
             <div className='w-1/2'>
                <video src="/philosophyvideo.mp4" autoPlay muted loop></video>
             </div>
             <div className={` text-xl w-1/2 tracking-wide leading-5.5 flex flex-col gap-5`}>
                <p>
                    In our team, developers work alongside designers, strategists and analysts. Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.
                </p>
                <p>
                    We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.
                </p>
             </div>
        </div>
    </div>
  )
}

export default Philosophy