import React from 'react'
import ReactDOM from 'react-dom/client'
import {List} from './App.jsx'
import {FilterList} from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
    <FilterList />
  </React.StrictMode>,
)
