import React from 'react'

const VideoBar = () => {
  return (
    <div className='w-full lg:min-h-screen h-[60vh] relative lg:rounded-none rounded-3xl overflow-hidden lg:px-0 px-4 '>
        <video src="videobar.mp4" className='object-cover lg:relative absolute w-full h-full top-0 left-0 ' muted autoPlay loop></video>
    </div>
  )
}

export default VideoBar