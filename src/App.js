import React, { useEffect, useState } from 'react';
import './App.css';
import Video from "./pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

function App() {

  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }


  const [video, setVideos] = useState([])
  /* Indica para a linguagem(no caso JS), que e necessario "esperar" para executar/coletar os dados que serão utilizados*/
  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)

  }

  useEffect(() => {
    getVideos();
  }, [])


  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className='localVideos'>

        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              desc={item.desc}
              music={item.music}
              url={item.url}
            >
            </Video>
          )
        })}

      </div>
    </div >
  );
}

export default App;
