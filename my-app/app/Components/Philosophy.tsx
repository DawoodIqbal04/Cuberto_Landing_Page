import React from 'react'
import Roboto from './Roboto'

const Philosophy = () => {
  return (
    <div className='w-full min-h-screen bg-white text-black flex flex-col lg:items-start items-center lg:px-34 px-4 lg:py-40 py-20 lg:gap-30 gap-20 lg:rounded-t-[60px] rounded-4xl '>
        <div className='lg:text-[140px] text-5xl flex flex-col items-start lg:leading-32 lg:mr-0 mr-24'>
            <h1 className=' tracking-tight font-medium'>Our</h1>
            <div>
                <Roboto text='philosophy'/>
            </div>
        </div>
        <div className='flex items-center lg:pr-20 gap-5 lg:pl-24'>
             <div className='w-1/2 lg:block hidden'>
                <video src="/philosophyvideo.mp4" autoPlay muted loop></video>
             </div>
             <div className={` text-xl lg:w-1/2 lg:font-normal font-medium tracking-wide lg:leading-5.5 leading-6.5 flex flex-col gap-5`}>
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