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

export const Avatar = () => {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Placeholder Text with '";

  return (
    <img
    className="avatar"
    src={avatar}
    alt={description}
    />
  );
}

export const TodoListTitle = () => {
  const name="Tim T"
  return (
    <h1>{name}&#39;s Todo List</h1>
  );
}

const today = new Date();

function formatDate(date)
{
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday:'long'}
  ).format(date);
}

export const TodoListDate = () => {
  return (
   <h1> Todo List for :{formatDate(today)}</h1>
  );
}

export const TodoList = () => {

  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Change Image in tutorial to match user</li>
      <li>Develop Tests (2 hours)</li>
      <li>Run Tests (1 hour)</li>
      <li>Clean up after Tests(1 hour)</li>
    </ul>

  );
}