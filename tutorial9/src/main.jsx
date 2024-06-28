import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button} from './App.jsx'
import {Toolbar} from './App.jsx'
import {ClickBar} from './App.jsx'
import {EventClickBar} from './App.jsx'
import {EventPropStopBar} from './App.jsx'
import {Tabs} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <Toolbar />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root3')).render(

  <React.StrictMode>
    <ClickBar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root4')).render(

  <React.StrictMode>
    <EventClickBar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root5')).render(

  <React.StrictMode>
    <EventPropStopBar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("codeblock1")).render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>

)