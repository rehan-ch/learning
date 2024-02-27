import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  const setColor = (color)=>{
    setBgColor(color);
  }
  return (
    <>
      <div className={`relative h-lvh w-full bg-[${bgColor}]`}>
          <div className="absolute inset-x-0 bottom-20 mx-20 px-20 h-16 flex">
            <button className="rounded-full basis-1/4 bg-white m-2 decoration-red-500" onClick={()=>setColor('#FFFFFF')}>White</button>
            <button className="rounded-full basis-1/4 bg-black m-2 text-[#ffffff]" onClick={()=>setColor('#000000')}>Black</button>
            <button className="rounded-full basis-1/4 bg-[#FF0000] m-2 text-[#ffffff]" onClick={()=>setColor('#FF0000')}>Red</button>
            <button className="rounded-full basis-1/4 bg-[#0000FF] m-2 text-[#ffffff]" onClick={()=>setColor('#0000FF')}>Blue</button>
          </div>
      </div>

    </>
  )
}

export default App
