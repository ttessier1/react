import { useState } from 'react'

import './App.css'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import { useState } from 'react'\n\nimport './App.css'\n\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"...\",type:\"css\"}\n];\n\nexport const MultipleAddNoWork = () =>\n\t{\n\tconst [number, setNumber] = useState(0);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>{number}</h1>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetNumber(number + 1);\n\t\t\t\tsetNumber(number + 1);\n\t\t\t\tsetNumber(number + 1);\n\t\t\t}}>+3</button>\n\t\t</>\n\t)\n}\n\nexport const\tMultipleAddWorking = () =>\n\t{\n\t\tconst [number, setNumber] = useState(0);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>{number}</h1>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetNumber(number => number + 1);\n\t\t\t\tsetNumber(number => number + 1);\n\t\t\t\tsetNumber(number => number + 1);\n\t\t\t}}>+3</button>\n\t\t</>\n\t);\n\n\t}\n\n\texport const MultipleWithPreAssignment = () =>\n\t\t{\n\t\t\tconst [number, setNumber] = useState(0);\n\n\t\t\treturn (\n\t\t\t\t<>\n\t\t\t\t\t<h1>{number}</h1>\n\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\tsetNumber(number + 5);\n\t\t\t\t\t\tsetNumber(n => n + 1);\n\t\t\t\t\t}}>Increase the number</button>\n\t\t\t\t</>\n\t\t\t)\n\n\t\t}\n\nexport const MultiplePostSet = () =>\n{\n\tconst [number, setNumber] = useState(0);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>{number}</h1>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetNumber(number + 5);\n\t\t\t\tsetNumber(n => n + 1);\n\t\t\t\tsetNumber(42);\n\t\t\t}}>Increase the number</button>\n\t\t</>\n\t);\n}\n\nexport const MultipleCounterFix = () =>\n{\n\tconst [pending, setPending] = useState(0);\n\tconst [completed, setCompleted] = useState(0);\n\n\tasync function handleClick() {\n\t\tsetPending(pending => pending + 1);\n\t\tawait delay(3000);\n\t\tsetPending(pending => pending - 1);\n\t\tsetCompleted(completed => completed + 1);\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h3>\n\t\t\t\tPending: {pending}\n\t\t\t</h3>\n\t\t\t<h3>\n\t\t\t\tCompleted: {completed}\n\t\t\t</h3>\n\t\t\t<button onClick={handleClick}>\n\t\t\t\tBuy\t\t \n\t\t\t</button>\n\t\t</>\n\t);\n\t}\n\n\tfunction delay(ms) {\n\t\treturn new Promise(resolve => {\n\t\t\tsetTimeout(resolve, ms);\n\t\t});\n\t}\n\n\n\texport const getFinalState = (baseState, queue) =>\n\t{\n\t\t\n\t\t\tlet finalState = baseState;\n\t\t\tfor (let update of queue) {\n\t\t\t\tif (typeof update === 'function') {\n\t\t\t\t\t// TODO: apply the updater function\n\t\t\t\t\tfinalState = update(finalState);\n\t\t\t\t\t//finalState = update();\n\t\t\t\t} else {\n\t\t\t\t\t// TODO: replace the state\n\t\t\t\t\tfinalState= update;\n\t\t\t\t}\n\t\t\t}\n\t\t\n\t\t\treturn finalState;\n\t}\n\n\tfunction increment(n) {\n\t\treturn n + 1;\n\t}\n\tincrement.toString = () => 'n => n+1';\n\t\n\texport const StateQueue = () => {\n\t\treturn (\n\t\t\t<>\n\t\t\t\t<TestCase\n\t\t\t\t\tbaseState={0}\n\t\t\t\t\tqueue={[1, 1, 1]}\n\t\t\t\t\texpected={1}\n\t\t\t\t/>\n\t\t\t\t<hr />\n\t\t\t\t<TestCase\n\t\t\t\t\tbaseState={0}\n\t\t\t\t\tqueue={[\n\t\t\t\t\t\tincrement,\n\t\t\t\t\t\tincrement,\n\t\t\t\t\t\tincrement\n\t\t\t\t\t]}\n\t\t\t\t\texpected={3}\n\t\t\t\t/>\n\t\t\t\t<hr />\n\t\t\t\t<TestCase\n\t\t\t\t\tbaseState={0}\n\t\t\t\t\tqueue={[\n\t\t\t\t\t\t5,\n\t\t\t\t\t\tincrement,\n\t\t\t\t\t]}\n\t\t\t\t\texpected={6}\n\t\t\t\t/>\n\t\t\t\t<hr />\n\t\t\t\t<TestCase\n\t\t\t\t\tbaseState={0}\n\t\t\t\t\tqueue={[\n\t\t\t\t\t\t5,\n\t\t\t\t\t\tincrement,\n\t\t\t\t\t\t42,\n\t\t\t\t\t]}\n\t\t\t\t\texpected={42}\n\t\t\t\t/>\n\t\t\t</>\n\t\t);\n\t}\n\t\n\tfunction TestCase({\n\t\tbaseState,\n\t\tqueue,\n\t\texpected\n\t}) {\n\t\tconst actual = getFinalState(baseState, queue);\n\t\treturn (\n\t\t\t<>\n\t\t\t\t<p>Base state: <b>{baseState}</b></p>\n\t\t\t\t<p>Queue: <b>[{queue.join(', ')}]</b></p>\n\t\t\t\t<p>Expected result: <b>{expected}</b></p>\n\t\t\t\t<p style={{\n\t\t\t\t\tcolor: actual === expected ?\n\t\t\t\t\t\t'green' :\n\t\t\t\t\t\t'red'\n\t\t\t\t}}>\n\t\t\t\t\tYour result: <b>{actual}</b>\n\t\t\t\t\t{' '}\n\t\t\t\t\t({actual === expected ?\n\t\t\t\t\t\t'correct' :\n\t\t\t\t\t\t'wrong'\n\t\t\t\t\t})\n\t\t\t\t</p>\n\t\t\t</>\n\t\t);\n\t}\n\n\nexport const TabButton = ({id,clickHandler}) => {\n\t\n \n\treturn (\n\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t{id}\n\t\t</button>\n\n\t)\n}\n\nexport const Tab = ({isVisible,id,content,doctype}) => {\n\n\tif(isVisible)\n\t{\n\treturn (\n\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t<h3>{id}</h3>\n\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t{content}\n\t\t</SyntaxHighlighter>\n\t\t</div>\n\t)\n\t}\n\telse\n\treturn null;\n}\n\n\n\nexport const Tabs = () => {\n\tconst [documents, setDocuments] = useState(\n\t\tdocs\n\t);\n\n\tfunction handleClick(e)\n\t{\n\t\tconst nextDocs = docs.map(doc => {\n\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t// No change\n\t\t\t\tdoc.isVisible=true;\n\t\t\t\treturn doc;\n\t\t\t} else {\n\t\t\t\t// Return a new circle 50px below\n\t\t\t\tdoc.isVisible=false;\n\t\t\t\treturn doc;\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetDocuments(nextDocs);\n\t\t\n\t}\n \n\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\treturn ( <>\n\t\t<div className=\"tab\">\n\t\t\t{listItems}\n\t\t</div>\n\t\t{documents.map(doc =>\n\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t)\n\t\t}\n\t\t</>\n\t);\n}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {MultipleAddNoWork} from './App.jsx'\nimport {MultipleAddWorking} from './App.jsx'\nimport {MultipleWithPreAssignment} from './App.jsx'\nimport {MultiplePostSet} from './App.jsx'\nimport {MultipleCounterFix} from './App.jsx'\nimport {StateQueue} from './App.jsx'\nimport {Tabs} from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<MultipleAddNoWork />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root2')).render(\n\t<React.StrictMode>\n\t\t<MultipleAddWorking />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\t<React.StrictMode>\n\t\t<MultipleWithPreAssignment />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById(\"root4\")).render(\n\t<React.StrictMode>\n\n\t\t<MultiplePostSet />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"root5\")).render(\n\t<React.StrictMode>\n\n\t\t<MultipleCounterFix />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"root6\")).render(\n\t<React.StrictMode>\n\n\t\t<StateQueue />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n\n)\n",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11a</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts adding multiple times: When the button is clicked the add function is called three times, but only adds once due to the state not changing more than once per render <a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root1\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11b</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts adding multiple times with a state function: When the button is clicked in this example the function to calculate is passed to the state change function and allows the calculation of the state to be incrementally modified <a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root2\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11c</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts adding multiple times with a state function: When the button is clicked in this example the function to calculate is passed to the state change function after a state change set function is called. In this case, the state appears to change correctly but only because the second function chains the update from the first.<a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11d</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts adding multiple times with a state function: When the button is clicked in this example the function to calculate is passed to the state change function after a state change set function is called, then a setstate function is called again. In this case, the final setState function overrides anything that happened before it.<a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root4\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11e</h1>\n\t\t\t<p>This tutorialsection is a bug fix example, the multiple counters below should not go to -1 and should usethe state functions appropriately.<a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root5\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 11f</h1>\n\t\t\t<p>This tutorialsection is a bug fix example, There are a series of tests that rely on a state queue function that should all pass.<a href=\"https://react.dev/learn/queueing-a-series-of-state-updates\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root6\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n#header\n{\n\twidth:100%;\n\tmin-height:150px;\n}\n\n/* Style the tab */\n.tab {\n\toverflow: hidden;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f1f1f1;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n\tbackground-color: inherit;\n\tfloat: left;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n\tpadding: 14px 16px;\n\ttransition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n\tbackground-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n\tbackground-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n\tdisplay: block;\n\tpadding: 6px 12px;\n\tborder: 1px solid #ccc;\n\tborder-top: none;\n}\n\n.tabcontent {\n\tanimation: fadeEffect 1s; /* Fading effect takes 1 second */\n}\n\n/* Go from zero to full opacity */\n@keyframes fadeEffect {\n\tfrom {opacity: 0;}\n\tto {opacity: 1;}\n}",type:"css"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n",type:"css"}
];

export const MultipleAddNoWork = () =>
  {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

export const  MultipleAddWorking = () =>
  {
    const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
      }}>+3</button>
    </>
  );

  }

  export const MultipleWithPreAssignment = () =>
    {
      const [number, setNumber] = useState(0);

      return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(number + 5);
            setNumber(n => n + 1);
          }}>Increase the number</button>
        </>
      )

    }

export const MultiplePostSet = () =>
{
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42);
      }}>Increase the number</button>
    </>
  );
}

export const MultipleCounterFix = () =>
{
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
  }

  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }


  export const getFinalState = (baseState, queue) =>
  {
    
      let finalState = baseState;
      for (let update of queue) {
        if (typeof update === 'function') {
          // TODO: apply the updater function
          finalState = update(finalState);
          //finalState = update();
        } else {
          // TODO: replace the state
          finalState= update;
        }
      }
    
      return finalState;
  }

  function increment(n) {
    return n + 1;
  }
  increment.toString = () => 'n => n+1';
  
  export const StateQueue = () => {
    return (
      <>
        <TestCase
          baseState={0}
          queue={[1, 1, 1]}
          expected={1}
        />
        <hr />
        <TestCase
          baseState={0}
          queue={[
            increment,
            increment,
            increment
          ]}
          expected={3}
        />
        <hr />
        <TestCase
          baseState={0}
          queue={[
            5,
            increment,
          ]}
          expected={6}
        />
        <hr />
        <TestCase
          baseState={0}
          queue={[
            5,
            increment,
            42,
          ]}
          expected={42}
        />
      </>
    );
  }
  
  function TestCase({
    baseState,
    queue,
    expected
  }) {
    const actual = getFinalState(baseState, queue);
    return (
      <>
        <p>Base state: <b>{baseState}</b></p>
        <p>Queue: <b>[{queue.join(', ')}]</b></p>
        <p>Expected result: <b>{expected}</b></p>
        <p style={{
          color: actual === expected ?
            'green' :
            'red'
        }}>
          Your result: <b>{actual}</b>
          {' '}
          ({actual === expected ?
            'correct' :
            'wrong'
          })
        </p>
      </>
    );
  }


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