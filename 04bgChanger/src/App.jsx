import { useState }from "react"

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('red')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"red"}}>Red</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('green')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"green"}}>Green</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('blue')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"blue"}}>Blue</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('lavender')} className="outline-None px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"lavender"}}>Lavender</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('olive')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"olive"}}>Olive</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('gray')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"gray"}}>Gray</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('yellow')} className="outline-None px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"yellow"}}>Yellow</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('pink')} className="outline-None px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"pink"}}>Pink</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('purple')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"purple"}}>Purple</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('white')} className="outline-None px-4 py-1 rounded-full text-black shadow-lg"  style={{backgroundColor:"white"}}>White</button></div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={() => setcolor('black')} className="outline-None px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"black"}}>Black</button></div>
      </div>
    </div>

  )
}

export default App
