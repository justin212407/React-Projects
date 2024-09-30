import { useState } from 'react'
import './App.css';
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className="centered-container">
        <h1>React with Context Api</h1>
        <Login />
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
