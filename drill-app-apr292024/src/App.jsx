import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Simple app that allows the user to enter their name and returns a message with the name provided
// Also, it shows a message when the user is typing



function App() {
  // State variables to hold the count, message, and isTyping status
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false);
  // timer variable to hold the setTimeout function to check if the user is typing
  let timer = null;

  // Function to handle the input event
  // Fired when on key up event in the input field
  // If the timer is already set, clear the timer then set the timer again
  // If not, set isTyping to true, let the server know, and then set the timer
  // If the user stops typing for 2 seconds, let the server know, set isTyping to false, 
  // send the request to the server, and set the message from the server response
  async function handleSubmit (e){
    if(timer){
      clearTimeout(timer)
    } else {
      setIsTyping(true)
      await axios.get('http://localhost:3000/typing/true')
    }

    timer = setTimeout( async () => {
      if(isTyping) await axios.get('http://localhost:3000/typing/false')
      setIsTyping(false)
      let value = e.target.value
      let res = await axios.get(`http://localhost:3000/${value}`)
      setMessage(res.data.message)
    }, 2000);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h3>Enter your name</h3>
        <input type="text" onKeyUp={handleSubmit} />
        {isTyping && <span>Typing...</span>}
        <h4>{message && <span>{message}</span> }</h4>
      </div>
    </>
  )
}

export default App
