import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const btn = useRef<HTMLButtonElement | null >(null);
  const iframe = useRef<HTMLIFrameElement | null >(null);
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const handler = (ev: MessageEvent<{ type: string, message: string }>) => {
      if(ev.data.type == "response"){
        console.log(ev.data.message)
        setShow(false);
      }
    }
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  function initOcr(){
    if(show){
      if(iframe.current) iframe.current.style.display = "block";
    }else{
      if(iframe.current) iframe.current.style.display = "none";
    }
  }

  useEffect(() => {
    initOcr();
  },[show])

  return (
    <div className="App">
       <div id="content">
        <button ref={btn} onClick={() => setShow(!show)} > { !show ? "Iniciar OCR" : "Cerrar OCR" }</button>          
        { show && <iframe src={"https://armando-gmh.github.io/custom-ocr/"} height={"100%"} width={"100%"} allow="camera" id="FrameZoom" frameBorder="0" scrolling="no" ref={iframe}/>  }       
      </div>
    </div>
  )
}

export default App
