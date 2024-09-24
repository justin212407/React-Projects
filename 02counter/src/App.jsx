import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  //let counter = 15 

  const addValue = () => {
    //counter = counter = counter + 1
    setCounter(counter + 1)
    console.log("Clicked", counter);
  } 

  const removeValue = () =>{
    setCounter(counter - 1);

  }

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
