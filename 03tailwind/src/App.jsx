import React, { useState } from 'react'


const App = () => {

const [color, setColor] = useState("Olive")


  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <h1 className='w-full h-screen flex justify-center items-center text-8xl font-semibold duration-200 text-white'>{color}</h1>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-10 px-2'>
        <div className='flex flex-wrap justify-center gap-2 bg-white px-2 py-2 shadow-lg rounded-3xl'>

          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Red"}} onClick={() => setColor("Red")}>Red</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Green"}} onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Blue"}} onClick={() => setColor("Blue")}>Blue</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Pink"}} onClick={() => setColor("Pink")}>Pink</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Black"}} onClick={() => setColor("Black")}>Black</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Olive"}} onClick={() => setColor("Olive")}>Olive</button>
          <button className='outline-none  px-4 py-1 rounded-full text-white'style={{backgroundColor:"Gray"}} onClick={() => setColor("Gray")}>Gray</button>
          
        </div>

      </div>


      
    </div>
  )
}

export default App
