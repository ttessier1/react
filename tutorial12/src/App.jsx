import { useState } from 'react'
import { useImmer } from 'use-immer';
import './App.css'
import Background from './Background.jsx';
import Box from './Box.jsx';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import { useState } from 'react'\nimport { useImmer } from 'use-immer';\nimport './App.css'\nimport Background from './Background.jsx';\nimport Box from './Box.jsx';\n\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"Background.jsx\",id:\"Background.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"Box.jsx\",id:\"Box.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"..\",type:\"css\"}\n];\n\nexport const MovingDot = () => {\n\tconst [position, setPosition] = useState({\n\t\tx: 0,\n\t\ty: 0\n\t});\n\treturn (\n\t\t<div\n\t\tonPointerMove={e => {\n\t\t\tsetPosition({\n\t\t\t\tx: e.clientX,\n\t\t\t\ty: e.clientY\n\t\t\t});\n\t\t}}\n\t\t\tstyle={{\n\t\t\t\tposition: 'relative',\n\t\t\t\twidth: '50vw',\n\t\t\t\theight: '50vh',\n\t\t\t}}>\n\t\t\t<div style={{\n\t\t\t\tposition: 'absolute',\n\t\t\t\tbackgroundColor: 'red',\n\t\t\t\tborderRadius: '50%',\n\t\t\t\ttransform: `translate(${position.x}px, ${position.y}px)`,\n\t\t\t\tleft: -10,\n\t\t\t\ttop: -10,\n\t\t\t\twidth: 20,\n\t\t\t\theight: 20,\n\t\t\t}} />\n\t\t</div>\n\t);\n}\n\nexport const Form1Broken = () => {\n\tconst [person, setPerson] = useState({\n\t\tfirstName: 'Barbara',\n\t\tlastName: 'Hepworth',\n\t\temail: 'bhepworth@sculpture.com'\n\t});\n\n\tfunction handleFirstNameChange(e) {\n\t\tperson.firstName = e.target.value;\n\t}\n\n\tfunction handleLastNameChange(e) {\n\t\tperson.lastName = e.target.value;\n\t}\n\n\tfunction handleEmailChange(e) {\n\t\tperson.email = e.target.value;\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<label>\n\t\t\t\tFirst name:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.firstName}\n\t\t\t\t\tonChange={handleFirstNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tLast name:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.lastName}\n\t\t\t\t\tonChange={handleLastNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tEmail:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.email}\n\t\t\t\t\tonChange={handleEmailChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<p>\n\t\t\t\t{person.firstName}{' '}\n\t\t\t\t{person.lastName}{' '}\n\t\t\t\t({person.email})\n\t\t\t</p>\n\t\t</>\n\t);\n}\n\nexport const Form2Working= () =>{\n\tconst [person, setPerson] = useState({\n\t\tfirstName: 'Barbara',\n\t\tlastName: 'Hepworth',\n\t\temail: 'bhepworth@sculpture.com'\n\t});\n\n\tfunction handleFirstNameChange(e) {\n\t\tsetPerson({...person,firstName: e.target.value});\n\t}\n\n\tfunction handleLastNameChange(e) {\n\t\tsetPerson({...person,lastName: e.target.value});\n\t\t//person.lastName = e.target.value;\n\t}\n\n\tfunction handleEmailChange(e) {\n\t\tsetPerson({...person, email: e.target.value});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<label>\n\t\t\t\tFirst name:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.firstName}\n\t\t\t\t\tonChange={handleFirstNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tLast name:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.lastName}\n\t\t\t\t\tonChange={handleLastNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tEmail:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.email}\n\t\t\t\t\tonChange={handleEmailChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<p>\n\t\t\t\t{person.firstName}{' '}\n\t\t\t\t{person.lastName}{' '}\n\t\t\t\t({person.email})\n\t\t\t</p>\n\t\t</>\n\t);\n\n}\n\nexport const Form3Working= () =>{\n\tconst [person, setPerson] = useState({\n\t\tfirstName: 'Barbara',\n\t\tlastName: 'Hepworth',\n\t\temail: 'bhepworth@sculpture.com'\n\t});\n\n\tfunction handleChange(e) {\n\t\tsetPerson({...person,[e.target.name]: e.target.value});\n\t}\n\n\n\treturn (\n\t\t<>\n\t\t\t<label>\n\t\t\t\tFirst name:\n\t\t\t\t<input\n\t\t\t\t\tname=\"firstName\"\n\t\t\t\t\tvalue={person.firstName}\n\t\t\t\t\tonChange={handleChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tLast name:\n\t\t\t\t<input\n\t\t\t\t\tname=\"lastName\"\n\t\t\t\t\tvalue={person.lastName}\n\t\t\t\t\tonChange={handleChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tEmail:\n\t\t\t\t<input\n\t\t\t\t\tname=\"email\"\n\t\t\t\t\tvalue={person.email}\n\t\t\t\t\tonChange={handleChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<p>\n\t\t\t\t{person.firstName}{' '}\n\t\t\t\t{person.lastName}{' '}\n\t\t\t\t({person.email})\n\t\t\t</p>\n\t\t</>\n\t);\n\n}\n\nexport const NestedObjectForm = () => {\n\tconst [person, setPerson] = useState({\n\t\tname: 'Niki de Saint Phalle',\n\t\tartwork: {\n\t\t\ttitle: 'Blue Nana',\n\t\t\tcity: 'Hamburg',\n\t\t\timage: 'https://i.imgur.com/Sd1AgUOm.jpg',\n\t\t}\n\t});\n\n\tfunction handleNameChange(e) {\n\t\tsetPerson({\n\t\t\t...person,\n\t\t\tname: e.target.value\n\t\t});\n\t}\n\n\tfunction handleTitleChange(e) {\n\t\tsetPerson({\n\t\t\t...person,\n\t\t\tartwork: {\n\t\t\t\t...person.artwork,\n\t\t\t\ttitle: e.target.value\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction handleCityChange(e) {\n\t\tsetPerson({\n\t\t\t...person,\n\t\t\tartwork: {\n\t\t\t\t...person.artwork,\n\t\t\t\tcity: e.target.value\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction handleImageChange(e) {\n\t\tsetPerson({\n\t\t\t...person,\n\t\t\tartwork: {\n\t\t\t\t...person.artwork,\n\t\t\t\timage: e.target.value\n\t\t\t}\n\t\t});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<label>\n\t\t\t\tName:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.name}\n\t\t\t\t\tonChange={handleNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tTitle:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.artwork.title}\n\t\t\t\t\tonChange={handleTitleChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tCity:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.artwork.city}\n\t\t\t\t\tonChange={handleCityChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tImage:\n\t\t\t\t<input\n\t\t\t\t\tvalue={person.artwork.image}\n\t\t\t\t\tonChange={handleImageChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<p>\n\t\t\t\t<i>{person.artwork.title}</i>\n\t\t\t\t{' by '}\n\t\t\t\t{person.name}\n\t\t\t\t<br />\n\t\t\t\t(located in {person.artwork.city})\n\t\t\t</p>\n\t\t\t<img \n\t\t\t\tsrc={person.artwork.image} \n\t\t\t\talt={person.artwork.title}\n\t\t\t/>\n\t\t</>\n\t);\n}\n\n\nexport const NestedObjectFormImmer = () => \n\t{\n\t\tconst [person, updatePerson] = useImmer({\n\t\t\tname: 'Niki de Saint Phalle',\n\t\t\tartwork: {\n\t\t\t\ttitle: 'Blue Nana',\n\t\t\t\tcity: 'Hamburg',\n\t\t\t\timage: 'https://i.imgur.com/Sd1AgUOm.jpg',\n\t\t\t}\n\t\t});\n\t\n\t\tfunction handleNameChange(e) {\n\t\t\tupdatePerson(draft => {\n\t\t\t\tdraft.name = e.target.value;\n\t\t\t});\n\t\t}\n\t\n\t\tfunction handleTitleChange(e) {\n\t\t\tupdatePerson(draft => {\n\t\t\t\tdraft.artwork.title = e.target.value;\n\t\t\t});\n\t\t}\n\t\n\t\tfunction handleCityChange(e) {\n\t\t\tupdatePerson(draft => {\n\t\t\t\tdraft.artwork.city = e.target.value;\n\t\t\t});\n\t\t}\n\t\n\t\tfunction handleImageChange(e) {\n\t\t\tupdatePerson(draft => {\n\t\t\t\tdraft.artwork.image = e.target.value;\n\t\t\t});\n\t\t}\n\t\n\t\treturn (\n\t\t\t<>\n\t\t\t\t<label>\n\t\t\t\t\tName:\n\t\t\t\t\t<input\n\t\t\t\t\t\tvalue={person.name}\n\t\t\t\t\t\tonChange={handleNameChange}\n\t\t\t\t\t/>\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\tTitle:\n\t\t\t\t\t<input\n\t\t\t\t\t\tvalue={person.artwork.title}\n\t\t\t\t\t\tonChange={handleTitleChange}\n\t\t\t\t\t/>\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\tCity:\n\t\t\t\t\t<input\n\t\t\t\t\t\tvalue={person.artwork.city}\n\t\t\t\t\t\tonChange={handleCityChange}\n\t\t\t\t\t/>\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\tImage:\n\t\t\t\t\t<input\n\t\t\t\t\t\tvalue={person.artwork.image}\n\t\t\t\t\t\tonChange={handleImageChange}\n\t\t\t\t\t/>\n\t\t\t\t</label>\n\t\t\t\t<p>\n\t\t\t\t\t<i>{person.artwork.title}</i>\n\t\t\t\t\t{' by '}\n\t\t\t\t\t{person.name}\n\t\t\t\t\t<br />\n\t\t\t\t\t(located in {person.artwork.city})\n\t\t\t\t</p>\n\t\t\t\t<img \n\t\t\t\t\tsrc={person.artwork.image} \n\t\t\t\t\talt={person.artwork.title}\n\t\t\t\t/>\n\t\t\t</>\n\t\t);\n\t}\n\n\texport const BugFixOne = () =>\n\t\t{\n\t\t\tconst [player, setPlayer] = useState({\n\t\t\t\tfirstName: 'Ranjani',\n\t\t\t\tlastName: 'Shettar',\n\t\t\t\tscore: 10,\n\t\t\t});\n\t\t\n\t\t\tfunction handlePlusClick() {\n\t\t\t\tsetPlayer({\n\t\t\t\t\t...player,\n\t\t\t\t\tscore:player.score+1,\n\t\t\t\t});\n\t\t\t}\n\t\t\n\t\t\tfunction handleFirstNameChange(e) {\n\t\t\t\tsetPlayer({\n\t\t\t\t\t...player,\n\t\t\t\t\tfirstName: e.target.value,\n\t\t\t\t});\n\t\t\t}\n\t\t\n\t\t\tfunction handleLastNameChange(e) {\n\t\t\t\tsetPlayer({\n\t\t\t\t\t...player,\n\t\t\t\t\tlastName: e.target.value\n\t\t\t\t});\n\t\t\t}\n\t\t\n\t\t\treturn (\n\t\t\t\t<>\n\t\t\t\t\t<label>\n\t\t\t\t\t\tScore: <b>{player.score}</b>\n\t\t\t\t\t\t{' '}\n\t\t\t\t\t\t<button onClick={handlePlusClick}>\n\t\t\t\t\t\t\t+1\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label>\n\t\t\t\t\t\tFirst name:\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tvalue={player.firstName}\n\t\t\t\t\t\t\tonChange={handleFirstNameChange}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label>\n\t\t\t\t\t\tLast name:\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tvalue={player.lastName}\n\t\t\t\t\t\t\tonChange={handleLastNameChange}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</label>\n\t\t\t\t</>\n\t\t\t);\n\t\t}\n\t\t\n\t\tconst initialPosition = {\n\t\t\tx: 0,\n\t\t\ty: 0\n\t\t};\n\nexport const BugFixTwo = () =>\n{\n\n\tconst [shape, setShape] = useState({\n\t\tcolor: 'orange',\n\t\tposition: initialPosition\n\t});\n\t\t\t\t\n\tfunction handleMove(dx, dy) {\n\t\tsetShape({\n\t\t\t...shape,\n\t\t\tposition:{\n\t\t\t\tx: shape.position.x + dx,\n\t\t\t\ty: shape.position.y + dy\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction handleColorChange(e) {\n\t\tsetShape({\n\t\t\t...shape,\n\t\t\tcolor: e.target.value\n\t\t});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<select\n\t\t\t\tvalue={shape.color}\n\t\t\t\tonChange={handleColorChange}\n\t\t\t>\n\t\t\t\t<option value=\"orange\">orange</option>\n\t\t\t\t<option value=\"lightpink\">lightpink</option>\n\t\t\t\t<option value=\"aliceblue\">aliceblue</option>\n\t\t\t</select>\n\t\t\t<Background\n\t\t\t\tposition={initialPosition}\n\t\t\t/>\n\t\t\t<Box\n\t\t\t\tcolor={shape.color}\n\t\t\t\tposition={shape.position}\n\t\t\t\tonMove={handleMove}\n\t\t\t>\n\t\t\t\tDrag me!\n\t\t\t</Box>\n\t\t</>\n\t);\n}\n\n\n\nexport const BugFixThree = () => {\n\tconst [shape, setShape] = useImmer({\n\t\tcolor: 'orange',\n\t\tposition: initialPosition\n\t});\n\n\tfunction handleMove(dx, dy) {\n\t\tsetShape(draft => {\n\t\t\tdraft.position.x += dx,\n\t\t\tdraft.position.y += dy\n\n\t\t});\n\t}\n\n\tfunction handleColorChange(e) {\n\t\tsetShape(draft => {\n\t\t\tdraft.color = e.target.value\n\t\t});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<select\n\t\t\t\tvalue={shape.color}\n\t\t\t\tonChange={handleColorChange}\n\t\t\t>\n\t\t\t\t<option value=\"orange\">orange</option>\n\t\t\t\t<option value=\"lightpink\">lightpink</option>\n\t\t\t\t<option value=\"aliceblue\">aliceblue</option>\n\t\t\t</select>\n\t\t\t<Background\n\t\t\t\tposition={initialPosition}\n\t\t\t/>\n\t\t\t<Box\n\t\t\t\tcolor={shape.color}\n\t\t\t\tposition={shape.position}\n\t\t\t\tonMove={handleMove}\n\t\t\t>\n\t\t\t\tDrag me!\n\t\t\t</Box>\n\t\t</>\n\t);\n}\n\n\nexport const TabButton = ({id,clickHandler}) => {\n\t\n \n\treturn (\n\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t{id}\n\t\t</button>\n\n\t)\n}\n\nexport const Tab = ({isVisible,id,content,doctype}) => {\n\n\tif(isVisible)\n\t{\n\treturn (\n\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t<h3>{id}</h3>\n\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t{content}\n\t\t</SyntaxHighlighter>\n\t\t</div>\n\t)\n\t}\n\telse\n\treturn null;\n}\n\n\n\nexport const Tabs = () => {\n\tconst [documents, setDocuments] = useState(\n\t\tdocs\n\t);\n\n\tfunction handleClick(e)\n\t{\n\t\tconst nextDocs = docs.map(doc => {\n\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t// No change\n\t\t\t\tdoc.isVisible=true;\n\t\t\t\treturn doc;\n\t\t\t} else {\n\t\t\t\t// Return a new circle 50px below\n\t\t\t\tdoc.isVisible=false;\n\t\t\t\treturn doc;\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetDocuments(nextDocs);\n\t\t\n\t}\n \n\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\treturn ( <>\n\t\t<div className=\"tab\">\n\t\t\t{listItems}\n\t\t</div>\n\t\t{documents.map(doc =>\n\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t)\n\t\t}\n\t\t</>\n\t);\n}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {MovingDot} from './App.jsx'\nimport {Form1Broken} from './App.jsx'\nimport {Form2Working} from './App.jsx'\nimport {Form3Working} from './App.jsx'\nimport {NestedObjectForm} from './App.jsx'\nimport {NestedObjectFormImmer} from './App.jsx'\nimport {BugFixOne} from './App.jsx'\nimport {BugFixTwo} from './App.jsx'\nimport {BugFixThree} from './App.jsx'\nimport {Tabs} from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<MovingDot />\n\t</React.StrictMode>,\n)\n\n\nReactDOM.createRoot(document.getElementById('root2a')).render(\n\t<React.StrictMode>\n\t\t<Form1Broken />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root2b')).render(\n\t<React.StrictMode>\n\t\t<Form2Working />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root2c')).render(\n\t<React.StrictMode>\n\t\t<Form3Working />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\t<React.StrictMode>\n\t\t<NestedObjectForm />\n\t</React.StrictMode>\n\n)\n\nReactDOM.createRoot(document.getElementById('root4')).render(\n\t<React.StrictMode>\n\t\t<NestedObjectFormImmer />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root5')).render(\n\t<React.StrictMode>\n\t\t<BugFixOne />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root6')).render(\n\t<React.StrictMode>\n\t\t<BugFixTwo />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root7')).render(\n\t<React.StrictMode>\n\t\t<BugFixThree />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n\n)",type:"javascript"},
  {key:"Background.jsx",id:"Background.jsx",isVisible:false,content:"export default function Background({\n\t\tposition\n\t}) {\n\t\treturn (\n\t\t\t<div style={{\n\t\t\t\tposition: 'absolute',\n\t\t\t\ttransform: `translate(\n\t\t\t\t\t${position.x}px,\n\t\t\t\t\t${position.y}px\n\t\t\t\t)`,\n\t\t\t\twidth: 250,\n\t\t\t\theight: 250,\n\t\t\t\tbackgroundColor: 'rgba(200, 200, 0, 0.2)',\n\t\t\t}} />\n\t\t);\n\t};\n\t",type:"javascript"},
  {key:"Box.jsx",id:"Box.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport default function Box({\n\tchildren,\n\tcolor,\n\tposition,\n\tonMove\n}) {\n\tconst [\n\t\tlastCoordinates,\n\t\tsetLastCoordinates\n\t] = useState(null);\n\n\tfunction handlePointerDown(e) {\n\t\te.target.setPointerCapture(e.pointerId);\n\t\tsetLastCoordinates({\n\t\t\tx: e.clientX,\n\t\t\ty: e.clientY,\n\t\t});\n\t}\n\n\tfunction handlePointerMove(e) {\n\t\tif (lastCoordinates) {\n\t\t\tsetLastCoordinates({\n\t\t\t\tx: e.clientX,\n\t\t\t\ty: e.clientY,\n\t\t\t});\n\t\t\tconst dx = e.clientX - lastCoordinates.x;\n\t\t\tconst dy = e.clientY - lastCoordinates.y;\n\t\t\tonMove(dx, dy);\n\t\t}\n\t}\n\n\tfunction handlePointerUp(e) {\n\t\tsetLastCoordinates(null);\n\t}\n\n\treturn (\n\t\t<div\n\t\t\tonPointerDown={handlePointerDown}\n\t\t\tonPointerMove={handlePointerMove}\n\t\t\tonPointerUp={handlePointerUp}\n\t\t\tstyle={{\n\t\t\t\twidth: 100,\n\t\t\t\theight: 100,\n\t\t\t\tcursor: 'grab',\n\t\t\t\tbackgroundColor: color,\n\t\t\t\tposition: 'absolute',\n\t\t\t\tborder: '1px solid black',\n\t\t\t\tdisplay: 'flex',\n\t\t\t\tjustifyContent: 'center',\n\t\t\t\talignItems: 'center',\n\t\t\t\ttransform: `translate(\n\t\t\t\t\t${position.x}px,\n\t\t\t\t\t${position.y}px\n\t\t\t\t)`,\n\t\t\t}}\n\t\t>{children}</div>\n\t);\n}",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12a</h1>\n\t\t\t<p>This tutorial demonstrates updating objects in state: for the following example the mouse should move the red circle around the screen, but depends on the state function being called with the cursor x, y position and not just applying the properties to the object.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root1\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12b</h1>\n\t\t\t<p>This tutorial demonstrates updating objects in statee: in this example the form should work by the text fields being modified and updating the content below the form. But the text fields wont update if the properties are modified directly and not by state The form on the right should work and the next line form should contain a single handler that handles all three form items and properties.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root2a\"></div>\n\t\t<div id=\"root2b\"></div>\n\t\t<div id=\"root2c\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12c</h1>\n\t\t\t<p>This tutorial demonstrates updating objects in statee: \n\t\t\t\tin this example, the state is a nested object and so the full classification of the state is used to update the specific items.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12d</h1>\n\t\t\t<p>This tutorial demonstrates updating objects in statee: \n\t\t\t\tin this example, the state is a updated using immer, a helper mechanism to simplify making state changes.\n\t\t\t\tBut otherwise this example should work as the previous one.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root4\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12e</h1>\n\t\t\t<p>This section is a bugfix. In the original code, the button does not increment untilt the first textbox is changed and the second text box crashes on changes. The code here should work and allow the increment button to increment and the text boxes to be edited without crashing.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root5\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12f</h1>\n\t\t\t<p>This section is a bugfix. In the original code, the box small moves fine, but when the color dropdown is changed, so does the large box. The solution below should allow only the small box to move.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root6\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 12g</h1>\n\t\t\t<p>This section is a bugfix. Same code as the previous example but solving with Immer. The solution below should allow only the small box to move.<a href=\"https://react.dev/learn/updating-objects-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root7\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: sans-serif;\n\tmargin: 20px;\n\tpadding: 0;\n}\n\nh1 {\n\tmargin-top: 0;\n\tfont-size: 22px;\n}\n\nh2 {\n\tmargin-top: 0;\n\tfont-size: 20px;\n}\n\nh3 {\n\tmargin-top: 0;\n\tfont-size: 18px;\n}\n\nh4 {\n\tmargin-top: 0;\n\tfont-size: 16px;\n}\n\nh5 {\n\tmargin-top: 0;\n\tfont-size: 14px;\n}\n\nh6 {\n\tmargin-top: 0;\n\tfont-size: 12px;\n}\n\ncode {\n\tfont-size: 1.2em;\n}\n\nul {\n\tpadding-inline-start: 20px;\n}\n\nbody { margin: 0; padding: 0; height: 250px; }\n\n#header{\n\twidth:100%;\n}\n\ndiv#root2a{\n\tmargin: 10px 0 2.5% 2.5%;\n\theight:70px;\n\twidth:45%;\n\tborder: solid black 1px;\n\tfloat:left;\n}\n\ndiv#root2b\n{\n\tmargin: 10px 0 2.5% 2.5%;\n\twidth:45%;\n\theight:70px;\n\tborder: solid black 1px;\n\tfloat:left;\n}\n\ndiv#root2c\n{\n\tmargin: 10px auto auto auto;\n\twidth:45%;\n\theight:70px;\n\tborder: solid black 1px;\n\tclear:both;\n}\n\ndiv#root6{\n\theight:300px;\n\n}\n\ndiv#root7{\n\theight:300px;\n\n}",type:"css"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n",type:"css"}
];

export const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
    onPointerMove={e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }}
      style={{
        position: 'relative',
        width: '50vw',
        height: '50vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

export const Form1Broken = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

export const Form2Working= () =>{
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({...person,firstName: e.target.value});
  }

  function handleLastNameChange(e) {
    setPerson({...person,lastName: e.target.value});
    //person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    setPerson({...person, email: e.target.value});
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );

}

export const Form3Working= () =>{
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({...person,[e.target.name]: e.target.value});
  }


  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );

}

export const NestedObjectForm = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}


export const NestedObjectFormImmer = () => 
  {
    const [person, updatePerson] = useImmer({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });
  
    function handleNameChange(e) {
      updatePerson(draft => {
        draft.name = e.target.value;
      });
    }
  
    function handleTitleChange(e) {
      updatePerson(draft => {
        draft.artwork.title = e.target.value;
      });
    }
  
    function handleCityChange(e) {
      updatePerson(draft => {
        draft.artwork.city = e.target.value;
      });
    }
  
    function handleImageChange(e) {
      updatePerson(draft => {
        draft.artwork.image = e.target.value;
      });
    }
  
    return (
      <>
        <label>
          Name:
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img 
          src={person.artwork.image} 
          alt={person.artwork.title}
        />
      </>
    );
  }

  export const BugFixOne = () =>
    {
      const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
      });
    
      function handlePlusClick() {
        setPlayer({
          ...player,
          score:player.score+1,
        });
      }
    
      function handleFirstNameChange(e) {
        setPlayer({
          ...player,
          firstName: e.target.value,
        });
      }
    
      function handleLastNameChange(e) {
        setPlayer({
          ...player,
          lastName: e.target.value
        });
      }
    
      return (
        <>
          <label>
            Score: <b>{player.score}</b>
            {' '}
            <button onClick={handlePlusClick}>
              +1
            </button>
          </label>
          <label>
            First name:
            <input
              value={player.firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last name:
            <input
              value={player.lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </>
      );
    }
    
    const initialPosition = {
      x: 0,
      y: 0
    };

export const BugFixTwo = () =>
{

  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });
        
  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position:{
        x: shape.position.x + dx,
        y: shape.position.y + dy
      }
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}



export const BugFixThree = () => {
  const [shape, setShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape(draft => {
      draft.position.x += dx,
      draft.position.y += dy

    });
  }

  function handleColorChange(e) {
    setShape(draft => {
      draft.color = e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
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