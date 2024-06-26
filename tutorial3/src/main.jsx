import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoListDate} from './App.jsx'
import {TodoListTitle} from './App.jsx'
import {Avatar} from './App.jsx'
import {TodoList} from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListTitle />
    <TodoListDate />
    <Avatar />
    <TodoList />
  </React.StrictMode>,
)
