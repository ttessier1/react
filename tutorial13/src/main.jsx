import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrokenList} from './App.jsx'
import {FixedList} from './App.jsx'
import {ExpanmdedDeleteList} from './App.jsx'
import {ArrayTransformation} from './App.jsx'
import {ArrayMap} from './App.jsx'
import {ArrayInsert} from './App.jsx'
import {BucketList} from './App.jsx'
import {BucketListImmer} from './App.jsx'
import {Challenge1} from './App.jsx'
import {Challenge2} from './App.jsx'
import {Challenge3} from './App.jsx'
import {Challenge4} from './App.jsx'
import {Tabs} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <BrokenList />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <FixedList />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <ExpanmdedDeleteList />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root4')).render(
  <React.StrictMode>
    <ArrayTransformation />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root5')).render(
  <React.StrictMode>
    <ArrayMap />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root6')).render(
  <React.StrictMode>
    <ArrayInsert />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root7')).render(
  <React.StrictMode>
    <BucketList />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root8')).render(
  <React.StrictMode>
    <BucketListImmer />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root9')).render(
  <React.StrictMode>
    <Challenge1 />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root10')).render(
  <React.StrictMode>
    <Challenge2 />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root11')).render(
  <React.StrictMode>
    <Challenge3 />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root12')).render(
  <React.StrictMode>
    <Challenge4 />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("codeblock1")).render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>
)