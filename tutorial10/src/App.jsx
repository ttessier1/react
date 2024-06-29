import { useState } from 'react';
import { sculptureList } from './data';
import {MultipleGallery} from './Gallery';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import { useState } from 'react';\nimport { sculptureList } from './data';\nimport {MultipleGallery} from './Gallery';\n\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"data.jsx\",id:\"data.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"...\",type:\"css\"}\n\n];\n\nexport const Gallery = () => {\n\tconst [index, setIndex] = useState(0);\n\t\n\n\tfunction handleClick() {\n\t\tsetIndex(index + 1);\n\t}\n\n\tlet sculpture = sculptureList[index];\n\treturn (\n\t\t<>\n\t\t\t<button onClick={handleClick}>\n\t\t\t\tNext\n\t\t\t</button>\n\t\t\t<h2>\n\t\t\t\t<i>{sculpture.name} </i> \n\t\t\t\tby {sculpture.artist}\n\t\t\t</h2>\n\t\t\t<h3>\t\n\t\t\t\t({index + 1} of {sculptureList.length})\n\t\t\t</h3>\n\t\t\t<img \n\t\t\t\tsrc={sculpture.url} \n\t\t\t\talt={sculpture.alt}\n\t\t\t/>\n\t\t\t<p>\n\t\t\t\t{sculpture.description}\n\t\t\t</p>\n\t\t</>\n\t);\n}\n\n\nexport const MoreGallery = () => {\n\tconst [index, setIndex] = useState(0);\n\tconst [showMore, setShowMore] = useState(false);\n\n\tfunction handleNextClick() {\n\t\tsetIndex(index + 1);\n\t}\n\n\tfunction handleMoreClick() {\n\t\tsetShowMore(!showMore);\n\t}\n\n\tlet sculpture = sculptureList[index];\n\treturn (\n\t\t<>\n\t\t\t<button onClick={handleNextClick}>\n\t\t\t\tNext\n\t\t\t</button>\n\t\t\t<h2>\n\t\t\t\t<i>{sculpture.name} </i> \n\t\t\t\tby {sculpture.artist}\n\t\t\t</h2>\n\t\t\t<h3>\t\n\t\t\t\t({index + 1} of {sculptureList.length})\n\t\t\t</h3>\n\t\t\t<button onClick={handleMoreClick}>\n\t\t\t\t{showMore ? 'Hide' : 'Show'} details\n\t\t\t</button>\n\t\t\t{showMore && <p>{sculpture.description}</p>}\n\t\t\t<img \n\t\t\t\tsrc={sculpture.url} \n\t\t\t\talt={sculpture.alt}\n\t\t\t/>\n\t\t</>\n\t);\n}\n\n\nexport const MultipleGalleryDisplay = () => {\n\treturn (\n\t\t<div className=\"Page\">\n\t\t\t<MultipleGallery />\n\t\t\t<MultipleGallery />\n\t\t</div>\n\t);\n}\n\n\nexport const TextStateBugFix= () => {\n\tconst [firstName, setFirstName] = useState(\"\");\n\tconst [lastName, setLastName] = useState(\"\");\n\n\tfunction handleFirstNameChange(e) {\n\t\tsetFirstName(e.target.value);\n\t}\n\n\tfunction handleLastNameChange(e) {\n\t\tsetLastName(e.target.value);\n\t}\n\n\tfunction handleReset() {\n\t\tsetFirstName('');\n\t\tsetLastName('');\n\t}\n\n\treturn (\n\t\t<form onSubmit={e => e.preventDefault()}>\n\t\t\t<input\n\t\t\t\tplaceholder=\"First name\"\n\t\t\t\tvalue={firstName}\n\t\t\t\tonChange={handleFirstNameChange}\n\t\t\t/>\n\t\t\t<input\n\t\t\t\tplaceholder=\"Last name\"\n\t\t\t\tvalue={lastName}\n\t\t\t\tonChange={handleLastNameChange}\n\t\t\t/>\n\t\t\t<h1>Hi, {firstName} {lastName}</h1>\n\t\t\t<button onClick={handleReset}>Reset</button>\n\t\t</form>\n\t);\n}\n\n\nexport const SubmitTextCrash= () => {\n\tconst [isSent, setIsSent] = useState(false);\n\tconst [message, setMessage] = useState('');\n\tif (isSent) {\n\t\treturn <h1>Thank you!</h1>;\n\t} else {\n\t\t// eslint-disable-next-line\n\t\treturn (\n\t\t\t<form onSubmit={e => {\n\t\t\t\te.preventDefault();\n\t\t\t\talert(`Sending: \"${message}\"`);\n\t\t\t\tsetIsSent(true);\n\t\t\t}}>\n\t\t\t\t<textarea\n\t\t\t\t\tplaceholder=\"Message\"\n\t\t\t\t\tvalue={message}\n\t\t\t\t\tonChange={e => setMessage(e.target.value)}\n\t\t\t\t/>\n\t\t\t\t<br />\n\t\t\t\t<button type=\"submit\">Send</button>\n\t\t\t</form>\n\t\t);\n\t}\n}\n\nexport const BrokenAlert= () => {\n\t//const [name, setName] = useState('');\n\n\tfunction handleClick() {\n\t\t//setName();\n\t\tlet name =prompt('What is your name?'); \n\t\talert(`Hello, ${name}!`);\n\t}\n\n\treturn (\n\t\t<button onClick={handleClick}>\n\t\t\tGreet\n\t\t</button>\n\t);\n}\n\nexport const TabButton = ({id,clickHandler}) => {\n\t\n \n\treturn (\n\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t{id}\n\t\t</button>\n\n\t)\n}\n\nexport const Tab = ({isVisible,id,content,doctype}) => {\n\n\tif(isVisible)\n\t{\n\treturn (\n\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t<h3>{id}</h3>\n\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t{content}\n\t\t</SyntaxHighlighter>\n\t\t</div>\n\t)\n\t}\n\telse\n\treturn null;\n}\n\n\n\nexport const Tabs = () => {\n\tconst [documents, setDocuments] = useState(\n\t\tdocs\n\t);\n\n\tfunction handleClick(e)\n\t{\n\t\tconst nextDocs = docs.map(doc => {\n\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t// No change\n\t\t\t\tdoc.isVisible=true;\n\t\t\t\treturn doc;\n\t\t\t} else {\n\t\t\t\t// Return a new circle 50px below\n\t\t\t\tdoc.isVisible=false;\n\t\t\t\treturn doc;\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetDocuments(nextDocs);\n\t\t\n\t}\n \n\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\treturn ( <>\n\t\t<div className=\"tab\">\n\t\t\t{listItems}\n\t\t</div>\n\t\t{documents.map(doc =>\n\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t)\n\t\t}\n\t\t</>\n\t);\n}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {Gallery} from './App.jsx'\nimport {MoreGallery} from './App.jsx'\nimport {MultipleGalleryDisplay} from './App.jsx'\nimport {TextStateBugFix} from './App.jsx'\nimport {SubmitTextCrash} from './App.jsx'\nimport {BrokenAlert} from './App.jsx'\nimport {Tabs} from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<Gallery />\n\t</React.StrictMode>,\n)\n\n\n\nReactDOM.createRoot(document.getElementById('root2')).render(\n\t<React.StrictMode>\n\t\t<MoreGallery />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\t<React.StrictMode>\n\t\t<MultipleGalleryDisplay />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root4')).render(\n\t<React.StrictMode>\n\t\t<TextStateBugFix />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root5')).render(\n\t<React.StrictMode>\n\t\t<SubmitTextCrash />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root6')).render(\n\t<React.StrictMode>\n\t\t<BrokenAlert />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n\n)\n",type:"javascript"},
  {key:"data.jsx",id:"data.jsx",isVisible:false,content:"export const sculptureList = [{\n\t\tname: 'Homenaje a la Neurocirugía',\n\t\tartist: 'Marta Colvin Andrade',\n\t\tdescription: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',\n\t\turl: 'https://i.imgur.com/Mx7dA2Y.jpg',\n\t\talt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'\t\n\t}, {\n\t\tname: 'Floralis Genérica',\n\t\tartist: 'Eduardo Catalano',\n\t\tdescription: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',\n\t\turl: 'https://i.imgur.com/ZF6s192m.jpg',\n\t\talt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'\n\t}, {\n\t\tname: 'Eternal Presence',\n\t\tartist: 'John Woodrow Wilson',\n\t\tdescription: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as \"a symbolic Black presence infused with a sense of universal humanity.\"',\n\t\turl: 'https://i.imgur.com/aTtVpES.jpg',\n\t\talt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'\n\t}, {\n\t\tname: 'Moai',\n\t\tartist: 'Unknown Artist',\n\t\tdescription: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',\n\t\turl: 'https://i.imgur.com/RCwLEoQm.jpg',\n\t\talt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'\n\t}, {\n\t\tname: 'Blue Nana',\n\t\tartist: 'Niki de Saint Phalle',\n\t\tdescription: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',\n\t\turl: 'https://i.imgur.com/Sd1AgUOm.jpg',\n\t\talt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'\n\t}, {\n\t\tname: 'Ultimate Form',\n\t\tartist: 'Barbara Hepworth',\n\t\tdescription: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',\n\t\turl: 'https://i.imgur.com/2heNQDcm.jpg',\n\t\talt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'\n\t}, {\n\t\tname: 'Cavaliere',\n\t\tartist: 'Lamidi Olonade Fakeye',\n\t\tdescription: \"Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.\",\n\t\turl: 'https://i.imgur.com/wIdGuZwm.png',\n\t\talt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'\n\t}, {\n\t\tname: 'Big Bellies',\n\t\tartist: 'Alina Szapocznikow',\n\t\tdescription: \"Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.\",\n\t\turl: 'https://i.imgur.com/AlHTAdDm.jpg',\n\t\talt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'\n\t}, {\n\t\tname: 'Terracotta Army',\n\t\tartist: 'Unknown Artist',\n\t\tdescription: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',\n\t\turl: 'https://i.imgur.com/HMFmH6m.jpg',\n\t\talt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'\n\t}, {\n\t\tname: 'Lunar Landscape',\n\t\tartist: 'Louise Nevelson',\n\t\tdescription: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',\n\t\turl: 'https://i.imgur.com/rN7hY6om.jpg',\n\t\talt: 'A black matte sculpture where the individual elements are initially indistinguishable.'\n\t}, {\n\t\tname: 'Aureole',\n\t\tartist: 'Ranjani Shettar',\n\t\tdescription: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a \"fine synthesis of unlikely materials.\"',\n\t\turl: 'https://i.imgur.com/okTpbHhm.jpg',\n\t\talt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'\n\t}, {\n\t\tname: 'Hippos',\n\t\tartist: 'Taipei Zoo',\n\t\tdescription: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',\n\t\turl: 'https://i.imgur.com/6o5Vuyu.jpg',\n\t\talt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'\n\t}];",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root1\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10a</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts with multiple states: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root2\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10b</h1>\n\t\t\t<p>This tutorial demonstrates component state concepts with multiple components with the same states. Each state for each component should behave separately: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10c</h1>\n\t\t\t<p>This section is a bugfix for states. The textboxes below should accept and retain the names between render states: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root4\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10d</h1>\n\t\t\t<p>This section is a bugfix for states. The submit function should not crash: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root5\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 10e</h1>\n\t\t\t<p>This section is a bugfix for states. The alert box should show hello and the name not just Hello !: <a href=\"https://react.dev/learn/state-a-components-memory\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root6\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tdisplay: block;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n#header\n{\n\twidth:100%;\n\tmin-height:150px;\n}\n\n/* Style the tab */\n.tab {\n\toverflow: hidden;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f1f1f1;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n\tbackground-color: inherit;\n\tfloat: left;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n\tpadding: 14px 16px;\n\ttransition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n\tbackground-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n\tbackground-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n\tdisplay: block;\n\tpadding: 6px 12px;\n\tborder: 1px solid #ccc;\n\tborder-top: none;\n}\n\n.tabcontent {\n\tanimation: fadeEffect 1s; /* Fading effect takes 1 second */\n}\n\n/* Go from zero to full opacity */\n@keyframes fadeEffect {\n\tfrom {opacity: 0;}\n\tto {opacity: 1;}\n}",type:"css"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n",type:"css"}

];

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}


export const MoreGallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}


export const MultipleGalleryDisplay = () => {
  return (
    <div className="Page">
      <MultipleGallery />
      <MultipleGallery />
    </div>
  );
}


export const TextStateBugFix= () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}


export const SubmitTextCrash= () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export const BrokenAlert= () => {
  //const [name, setName] = useState('');

  function handleClick() {
    //setName();
    let name =prompt('What is your name?'); 
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
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