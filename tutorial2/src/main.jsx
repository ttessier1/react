import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoList} from './App.jsx'
import {Bio} from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bio />
    <TodoList />
  </React.StrictMode>,
)
