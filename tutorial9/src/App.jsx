import React from 'react';
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import React from 'react';\nimport { useState } from 'react';\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"...\",type:\"css\"}\n\n];\n\n// Tutorial9a Section\n\nexport const Button = ()=> {\n\n\tfunction clickHandler() {\n\t\talert('You clicked me!');\n\t}\n\n\treturn (\n\t\t<button onClick={() => {\n\t\t\talert('You clicked me!');\n\t\t}}>\n\t\t\tClick me!\n\t\t</button>\n\t);\n}\n\nfunction AlertButton({ message, children }) {\n\treturn (\n\t\t<button onClick={() => alert(message)}>\n\t\t\t{children}\n\t\t</button>\n\t);\n}\n\nexport const Toolbar = () => {\n\treturn (\n\t\t<div>\n\t\t\t<AlertButton message=\"Playing!\">\n\t\t\t\tPlay Movie\n\t\t\t</AlertButton>\n\t\t\t<AlertButton message=\"Uploading!\">\n\t\t\t\tUpload Image\n\t\t\t</AlertButton>\n\t\t</div>\n\t);\n}\n\n// Tutorial9b Section\n\nexport const ClickButton = ({ onClick, children }) => {\n\treturn (\n\t\t<button onClick={onClick}>\n\t\t\t{children}\n\t</button>\n\t);\n\n}\n\nexport const PlayButton = ({movieName}) => {\n\tfunction handlePlayClick() {\n\t\talert(`Playing ${movieName}!`);\n\t}\n\n\treturn (\n\t\t<ClickButton onClick={handlePlayClick}>\n\t\t\tPlay \"{movieName}\"\n\t\t</ClickButton>\n\t);\n}\n\n// Tutorial9c Section\n\nfunction UploadButton() {\n\treturn (\n\t\t<Button onClick={() => alert('Uploading!')}>\n\t\t\tUpload Image\n\t\t</Button>\n\t);\n}\n\nexport const ClickBar = () => {\n\treturn (\n\t<div id=\"clickbar\">\n\t\t<div id=\"internalclickbar\">\n\t\t\t<PlayButton movieName=\"Kiki's Delivery Service\" />\n\t\t\t<UploadButton />\n\t\t</div>\n\t</div>\n\t);\n}\n\n// Tutorial9d Section\n\nexport const EventClickBar = () =>\n{\n\treturn (\n\t\t<div className=\"Toolbar\" onClick={() => {\n\t\t\talert('You clicked on the toolbar!');\n\t\t}}>\n\t\t\t<button onClick={() => alert('Playing!')}>\n\t\t\t\tPlay Movie\n\t\t\t</button>\n\t\t\t<button onClick={() => alert('Uploading!')}>\n\t\t\t\tUpload Image\n\t\t\t</button>\n\t\t</div>\n\n\n\t);\n}\n\n// Tutorial9e Section\n\nfunction StopButton({ onClick, children }) {\n\treturn (\n\t\t<button onClick={e => {\n\t\t\te.stopPropagation();\n\t\t\tonClick();\n\t\t}}>\n\t\t\t{children}\n\t\t</button>\n\t);\n}\n\nexport const EventPropStopBar = () =>\n{\n\treturn (\n\t\t<div className=\"Toolbar\" onClick={() => {\n\t\t\talert('You clicked on the toolbar!');\n\t\t}}>\n\t\t\t<StopButton onClick={() => alert('Playing!')}>\n\t\t\t\tPlay Movie\n\t\t\t</StopButton>\n\t\t\t<StopButton onClick={() => alert('Uploading!')}>\n\t\t\t\tUpload Image\n\t\t\t</StopButton>\n\t\t</div>\n\t);\n}\n\n/// Code display section\n\nexport const TabButton = ({id,clickHandler}) => {\n\t\n \n\treturn (\n\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t{id}\n\t\t</button>\n\n\t)\n}\n\nexport const Tab = ({isVisible,id,content,doctype}) => {\n\n\tif(isVisible)\n\t{\n\treturn (\n\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t<h3>{id}</h3>\n\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t{content}\n\t\t</SyntaxHighlighter>\n\t\t</div>\n\t)\n\t}\n\telse\n\treturn null;\n}\n\n\n\nexport const Tabs = () => {\n\tconst [documents, setDocuments] = useState(\n\t\tdocs\n\t);\n\n\tfunction handleClick(e)\n\t{\n\t\tconst nextDocs = docs.map(doc => {\n\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t// No change\n\t\t\t\tdoc.isVisible=true;\n\t\t\t\treturn doc;\n\t\t\t} else {\n\t\t\t\t// Return a new circle 50px below\n\t\t\t\tdoc.isVisible=false;\n\t\t\t\treturn doc;\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetDocuments(nextDocs);\n\t\t\n\t}\n \n\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\treturn ( <>\n\t\t<div className=\"tab\">\n\t\t\t{listItems}\n\t\t</div>\n\t\t{documents.map(doc =>\n\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t)\n\t\t}\n\t\t</>\n\t);\n}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {Button} from './App.jsx'\nimport {Toolbar} from './App.jsx'\nimport {ClickBar} from './App.jsx'\nimport {EventClickBar} from './App.jsx'\nimport {EventPropStopBar} from './App.jsx'\nimport {Tabs} from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<Button />\n\t</React.StrictMode>,\n)\n\n\nReactDOM.createRoot(document.getElementById('root2')).render(\n\t<React.StrictMode>\n\t\t<Toolbar />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\n\t<React.StrictMode>\n\t\t<ClickBar />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root4')).render(\n\n\t<React.StrictMode>\n\t\t<EventClickBar />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root5')).render(\n\n\t<React.StrictMode>\n\t\t<EventPropStopBar />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n\n)",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 9a</h1>\n\t\t\t<p>This tutorial demonstrates Responding to Events with a simple button click: <a href=\"https://react.dev/learn/responding-to-events\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"root1\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 9b</h1>\n\t\t\t<p>This tutorial demonstrates Responding to Events with properties: <a href=\"https://react.dev/learn/responding-to-events\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"root2\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 9c</h1>\n\t\t\t<p>This tutorial demonstrates Passing Event Handlers as Properties: <a href=\"https://react.dev/learn/responding-to-events\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 9d</h1>\n\t\t\t<p>This tutorial demonstrates Passing Event Handlers as propagation, click on the buttons and see the background div also receive the event: <a href=\"https://react.dev/learn/responding-to-events\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"root4\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 9e</h1>\n\t\t\t<p>This tutorial demonstrates Event Propogation Prevention, click on the buttons and see that the background div does notreceive the event, but click on the background div and see the event still exists: <a href=\"https://react.dev/learn/responding-to-events\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"root5\"></div>\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\t\t\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n#root{\n\twidth:100%;\n\tclear:both;\n}\n\n#header\n{\n\twidth:100%;\n\tmin-height:150px;\n}\n\n/* Style the tab */\n.tab {\n\toverflow: hidden;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f1f1f1;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n\tbackground-color: inherit;\n\tfloat: left;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n\tpadding: 14px 16px;\n\ttransition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n\tbackground-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n\tbackground-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n\tdisplay: block;\n\tpadding: 6px 12px;\n\tborder: 1px solid #ccc;\n\tborder-top: none;\n}\n\n.tabcontent {\n\tanimation: fadeEffect 1s; /* Fading effect takes 1 second */\n}\n\n/* Go from zero to full opacity */\n@keyframes fadeEffect {\n\tfrom {opacity: 0;}\n\tto {opacity: 1;}\n}\n\n.Toolbar\n{\n\tdisplay:block;\n\theight:50px;\n\twidth:100%;\n\tbackground:gray;\n\tborder:solid black 1px;\n\tcursor: pointer;\n\tline-height:50px;\n}",type:"css"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n\n\n",type:"css"}

];

// Tutorial9a Section

export const Button = ()=> {

  function clickHandler() {
    alert('You clicked me!');
  }

  return (
    <button onClick={() => {
      alert('You clicked me!');
    }}>
      Click me!
    </button>
  );
}

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export const Toolbar = () => {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}

// Tutorial9b Section

export const ClickButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
  </button>
  );

}

export const PlayButton = ({movieName}) => {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <ClickButton onClick={handlePlayClick}>
      Play "{movieName}"
    </ClickButton>
  );
}

// Tutorial9c Section

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export const ClickBar = () => {
  return (
  <div id="clickbar">
    <div id="internalclickbar">
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  </div>
  );
}

// Tutorial9d Section

export const EventClickBar = () =>
{
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>


  );
}

// Tutorial9e Section

function StopButton({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export const EventPropStopBar = () =>
{
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <StopButton onClick={() => alert('Playing!')}>
        Play Movie
      </StopButton>
      <StopButton onClick={() => alert('Uploading!')}>
        Upload Image
      </StopButton>
    </div>
  );
}

/// Code display section

export const TabButton = ({id,clickHandler}) => {
  
 
  return (
    <button data={id} className="tablinks" onClick={clickHandler}>
      {id}
    </button>

  )
}

export const Tab = ({isVisible,id,content,doctype}) => {

  if(isVisible)
  {
  return (
    <div id={id} className="tabcontent" >
      <h3>{id}</h3>
    <SyntaxHighlighter language={doctype} style={docco}>
      {content}
    </SyntaxHighlighter>
    </div>
  )
  }
  else
  return null;
}



export const Tabs = () => {
  const [documents, setDocuments] = useState(
    docs
  );

  function handleClick(e)
  {
    const nextDocs = docs.map(doc => {
      if (doc.id === e.target.getAttribute('data')) {
        // No change
        doc.isVisible=true;
        return doc;
      } else {
        // Return a new circle 50px below
        doc.isVisible=false;
        return doc;
      }
    });
    // Re-render with the new array
    setDocuments(nextDocs);
    
  }
 
  const listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);
  return ( <>
    <div className="tab">
      {listItems}
    </div>
    {documents.map(doc =>
      <Tab  key={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />
      )
    }
    </>
  );
}