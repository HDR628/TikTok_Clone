import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import "./video.css"

function Video({ likes, messages, shares, name, desc, music, url }) {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)


  function handdleStart() {
    videoRef.current.play()
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className='video'>

      <video
        className='videoPlayer'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      >
      </video>
      {/* Sidebar */}
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      {/* Footer */}
      <VideoFooter
        name={name}
        desc={desc}
        music={music}
      />
    </div >
  )
}

export default Video