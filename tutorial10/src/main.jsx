import React from 'react'
import ReactDOM from 'react-dom/client'
import {Gallery} from './App.jsx'
import {MoreGallery} from './App.jsx'
import {MultipleGalleryDisplay} from './App.jsx'
import {TextStateBugFix} from './App.jsx'
import {SubmitTextCrash} from './App.jsx'
import {BrokenAlert} from './App.jsx'
import {Tabs} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
)



ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <MoreGallery />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <MultipleGalleryDisplay />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root4')).render(
  <React.StrictMode>
    <TextStateBugFix />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root5')).render(
  <React.StrictMode>
    <SubmitTextCrash />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root6')).render(
  <React.StrictMode>
    <BrokenAlert />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("codeblock1")).render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>

)
