import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  useEffect(() => {
    const handler = (ev: MessageEvent<{ type: string, message: string }>) => {
      if(ev.data.type == "response")
      console.log(ev.data.message)
      document.getElementById("FrameZoom")?.remove();
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <div className="App">
       <div id="content">          
        <iframe src={"https://armando-gmh.github.io/custom-ocr/"} height={"100%"} width={"100%"} allow="camera" id="FrameZoom" frameBorder="0" scrolling="no"/>         
      </div>
    </div>
  )
}

export default App
