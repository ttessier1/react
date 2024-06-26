import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export const TodoList =() =>
{
  return (<div> 
  <h1>Hedy Lamarr&apos;s Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    className="photo"
  />
  <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
  </ul>
  <h1>Tim T&apos;s Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    className="photo"
  />
  <ul>
      <li>Complete React Tutorial Example</li>
      <li>Design React Project using AI</li>
      <li>Implement AI Backend for React</li>
      <li>Implement React Frontend</li>
  </ul>
  </div>);
}

export const  Bio = () =>
{
  return (<>

<div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br /><br />
      <b>And <i>pictures</i></b> of scientists!
    </p>
  </>
  );
}

