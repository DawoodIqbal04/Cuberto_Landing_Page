import React from 'react'

const PreFooter = () => {
  return (
    <div className='relative w-full h-screen bg-[#000000] text-white flex flex-col items-center justify-center'>
        <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'>
            <video src="/footer.mp4" muted autoPlay loop></video>
        </div>
        <div className='relative z-10 flex flex-col items-center gap-8 text-center text-8xl font-thin'>
          <div className=''>
            <p>Have<br /> An Idea?</p>
          </div>
          <div className='w-116 h-30 border border-white rounded-full flex items-center justify-center'>
            <p>TELL US</p>
          </div>
        </div>
    </div>
  )
}

export default PreFooter