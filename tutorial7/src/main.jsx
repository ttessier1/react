import React from 'react'
import ReactDOM from 'react-dom/client'
import {RecipeList} from './App.jsx'
import {BrokenTeaSet} from './App.jsx'
import {TeaSet} from './App.jsx'
import {TeaGathering} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeList />
    <hr />
    <BrokenTeaSet />
    <hr />
    <TeaSet />
    <hr />
    <TeaGathering />
  </React.StrictMode>,
)
