import { useState } from 'react'
import { useReducer } from 'react'
import Chat from './Chat.jsx'
import ContactList from './ContactList.jsx'
import {AddTask} from './AddTask.jsx'
import {TaskList} from './TaskList.jsx'
import {Heading} from './Heading.jsx'
import {Section} from './Section.jsx'
import {TasksProvider} from './TasksContext.jsx';
import {AddTask14g} from './AddTask14g.jsx'
import {TaskList14g} from './TaskList14g.jsx'
import './App.css'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import { useState } from 'react'\nimport { useReducer } from 'react'\nimport Chat from './Chat.jsx'\nimport ContactList from './ContactList.jsx'\nimport {AddTask} from './AddTask.jsx'\nimport {TaskList} from './TaskList.jsx'\nimport {Heading} from './Heading.jsx'\nimport {Section} from './Section.jsx'\nimport {TasksProvider} from './TasksContext.jsx';\nimport {AddTask14g} from './AddTask14g.jsx'\nimport {TaskList14g} from './TaskList14g.jsx'\nimport './App.css'\n\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"data.jsx\",id:\"data.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"...\",type:\"css\"}\n];\n\n\nlet nextId = 3;\nexport const Tutorial14a = () => {\n\tconst [answer, setAnswer] = useState('');\n\tconst [error, setError] = useState(null);\n\tconst [status, setStatus] = useState('typing');\n\n\tif (status === 'success') {\n\t\treturn <h1>That&apos;s right!</h1>\n\t}\n\n\tasync function handleSubmit(e) {\n\t\te.preventDefault();\n\t\tsetStatus('submitting');\n\t\ttry {\n\t\t\tawait submitForm(answer);\n\t\t\tsetStatus('success');\n\t\t} catch (err) {\n\t\t\tsetStatus('typing');\n\t\t\tsetError(err);\n\t\t}\n\t}\n\n\tfunction handleTextareaChange(e) {\n\t\tsetAnswer(e.target.value);\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h2>City quiz</h2>\n\t\t\t<p>\n\t\t\t\tIn which city is there a billboard that turns air into drinkable water?\n\t\t\t</p>\n\t\t\t<form onSubmit={handleSubmit}>\n\t\t\t\t<textarea\n\t\t\t\t\tvalue={answer}\n\t\t\t\t\tonChange={handleTextareaChange}\n\t\t\t\t\tdisabled={status === 'submitting'}\n\t\t\t\t/>\n\t\t\t\t<br />\n\t\t\t\t<button disabled={\n\t\t\t\t\tanswer.length === 0 ||\n\t\t\t\t\tstatus === 'submitting'\n\t\t\t\t}>\n\t\t\t\t\tSubmit\n\t\t\t\t</button>\n\t\t\t\t{error !== null &&\n\t\t\t\t\t<p className=\"Error\">\n\t\t\t\t\t\t{error.message}\n\t\t\t\t\t</p>\n\t\t\t\t}\n\t\t\t</form>\n\t\t</>\n\t);\n}\n\n\nfunction submitForm(answer) {\n\t// Pretend it's hitting the network.\n\treturn new Promise((resolve, reject) => {\n\t\tsetTimeout(() => {\n\t\t\tlet shouldError = answer.toLowerCase() !== 'lima'\n\t\t\tif (shouldError) {\n\t\t\t\treject(new Error('Good guess but a wrong answer. Try again!'));\n\t\t\t} else {\n\t\t\t\tresolve();\n\t\t\t}\n\t\t}, 1500);\n\t});\n}\n\nexport const Tutorial14b = () => {\n\tconst [firstName, setFirstName] = useState('');\n\tconst [lastName, setLastName] = useState('');\n\n\tconst fullName = firstName + ' ' + lastName;\n\n\tfunction handleFirstNameChange(e) {\n\t\tsetFirstName(e.target.value);\n\t}\n\n\tfunction handleLastNameChange(e) {\n\t\tsetLastName(e.target.value);\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h2>Let’s check you in</h2>\n\t\t\t<label>\n\t\t\t\tFirst name:{' '}\n\t\t\t\t<input\n\t\t\t\t\tvalue={firstName}\n\t\t\t\t\tonChange={handleFirstNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tLast name:{' '}\n\t\t\t\t<input\n\t\t\t\t\tvalue={lastName}\n\t\t\t\t\tonChange={handleLastNameChange}\n\t\t\t\t/>\n\t\t\t</label>\n\t\t\t<p>\n\t\t\t\tYour ticket will be issued to: <b>{fullName}</b>\n\t\t\t</p>\n\t\t</>\n\t);\n}\n\nexport const Tutorial14c = () => {\n\tconst [activeIndex, setActiveIndex] = useState(0);\n\treturn (\n\t\t<>\n\t\t\t<h2>Almaty, Kazakhstan</h2>\n\t\t\t<Panel\n\t\t\t\ttitle=\"About\"\n\t\t\t\tisActive={activeIndex === 0}\n\t\t\t\tonShow={() => setActiveIndex(0)}\n\t\t\t>\n\t\t\t\tWith a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.\n\t\t\t</Panel>\n\t\t\t<Panel\n\t\t\t\ttitle=\"Etymology\"\n\t\t\t\tisActive={activeIndex === 1}\n\t\t\t\tonShow={() => setActiveIndex(1)}\n\t\t\t>\n\t\t\t\tThe name comes from <span lang=\"kk-KZ\">алма</span>, the Kazakh word for \"apple\" and is often translated as \"full of apples\". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang=\"la\">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.\n\t\t\t</Panel>\n\t\t</>\n\t);\n}\n\nfunction Panel({\n\ttitle,\n\tchildren,\n\tisActive,\n\tonShow\n}) {\n\treturn (\n\t\t<section className=\"panel\">\n\t\t\t<h3>{title}</h3>\n\t\t\t{isActive ? (\n\t\t\t\t<p>{children}</p>\n\t\t\t) : (\n\t\t\t\t<button onClick={onShow}>\n\t\t\t\t\tShow\n\t\t\t\t</button>\n\t\t\t)}\n\t\t</section>\n\t);\n}\n\nconst contacts = [\n\t{ name: 'Taylor', email: 'taylor@mail.com', text:'' },\n\t{ name: 'Alice', email: 'alice@mail.com', text:'' },\n\t{ name: 'Bob', email: 'bob@mail.com', text:'' }\n];\n\n\n\nexport const Tutorial14d = () => {\n\tconst [to, setTo] = useState(contacts[0]);\n\treturn (\n\t\t<div>\n\t\t\t<ContactList\n\t\t\t\tcontacts={contacts}\n\t\t\t\tselectedContact={to}\n\t\t\t\tonSelect={contact => setTo(contact)}\n\t\t\t/>\n\t\t\t<Chat key={to.id} contact={to} />\n\t\t</div>\n\t)\n}\n\nconst tutorial14eInitialTasks = [\n\t{ id: 0, text: 'Visit Kafka Museum', done: true },\n\t{ id: 1, text: 'Watch a puppet show', done: false },\n\t{ id: 2, text: 'Lennon Wall pic', done: false }\n];\n\nexport const Tutorial14e = () => {\n\n\tconst [tasks, dispatch] = useReducer(\n\t\ttasksReducer,\n\t\ttutorial14eInitialTasks\n\t);\n\n\tfunction handleAddTask(text) {\n\t\tdispatch({\n\t\t\ttype: 'added',\n\t\t\tid: nextId++,\n\t\t\ttext: text,\n\t\t});\n\t}\n\n\tfunction handleChangeTask(task) {\n\t\tdispatch({\n\t\t\ttype: 'changed',\n\t\t\ttask: task\n\t\t});\n\t}\n\n\tfunction handleDeleteTask(taskId) {\n\t\tdispatch({\n\t\t\ttype: 'deleted',\n\t\t\tid: taskId\n\t\t});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Prague itinerary</h1>\n\t\t\t<AddTask\n\t\t\t\tonAddTask={handleAddTask}\n\t\t\t/>\n\t\t\t<TaskList\n\t\t\t\ttasks={tasks}\n\t\t\t\tonChangeTask={handleChangeTask}\n\t\t\t\tonDeleteTask={handleDeleteTask}\n\t\t\t/>\n\t\t</>\n\t);\n}\n\nfunction tasksReducer(tasks, action) {\n\tswitch (action.type) {\n\t\tcase 'added': {\n\t\t\treturn [...tasks, {\n\t\t\t\tid: action.id,\n\t\t\t\ttext: action.text,\n\t\t\t\tdone: false\n\t\t\t}];\n\t\t}\n\t\tcase 'changed': {\n\t\t\treturn tasks.map(t => {\n\t\t\t\tif (t.id === action.task.id) {\n\t\t\t\t\treturn action.task;\n\t\t\t\t} else {\n\t\t\t\t\treturn t;\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t\tcase 'deleted': {\n\t\t\treturn tasks.filter(t => t.id !== action.id);\n\t\t}\n\t\tdefault: {\n\t\t\tthrow Error('Unknown action: ' + action.type);\n\t\t}\n\t}\n}\n\nexport const Tutorial14f = () => {\n\treturn (\n\t\t<Section>\n\t\t\t<Heading>Title</Heading>\n\t\t\t<Section>\n\t\t\t\t<Heading>Heading</Heading>\n\t\t\t\t<Heading>Heading</Heading>\n\t\t\t\t<Heading>Heading</Heading>\n\t\t\t\t<Section>\n\t\t\t\t\t<Heading>Sub-heading</Heading>\n\t\t\t\t\t<Heading>Sub-heading</Heading>\n\t\t\t\t\t<Heading>Sub-heading</Heading>\n\t\t\t\t\t<Section>\n\t\t\t\t\t\t<Heading>Sub-sub-heading</Heading>\n\t\t\t\t\t\t<Heading>Sub-sub-heading</Heading>\n\t\t\t\t\t\t<Heading>Sub-sub-heading</Heading>\n\t\t\t\t\t</Section>\n\t\t\t\t</Section>\n\t\t\t</Section>\n\t\t</Section>\n\t);\n}\n\nexport const Tutorial14g = () => {\n\treturn (\n\t\t<TasksProvider>\n\t\t\t<h1>Day off in Kyoto</h1>\n\t\t\t<AddTask14g />\n\t\t\t<TaskList14g />\n\t\t</TasksProvider>\n\t);\n}\n\n\nexport const TabButton = ({id,clickHandler}) => {\n\t\n \n\treturn (\n\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t{id}\n\t\t</button>\n\n\t)\n}\n\nexport const Tab = ({isVisible,id,content,doctype}) => {\n\n\tif(isVisible)\n\t{\n\treturn (\n\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t<h3>{id}</h3>\n\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t{content}\n\t\t</SyntaxHighlighter>\n\t\t</div>\n\t)\n\t}\n\telse\n\treturn null;\n}\n\n\n\nexport const Tabs = () => {\n\tconst [documents, setDocuments] = useState(\n\t\tdocs\n\t);\n\n\tfunction handleClick(e)\n\t{\n\t\tconst nextDocs = docs.map(doc => {\n\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t// No change\n\t\t\t\tdoc.isVisible=true;\n\t\t\t\treturn doc;\n\t\t\t} else {\n\t\t\t\t// Return a new circle 50px below\n\t\t\t\tdoc.isVisible=false;\n\t\t\t\treturn doc;\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetDocuments(nextDocs);\n\t\t\n\t}\n \n\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\treturn ( <>\n\t\t<div className=\"tab\">\n\t\t\t{listItems}\n\t\t</div>\n\t\t{documents.map(doc =>\n\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t)\n\t\t}\n\t\t</>\n\t);\n}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {Tutorial14a} from './App.jsx'\nimport {Tutorial14b} from './App.jsx'\nimport {Tutorial14c} from './App.jsx'\nimport {Tutorial14d} from './App.jsx'\nimport {Tutorial14e} from './App.jsx'\nimport {Tutorial14f} from './App.jsx'\nimport {Tutorial14g} from './App.jsx'\nimport {Tabs} from './Apps.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14a />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root2')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14b />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14c />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root4')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14d />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root5')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14e />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root6')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14f />\n\t</React.StrictMode>,\n)\n\n\nReactDOM.createRoot(document.getElementById('root7')).render(\n\t<React.StrictMode>\n\t\t<Tutorial14g />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n\n)",type:"javascript"},
  {key:"AddTask.jsx",id:"AddTask.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport const AddTask = ({ onAddTask }) => {\n\tconst [text, setText] = useState('');\n\treturn (\n\t\t<>\n\t\t\t<input\n\t\t\t\tplaceholder=\"Add task\"\n\t\t\t\tvalue={text}\n\t\t\t\tonChange={e => setText(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetText('');\n\t\t\t\tonAddTask(text);\n\t\t\t}}>Add</button>\n\t\t</>\n\t)\n}",type:"javascript"},
  {key:"AddTask14g.jsx",id:"AddTask14g.jsx",isVisible:false,content:"import { useState, useContext } from 'react';\nimport { useTasksDispatch } from './TasksContext.jsx';\n\nexport const\tAddTask14g = ({ onAddTask }) => {\n\tconst [text, setText] = useState('');\n\tconst dispatch = useTasksDispatch();\n\treturn (\n\t\t<>\n\t\t\t<input\n\t\t\t\tplaceholder=\"Add task\"\n\t\t\t\tvalue={text}\n\t\t\t\tonChange={e => setText(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetText('');\n\t\t\t\tdispatch({\n\t\t\t\t\ttype: 'added',\n\t\t\t\t\tid: nextId++,\n\t\t\t\t\ttext: text,\n\t\t\t\t});\n\t\t\t}}>Add</button>\n\t\t</>\n\t);\n}\n\nlet nextId = 3;\n",type:"javascript"},
  {key:"Chat.jsx",id:"Chat.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport default function Chat({ contact }) {\n\tconst [text, setText] = useState('');\n\tconst [content,setContent] = useState('');\n\n\tfunction DoSend(e)\n\t{\n\t\tconsole.log(\"Name:\" + contact.name);\n\t\tconsole.log(\"Email:\" + contact.email);\n\t\tconsole.log(\"Text:\" + text);\n\n\t\tlet myPromise = new Promise((resolve, reject) => {\n\t\ttry\n\t\t{\n\t\t\tsetTimeout(() => {\n\t\t\t\tresolve(\"You sent content:\"+text+\" to \"+contact.name + \"[\" + contact.email+\"]\");\n\t\t\t\t}, 1500);\n\t\t}\n\t\tcatch(e)\n\t\t{\n\t\t\treject(\"Failed to send\");\n\t\t}\n\t}\n\t);\n\t\tmyPromise.then(\n\t\t\tfunction (value){ setContent(value); },\n\t\t\tfunction (error){ setContent(error); },\n\t\t);\n\t}\n\treturn (\n\t\t<>\n\t\t<section className=\"chat\">\n\t\t\t<textarea\n\t\t\t\tvalue={text}\n\t\t\t\tplaceholder={'Chat to ' + contact.name}\n\t\t\t\tonChange={e => setText(e.target.value)}\n\t\t\t/>\n\t\t\t<br />\n\t\t\t<button onClick={() => DoSend(contact)} >Send to {contact.email}</button>\n\t\t\t\n\t\t</section>\n\t\t<h1>{content}</h1>\n\t\t</>\n\t);\n}\n\n",type:"javascript"},
  {key:"ContactList.jsx",id:"ContactList.jsx",isVisible:false,content:"export default function ContactList({\n\t\tselectedContact,\n\t\tcontacts,\n\t\tonSelect\n\t}) {\n\t\treturn (\n\t\t\t<section className=\"contact-list\">\n\t\t\t\t<ul>\n\t\t\t\t\t{contacts.map(contact =>\n\t\t\t\t\t\t<li key={contact.email}>\n\t\t\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\t\t\tonSelect(contact);\n\t\t\t\t\t\t\t}}>\n\t\t\t\t\t\t\t\t{contact.name}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t)}\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t);\n\t}",type:"javascript"},
  {key:"Heading.jsx",id:"Heading.jsx",isVisible:false,content:"import { useContext } from 'react';\nimport { LevelContext } from './LevelContext.jsx';\n\nexport const Heading = ({ children }) => {\n\tconst level = useContext(LevelContext);\n\tswitch (level) {\n\t\tcase 0:\n\t\t\tthrow Error('Heading must be inside a Section!');\n\t\tcase 1:\n\t\t\treturn <><p>Header Depth{level}</p><h1>{children}</h1></>;\n\t\tcase 2:\n\t\t\treturn <><p>Header Depth{level}</p><h2>{children}</h2></>;\n\t\tcase 3:\n\t\t\treturn <><p>Header Depth{level}</p><h3>{children}</h3></>;\n\t\tcase 4:\n\t\t\treturn <><p>Header Depth{level}</p><h4>{children}</h4></>;\n\t\tcase 5:\n\t\t\treturn <><p>Header Depth{level}</p><h5>{children}</h5></>;\n\t\tcase 6:\n\t\t\treturn <><p>Header Depth{level}</p><h6>{children}</h6></>;\n\t\tdefault:\n\t\t\tthrow Error('Unknown level: ' + level);\n\t}\n}\n",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14a</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this first demonstration, the form\tbelow changes the ui based on the state instead of dom manipulation.<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root1\"></div>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14b</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this second demonstration, the form below shows a First Name and Last Name\n\t\t\t\tThe state in the example is separated into First name, Last Name and Full Name.\n\t\t\t\t\n\t\t\t\tThe three states can be replaced with two states and a variable as opposed to state used to shoe the fullname\n\t\t\t\t\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root2\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14c</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this third demonstration, The panels below have a shared state which is modified by the click of either show button.\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14d</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this fourth demonstration, The form below is a sort of messenger context list and message window.\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root4\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14e</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this fifth demonstration, \n\t\t\t\tThe form below is a Task Manager like previous task managers within this tutorial series, \n\t\t\t\twith the exception that the update functions will be shared where possible using a reducer function.\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root5\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14f</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this sixth demonstration, \n\t\t\t\thtml content and elements are spread deeply nested in a hierarchy and the goal is to be able to pass context within this hierarchy.\n\n\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root6\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 14g</h1>\n\t\t\t<p>This tutorial demonstrates managing state:\n\t\t\t\tIn this seventh demonstration, \n\t\t\t\tWe are revisiting the task list but adding a reducer as well as context.\n\t\t\t\t<a href=\"https://react.dev/learn/managing-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\t\t<div id=\"root7\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \\\"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n#header{\n\twidth:100%;\n\tdisplay:block;\n\tmin-height:10px;\n\tclear: both;\n}\n\nh3, p { margin: 5px 0px; }\n.panel {\n\tpadding: 10px;\n\tborder: 1px solid #aaa;\n}\n\n.chat, .contact-list {\n\tfloat: left;\n\tmargin-bottom: 20px;\n}\nul, li {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\nli button {\n\twidth: 100px;\n\tpadding: 10px;\n\tmargin-right: 10px;\n}\ntextarea {\n\theight: 150px;\n}\n\n.section {\n\tpadding: 10px;\n\tmargin: 5px;\n\tborder-radius: 5px;\n\tborder: 1px solid #aaa;\n}\n\n/* Style the tab */\n.tab {\n\toverflow: hidden;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f1f1f1;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n\tbackground-color: inherit;\n\tfloat: left;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n\tpadding: 14px 16px;\n\ttransition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n\tbackground-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n\tbackground-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n\tdisplay: block;\n\tpadding: 6px 12px;\n\tborder: 1px solid #ccc;\n\tborder-top: none;\n}\n\n.tabcontent {\n\tanimation: fadeEffect 1s; /* Fading effect takes 1 second */\n}\n\n/* Go from zero to full opacity */\n@keyframes fadeEffect {\n\tfrom {opacity: 0;}\n\tto {opacity: 1;}\n}",type:"css"},
  {key:"LevelContext.jsx",id:"LevelContext.jsx",isVisible:false,content:"import { createContext } from 'react';\n\nexport const LevelContext = createContext(0);",type:"javascript"},
  {key:"Section.jsx",id:"Section.jsx",isVisible:false,content:"import { useContext } from 'react';\nimport { LevelContext } from './LevelContext.jsx';\n\nexport const\tSection = ({ children }) => {\n\tconst level = useContext(LevelContext);\n\treturn (\n\t\t<section className=\"section\">\n\t\t\t<LevelContext.Provider value={level + 1}>\n\t\t\t\tDepth:{level} {children}\n\t\t\t</LevelContext.Provider>\n\t\t</section>\n\t);\n}",type:"javascript"},
  {key:"TaskList.jsx",id:"TaskList.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport const TaskList = ({\n\ttasks,\n\tonChangeTask,\n\tonDeleteTask\n}) => {\n\treturn (\n\t\t<ul>\n\t\t\t{tasks.map(task => (\n\t\t\t\t<li key={task.id}>\n\t\t\t\t\t<Task\n\t\t\t\t\t\ttask={task}\n\t\t\t\t\t\tonChange={onChangeTask}\n\t\t\t\t\t\tonDelete={onDeleteTask}\n\t\t\t\t\t/>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nfunction Task({ task, onChange, onDelete }) {\n\tconst [isEditing, setIsEditing] = useState(false);\n\tlet taskContent;\n\tif (isEditing) {\n\t\ttaskContent = (\n\t\t\t<>\n\t\t\t\t<input\n\t\t\t\t\tvalue={task.text}\n\t\t\t\t\tonChange={e => {\n\t\t\t\t\t\tonChange({\n\t\t\t\t\t\t\t...task,\n\t\t\t\t\t\t\ttext: e.target.value\n\t\t\t\t\t\t});\n\t\t\t\t\t}} />\n\t\t\t\t<button onClick={() => setIsEditing(false)}>\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t} else {\n\t\ttaskContent = (\n\t\t\t<>\n\t\t\t\t{task.text}\n\t\t\t\t<button onClick={() => setIsEditing(true)}>\n\t\t\t\t\tEdit\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t}\n\treturn (\n\t\t<label>\n\t\t\t<input\n\t\t\t\ttype=\"checkbox\"\n\t\t\t\tchecked={task.done}\n\t\t\t\tonChange={e => {\n\t\t\t\t\tonChange({\n\t\t\t\t\t\t...task,\n\t\t\t\t\t\tdone: e.target.checked\n\t\t\t\t\t});\n\t\t\t\t}}\n\t\t\t/>\n\t\t\t{taskContent}\n\t\t\t<button onClick={() => onDelete(task.id)}>\n\t\t\t\tDelete\n\t\t\t</button>\n\t\t</label>\n\t);\n}\n",type:"javascript"},
  {key:"TaskList14g.jsx",id:"TaskList14g.jsx",isVisible:false,content:"import { useState, useContext } from 'react';\nimport { useTasks, useTasksDispatch } from './TasksContext.jsx';\n\nexport const TaskList14g = () => {\n\tconst tasks = useTasks();\n\treturn (\n\t\t<ul>\n\t\t\t{tasks.map(task => (\n\t\t\t\t<li key={task.id}>\n\t\t\t\t\t<Task task={task} />\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nfunction Task({ task }) {\n\tconst [isEditing, setIsEditing] = useState(false);\n\tconst dispatch = useTasksDispatch();\n\tlet taskContent;\n\tif (isEditing) {\n\t\ttaskContent = (\n\t\t\t<>\n\t\t\t\t<input\n\t\t\t\t\tvalue={task.text}\n\t\t\t\t\tonChange={e => {\n\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\ttype: 'changed',\n\t\t\t\t\t\t\ttask: {\n\t\t\t\t\t\t\t\t...task,\n\t\t\t\t\t\t\t\ttext: e.target.value\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}} />\n\t\t\t\t<button onClick={() => setIsEditing(false)}>\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t} else {\n\t\ttaskContent = (\n\t\t\t<>\n\t\t\t\t{task.text}\n\t\t\t\t<button onClick={() => setIsEditing(true)}>\n\t\t\t\t\tEdit\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t}\n\treturn (\n\t\t<label>\n\t\t\t<input\n\t\t\t\ttype=\"checkbox\"\n\t\t\t\tchecked={task.done}\n\t\t\t\tonChange={e => {\n\t\t\t\t\tdispatch({\n\t\t\t\t\t\ttype: 'changed',\n\t\t\t\t\t\ttask: {\n\t\t\t\t\t\t\t...task,\n\t\t\t\t\t\t\tdone: e.target.checked\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}}\n\t\t\t/>\n\t\t\t{taskContent}\n\t\t\t<button onClick={() => {\n\t\t\t\tdispatch({\n\t\t\t\t\ttype: 'deleted',\n\t\t\t\t\tid: task.id\n\t\t\t\t});\n\t\t\t}}>\n\t\t\t\tDelete\n\t\t\t</button>\n\t\t</label>\n\t);\n}",type:"javascript"},
  {key:"TasksContext.jsx",id:"TasksContext.jsx",isVisible:false,content:"import { createContext, useContext, useReducer } from 'react';\n\nconst TasksContext = createContext(null);\nconst TasksDispatchContext = createContext(null);\n\nexport const TasksProvider = ({ children }) => {\n\tconst [tasks, dispatch] = useReducer(\n\t\ttasksReducer,\n\t\tinitialTasks\n\t);\n\n\treturn (\n\t\t<TasksContext.Provider value={tasks}>\n\t\t\t<TasksDispatchContext.Provider\n\t\t\t\tvalue={dispatch}\n\t\t\t>\n\t\t\t\t{children}\n\t\t\t</TasksDispatchContext.Provider>\n\t\t</TasksContext.Provider>\n\t);\n}\n\nexport function useTasks() {\n\treturn useContext(TasksContext);\n}\n\nexport function useTasksDispatch() {\n\treturn useContext(TasksDispatchContext);\n}\n\nfunction tasksReducer(tasks, action) {\n\tswitch (action.type) {\n\t\tcase 'added': {\n\t\t\treturn [...tasks, {\n\t\t\t\tid: action.id,\n\t\t\t\ttext: action.text,\n\t\t\t\tdone: false\n\t\t\t}];\n\t\t}\n\t\tcase 'changed': {\n\t\t\treturn tasks.map(t => {\n\t\t\t\tif (t.id === action.task.id) {\n\t\t\t\t\treturn action.task;\n\t\t\t\t} else {\n\t\t\t\t\treturn t;\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t\tcase 'deleted': {\n\t\t\treturn tasks.filter(t => t.id !== action.id);\n\t\t}\n\t\tdefault: {\n\t\t\tthrow Error('Unknown action: ' + action.type);\n\t\t}\n\t}\n}\n\nconst initialTasks = [\n\t{ id: 0, text: 'Philosopher’s Path', done: true },\n\t{ id: 1, text: 'Visit the temple', done: false },\n\t{ id: 2, text: 'Drink matcha', done: false }\n];\n",type:"javascript"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n",type:"css"}
];


let nextId = 3;
export const Tutorial14a = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That&apos;s right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}


function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export const Tutorial14b = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

export const Tutorial14c = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com', text:'' },
  { name: 'Alice', email: 'alice@mail.com', text:'' },
  { name: 'Bob', email: 'bob@mail.com', text:'' }
];



export const Tutorial14d = () => {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  )
}

const tutorial14eInitialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

export const Tutorial14e = () => {

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    tutorial14eInitialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const Tutorial14f = () => {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export const Tutorial14g = () => {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask14g />
      <TaskList14g />
    </TasksProvider>
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