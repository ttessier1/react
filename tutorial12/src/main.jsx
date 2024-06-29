import React from 'react'
import ReactDOM from 'react-dom/client'
import {MovingDot} from './App.jsx'
import {Form1Broken} from './App.jsx'
import {Form2Working} from './App.jsx'
import {Form3Working} from './App.jsx'
import {NestedObjectForm} from './App.jsx'
import {NestedObjectFormImmer} from './App.jsx'
import {BugFixOne} from './App.jsx'
import {BugFixTwo} from './App.jsx'
import {BugFixThree} from './App.jsx'
import {Tabs} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <MovingDot />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root2a')).render(
  <React.StrictMode>
    <Form1Broken />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root2b')).render(
  <React.StrictMode>
    <Form2Working />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root2c')).render(
  <React.StrictMode>
    <Form3Working />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <NestedObjectForm />
  </React.StrictMode>

)

ReactDOM.createRoot(document.getElementById('root4')).render(
  <React.StrictMode>
    <NestedObjectFormImmer />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root5')).render(
  <React.StrictMode>
    <BugFixOne />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root6')).render(
  <React.StrictMode>
    <BugFixTwo />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root7')).render(
  <React.StrictMode>
    <BugFixThree />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("codeblock1")).render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>

)