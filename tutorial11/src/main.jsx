import React from 'react'
import ReactDOM from 'react-dom/client'
import {MultipleAddNoWork} from './App.jsx'
import {MultipleAddWorking} from './App.jsx'
import {MultipleWithPreAssignment} from './App.jsx'
import {MultiplePostSet} from './App.jsx'
import {MultipleCounterFix} from './App.jsx'
import {StateQueue} from './App.jsx'
import {Tabs} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <MultipleAddNoWork />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <MultipleAddWorking />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <MultipleWithPreAssignment />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("root4")).render(
  <React.StrictMode>

    <MultiplePostSet />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("root5")).render(
  <React.StrictMode>

    <MultipleCounterFix />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("root6")).render(
  <React.StrictMode>

    <StateQueue />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("codeblock1")).render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>

)
