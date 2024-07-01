import { useState } from 'react'
import './App.css'
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);

const docs = [
  {key:"apps.jsx",id:"Apps.jsx",isVisible:true,content:"import { useState } from 'react'\nimport './App.css'\nimport { useImmer } from 'use-immer';\nimport AddTodo from './AddTodo.jsx';\nimport TaskList from './TaskList.jsx';\n\nimport { Light as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';\nimport css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';\nimport docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';\n\nSyntaxHighlighter.registerLanguage('javascript', js);\nSyntaxHighlighter.registerLanguage('css', css);\n\nconst docs = [\n\t{key:\"apps.jsx\",id:\"Apps.jsx\",isVisible:true,content:\"...\",type:\"javascript\"},\n\t{key:\"main.jsx\",id:\"main.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"AddTodo.jsx\",id:\"data.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"TaskList.jsx\",id:\"data.jsx\",isVisible:false,content:\"...\",type:\"javascript\"},\n\t{key:\"index.html\",id:\"index.html\",isVisible:false,content:\"...\",type:\"html\"},\n\t{key:\"index.css\",id:\"index.css\",isVisible:false,content:\"...\",type:\"css\"},\n\t{key:\"app.css\",id:\"app.css\",isVisible:false,content:\"...\",type:\"css\"}\n];\n\nlet nextId = 0;\n\nexport const\tBrokenList = () => {\n\tconst [name, setName] = useState('');\n\tconst [artists, setArtists] = useState([]);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Inspiring sculptors:</h1>\n\t\t\t<input\n\t\t\t\tvalue={name}\n\t\t\t\tonChange={e => setName(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={() => {\n\t\t\t\tartists.push({\n\t\t\t\t\tid: nextId++,\n\t\t\t\t\tname: name,\n\t\t\t\t});\n\t\t\t}}>Add</button>\n\t\t\t<ul>\n\t\t\t\t{artists.map(artist => (\n\t\t\t\t\t<li key={artist.id}>{artist.name}</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t</>\n\t);\n}\n\n\nexport const\tFixedList = () => {\n\tconst [name, setName] = useState('');\n\tconst [artists, setArtists] = useState([]);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Inspiring sculptors:</h1>\n\t\t\t<input\n\t\t\t\tvalue={name}\n\t\t\t\tonChange={e => setName(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetArtists([\n\t\t\t\t\t...artists,\n\t\t\t\t\t{ id: nextId++, name: name }\n\t\t\t\t]);\n\t\t\t}}>Add</button>\n\t\t\t<ul>\n\t\t\t\t{artists.map(artist => (\n\t\t\t\t\t<li key={artist.id}>{artist.name}</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t</>\n\t);\n}\n\nlet initialArtists = [\n\t{ id: 0, name: 'Marta Colvin Andrade' },\n\t{ id: 1, name: 'Lamidi Olonade Fakeye'},\n\t{ id: 2, name: 'Louise Nevelson'},\n];\n\n\nexport const ExpanmdedDeleteList = () => \n{\n\tconst [artists, setArtists] = useState(\n\t\tinitialArtists\n\t);\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Inspiring sculptors:</h1>\n\t\t\t<ul>\n\t\t\t\t{artists.map(artist => (\n\t\t\t\t\t<li key={artist.id}>\n\t\t\t\t\t\t{artist.name}{' '}\n\t\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\t\tsetArtists(\n\t\t\t\t\t\t\t\tartists.filter(a =>\n\t\t\t\t\t\t\t\t\ta.id !== artist.id\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}}>\n\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t</>\n\t);\n}\n\nlet initialShapes = [\n\t{ id: 0, type: 'circle', x: 50, y: 100 },\n\t{ id: 1, type: 'square', x: 150, y: 100 },\n\t{ id: 2, type: 'circle', x: 250, y: 100 },\n];\n\nexport const ArrayTransformation = () => {\n\n\tconst [shapes, setShapes] = useState(\n\t\tinitialShapes\n\t);\n\tconst [toggle,setToggle] = useState(true);\n\tconst [message,setMessage]= useState(\"Move Circles Down!\");\n\n\tfunction handleClick() {\n\t\tlet finalToggle = toggle;\n\t\tsetToggle(!toggle);\n\t\tconst nextShapes = shapes.map(shape => {\n\t\t\tif(toggle)\n\t\t\t{\n\t\t\t\tsetMessage(\"Move Circles Up!\");\n\t\t\t\tif (shape.type === 'square') {\n\t\t\t\t\t// No change\n\t\t\t\t\treturn shape;\n\t\t\t\t} else {\n\t\t\t\t\t// Return a new circle 50px below\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...shape,\n\t\t\t\t\t\ty: shape.y + 50,\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t}else{\n\t\t\t\tsetMessage(\"Move Circles Down!\");\n\t\t\t\tif (shape.type === 'square') {\n\t\t\t\t\t// No change\n\t\t\t\t\treturn shape;\n\t\t\t\t} else {\n\t\t\t\t\t// Return a new circle 50px below\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...shape,\n\t\t\t\t\t\ty: shape.y - 50,\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\t// Re-render with the new array\n\t\tsetShapes(nextShapes);\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<button onClick={handleClick}>\n\t\t\t\t{message}\n\t\t\t</button>\n\t\t\t{shapes.map(shape => (\n\t\t\t\t<div\n\t\t\t\t\tkey={shape.id}\n\t\t\t\t\tstyle={{\n\t\t\t\t\tbackground: 'purple',\n\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\tleft: shape.x,\n\t\t\t\t\ttop: shape.y,\n\t\t\t\t\tborderRadius:\n\t\t\t\t\t\tshape.type === 'circle'\n\t\t\t\t\t\t\t? '50%' : '',\n\t\t\t\t\twidth: 20,\n\t\t\t\t\theight: 20,\n\t\t\t\t}} />\n\t\t\t))}\n\t\t</>\n\t);\n}\n\nlet initialCounters = [\n\t0, 0, 0\n];\n\nexport const ArrayMap = () => \n{\n\tconst [counters, setCounters] = useState(\n\t\tinitialCounters\n\t);\n\n\tfunction handleIncrementClick(index) {\n\t\tconst nextCounters = counters.map((c, i) => {\n\t\t\tif (i === index) {\n\t\t\t\t// Increment the clicked counter\n\t\t\t\treturn c + 1;\n\t\t\t} else {\n\t\t\t\t// The rest haven't changed\n\t\t\t\treturn c;\n\t\t\t}\n\t\t});\n\t\tsetCounters(nextCounters);\n\t}\n\n\treturn (\n\t\t<ul>\n\t\t\t{counters.map((counter, i) => (\n\t\t\t\t<li key={i}>\n\t\t\t\t\t{counter}\n\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\thandleIncrementClick(i);\n\t\t\t\t\t}}>+1</button>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nexport const ArrayInsert = () => {\n\tconst [name, setName] = useState('');\n\tconst [artists, setArtists] = useState(\n\t\tinitialArtists\n\t);\n\n\tfunction handleClick() {\n\t\tconst insertAt = 1; // Could be any index\n\t\tconst nextArtists = [\n\t\t\t// Items before the insertion point:\n\t\t\t...artists.slice(0, insertAt),\n\t\t\t// New item:\n\t\t\t{ id: nextId++, name: name },\n\t\t\t// Items after the insertion point:\n\t\t\t...artists.slice(insertAt)\n\t\t];\n\t\tsetArtists(nextArtists);\n\t\tsetName('');\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Inspiring sculptors:</h1>\n\t\t\t<input\n\t\t\t\tvalue={name}\n\t\t\t\tonChange={e => setName(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={handleClick}>\n\t\t\t\tInsert\n\t\t\t</button>\n\t\t\t<ul>\n\t\t\t\t{artists.map(artist => (\n\t\t\t\t\t<li key={artist.id}>{artist.name}</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t</>\n\t);\n}\n\n\n\nconst initialList = [\n\t{ id: 0, title: 'Big Bellies', seen: false },\n\t{ id: 1, title: 'Lunar Landscape', seen: false },\n\t{ id: 2, title: 'Terracotta Army', seen: true },\n];\n\nexport const BucketList = () => {\n\tconst [myList, setMyList] = useState(initialList);\n\tconst [yourList, setYourList] = useState(\n\t\tinitialList\n\t);\n\n\tfunction handleToggleMyList(artworkId, nextSeen) {\n\t\tsetMyList(myList.map(artwork => {\n\t\t\tif (artwork.id === artworkId) {\n\t\t\t\t// Create a *new* object with changes\n\t\t\t\treturn { ...artwork, seen: nextSeen };\n\t\t\t} else {\n\t\t\t\t// No changes\n\t\t\t\treturn artwork;\n\t\t\t}\n\t\t}));\n\t}\n\n\tfunction handleToggleYourList(artworkId, nextSeen) {\n\t\tsetYourList(yourList.map(artwork => {\n\t\t\tif(artworkId == artwork.id)\n\t\t\t\t{\n\t\t\t\t\treturn { ...artwork, seen: nextSeen};\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\treturn artwork;\n\t\t\t\t}\n\t\t}\n\n\t\t))\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Art Bucket List</h1>\n\t\t\t<h2>My list of art to see:</h2>\n\t\t\t<ItemList\n\t\t\t\tartworks={myList}\n\t\t\t\tonToggle={handleToggleMyList} />\n\t\t\t<h2>Your list of art to see:</h2>\n\t\t\t<ItemList\n\t\t\t\tartworks={yourList}\n\t\t\t\tonToggle={handleToggleYourList} />\n\t\t</>\n\t);\n}\n\nfunction ItemList({ artworks, onToggle }) {\n\treturn (\n\t\t<ul>\n\t\t\t{artworks.map(artwork => (\n\t\t\t\t<li key={artwork.id}>\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\tchecked={artwork.seen}\n\t\t\t\t\t\t\tonChange={e => {\n\t\t\t\t\t\t\t\tonToggle(\n\t\t\t\t\t\t\t\t\tartwork.id,\n\t\t\t\t\t\t\t\t\te.target.checked\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t{artwork.title}\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\n\nexport const BucketListImmer = () =>\n{\n\n\tconst [myList, updateMyList] = useImmer(\n\t\tinitialList\n\t);\n\tconst [yourList, updateYourList] = useImmer(\n\t\tinitialList\n\t);\n\n\t/*\n\tUpdated From: \n\tfunction handleToggleMyList(artworkId, nextSeen) {\n\t\tsetMyList(myList.map(artwork => {\n\t\t\tif (artwork.id === artworkId) {\n\t\t\t\t// Create a *new* object with changes\n\t\t\t\treturn { ...artwork, seen: nextSeen };\n\t\t\t} else {\n\t\t\t\t// No changes\n\t\t\t\treturn artwork;\n\t\t\t}\n\t\t}));\n\t}\t\n\t*/\n\tfunction handleToggleMyList(id, nextSeen) {\n\t\tupdateMyList(draft => {\n\t\t\tconst artwork = draft.find(a =>\n\t\t\t\ta.id === id\n\t\t\t);\n\t\t\tartwork.seen = nextSeen;\n\t\t});\n\t}\n\n\t/*\n\tUpdated from : \n\tfunction handleToggleYourList(artworkId, nextSeen) {\n\t\tsetYourList(yourList.map(artwork => {\n\t\t\tif(artworkId == artwork.id)\n\t\t\t\t{\n\t\t\t\t\treturn { ...artwork, seen: nextSeen};\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\treturn artwork;\n\t\t\t\t}\n\t\t}\n\n\t\t))\n\t}\n\t*/\n\tfunction handleToggleYourList(artworkId, nextSeen) {\n\t\tupdateYourList(draft => {\n\t\t\tconst artwork = draft.find(a =>\n\t\t\t\ta.id === artworkId\n\t\t\t);\n\t\t\tartwork.seen = nextSeen;\n\t\t});\n\t}\n\n\treturn (\n\t\t<>\n\t\t\t<h1>Art Bucket List</h1>\n\t\t\t<h2>My list of art to see:</h2>\n\t\t\t<ItemListImmer\n\t\t\t\tartworks={myList}\n\t\t\t\tonToggle={handleToggleMyList} />\n\t\t\t<h2>Your list of art to see:</h2>\n\t\t\t<ItemListImmer\n\t\t\t\tartworks={yourList}\n\t\t\t\tonToggle={handleToggleYourList} />\n\t\t</>\n\t);\n}\n\nfunction ItemListImmer({ artworks, onToggle }) {\n\treturn (\n\t\t<ul>\n\t\t\t{artworks.map(artwork => (\n\t\t\t\t<li key={artwork.id}>\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\tchecked={artwork.seen}\n\t\t\t\t\t\t\tonChange={e => {\n\t\t\t\t\t\t\t\tonToggle(\n\t\t\t\t\t\t\t\t\tartwork.id,\n\t\t\t\t\t\t\t\t\te.target.checked\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t{artwork.title}\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nconst challenge1InitialProducts = [{\n\tid: 0,\n\tname: 'Baklava',\n\tcount: 1,\n}, {\n\tid: 1,\n\tname: 'Cheese',\n\tcount: 5,\n}, {\n\tid: 2,\n\tname: 'Spaghetti',\n\tcount: 2,\n}];\n\nexport const Challenge1 = () =>\n{\n\t\tconst [\n\t\t\tproducts,\n\t\t\tsetProducts\n\t\t] = useState(challenge1InitialProducts)\n\t\n\t\tfunction handleIncreaseClick(productId) {\n\t\t\tsetProducts(\n\t\t\t\tproducts.map(product => {\n\t\t\t\t\tif (product.id === productId) {\n\t\t\t\t\t\t// Increment the clicked counter\n\t\t\t\t\t\treturn {...product,count: product.count + 1};\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// The rest haven't changed\n\t\t\t\t\t\treturn product;\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t\n\t\treturn (\n\t\t\t<ul>\n\t\t\t\t{products.map(product => (\n\t\t\t\t\t<li key={product.id}>\n\t\t\t\t\t\t{product.name}\n\t\t\t\t\t\t{' '}\n\t\t\t\t\t\t(<b>{product.count}</b>)\n\t\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\t\thandleIncreaseClick(product.id);\n\t\t\t\t\t\t}}>\n\t\t\t\t\t\t\t+\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t);\n\t}\n\nconst challenge2InitialProducts = [{\n\tid: 0,\n\tname: 'Baklava',\n\tcount: 1,\n}, {\n\tid: 1,\n\tname: 'Cheese',\n\tcount: 5,\n}, {\n\tid: 2,\n\tname: 'Spaghetti',\n\tcount: 2,\n}];\n\nexport const Challenge2 = () =>\n{\n\tconst [\n\t\tproducts,\n\t\tsetProducts\n\t] = useState(challenge2InitialProducts)\n\n\tfunction handleIncreaseClick(productId) {\n\t\tsetProducts(products.map(product => {\n\t\t\tif (product.id === productId) {\n\t\t\t\treturn {\n\t\t\t\t\t...product,\n\t\t\t\t\tcount: product.count + 1\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\treturn product;\n\t\t\t}\n\t\t}))\n\t}\n\n\tfunction handleDecreaseClick(productId) {\n\t\tsetProducts(products.map(product => {\n\t\t\tif (product.id === productId) {\n\t\t\t\treturn {\n\t\t\t\t\t...product,\n\t\t\t\t\tcount: product.count > 0 ?product.count -1 : 0\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\treturn product;\n\t\t\t}\n\t\t}))\n\t}\n\n\treturn (\n\t\t<ul>\n\t\t\t{products.map(product => (\n\t\t\t\t<li key={product.id}>\n\t\t\t\t\t{product.name}\n\t\t\t\t\t{' '}\n\t\t\t\t\t(<b>{product.count}</b>)\n\t\t\t\t\t<button onClick={() => {\n\t\t\t\t\t\thandleIncreaseClick(product.id);\n\t\t\t\t\t}}>\n\t\t\t\t\t\t+\n\t\t\t\t\t</button>\n\t\t\t\t\t<button onClick={()=>{\n\t\t\t\t\t\thandleDecreaseClick(product.id);\n\n\t\t\t\t\t}}>\n\t\t\t\t\t\t–\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nconst challenge3InitialTodos = [\n\t{ id: 0, title: 'Buy milk', done: true },\n\t{ id: 1, title: 'Eat tacos', done: false },\n\t{ id: 2, title: 'Brew tea', done: false },\n];\n\nexport const Challenge3 = () =>\n\t{\n\t\tconst [todos, setTodos] = useState(\n\t\t\tchallenge3InitialTodos\n\t\t);\n\t\n\t\tfunction handleAddTodo(title) {\n\t\t\tsetTodos(todos.concat({ id: todos.length+1,title: title, done:false}));\n\t\t\t/*\n\t\t\tOriginal Code:\n\t\t\ttodos.push({\n\t\t\t\tid: nextId++,\n\t\t\t\ttitle: title,\n\t\t\t\tdone: false\n\t\t\t});*/\n\t\t}\n\t\n\t\tfunction handleChangeTodo(nextTodo) {\n\t\t\tsetTodos(todos.map(todo=>{\n\t\t\t\tif (todo.id === nextTodo.id)\n\t\t\t\t\t{\n\t\t\t\t\t\treturn { ...todo, title: nextTodo.title, done: nextTodo.done};\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\treturn todo;\n\t\t\t\t\t}\n\t\t\t}));\n\t\t\t/* Original Code \n\t\t\tconst todo = todos.find(t =>\n\t\t\t\tt.id === nextTodo.id\n\t\t\t);\n\t\t\ttodo.title = nextTodo.title;\n\t\t\ttodo.done = nextTodo.done;*/\n\t\t}\n\t\n\t\tfunction handleDeleteTodo(todoId) {\n\t\t\tsetTodos(todos.filter(function(todo){\n\t\t\t\tif(todo.id != todoId)\n\t\t\t\t\t{\n\t\t\t\t\t\treturn todo;\n\t\t\t\t\t}\n\t\t\t}));\n\t\t\t/* Original Code\n\t\t\t\tconst index = todos.findIndex(t =>\n\t\t\t\tt.id === todoId\n\t\t\t);\n\t\t\ttodos.splice(index, 1);*/\n\t\t}\n\t\n\t\treturn (\n\t\t\t<>\n\t\t\t\t<AddTodo\n\t\t\t\t\tonAddTodo={handleAddTodo}\n\t\t\t\t/>\n\t\t\t\t<TaskList\n\t\t\t\t\ttodos={todos}\n\t\t\t\t\tonChangeTodo={handleChangeTodo}\n\t\t\t\t\tonDeleteTodo={handleDeleteTodo}\n\t\t\t\t/>\n\t\t\t</>\n\t\t);\n\n\t}\n\n\n\tconst challenge4InitialTodos = [\n\t\t{ id: 0, title: 'Buy milk', done: true },\n\t\t{ id: 1, title: 'Eat tacos', done: false },\n\t\t{ id: 2, title: 'Brew tea', done: false },\n\t];\n\t\n\texport const Challenge4 = () =>\n\t\t{\n\t\t\tconst [todos, setTodos] = useImmer(\n\t\t\t\tchallenge4InitialTodos\n\t\t\t);\n\t\t\n\t\t\tfunction handleAddTodo(title) {\n\t\t\t\tsetTodos(todos => {\n\t\t\t\t\ttodos.push({ id: todos.length+1,title: title, done:false});\n\t\t\t\t});\n\t\t\t\t/*\n\t\t\t\tOriginal Code:\n\t\t\t\ttodos.push({\n\t\t\t\t\tid: nextId++,\n\t\t\t\t\ttitle: title,\n\t\t\t\t\tdone: false\n\t\t\t\t});*/\n\t\t\t}\n\t\t\n\t\t\tfunction handleChangeTodo(nextTodo) {\n\t\t\t\tsetTodos(draft => {\n\t\t\t\t\tconst todoItem = draft.find(d =>d.id === nextTodo.id);\n\t\t\t\t\ttodoItem.title = nextTodo.title\n\t\t\t\t\ttodoItem.done = nextTodo.done;\n\t\t\t\t\t\n\t\t\t\t});\n\t\t\t\t/* Original Code \n\t\t\t\tconst todo = todos.find(t =>\n\t\t\t\t\tt.id === nextTodo.id\n\t\t\t\t);\n\t\t\t\ttodo.title = nextTodo.title;\n\t\t\t\ttodo.done = nextTodo.done;*/\n\t\t\t}\n\t\t\n\t\t\tfunction handleDeleteTodo(todoId) {\n\t\t\t\tsetTodos(\n\t\t\t\t\tdraft=>{\n\t\t\t\t\t\tconst draftItem = draft.find( d=> d.id===todoId);\n\t\t\t\t\t\tdraft.pop(draftItem);\n\t\t\t\t});\n\t\t\t\t/* Original Code\n\t\t\t\t\tconst index = todos.findIndex(t =>\n\t\t\t\t\tt.id === todoId\n\t\t\t\t);\n\t\t\t\ttodos.splice(index, 1);*/\n\t\t\t}\n\t\t\n\t\t\treturn (\n\t\t\t\t<>\n\t\t\t\t\t<AddTodo\n\t\t\t\t\t\tonAddTodo={handleAddTodo}\n\t\t\t\t\t/>\n\t\t\t\t\t<TaskList\n\t\t\t\t\t\ttodos={todos}\n\t\t\t\t\t\tonChangeTodo={handleChangeTodo}\n\t\t\t\t\t\tonDeleteTodo={handleDeleteTodo}\n\t\t\t\t\t/>\n\t\t\t\t</>\n\t\t\t);\n\t\n\t\t}\n\n\t\texport const TabButton = ({id,clickHandler}) => {\n\t\n \n\t\t\treturn (\n\t\t\t\t<button data={id} className=\"tablinks\" onClick={clickHandler}>\n\t\t\t\t\t{id}\n\t\t\t\t</button>\n\t\t\n\t\t\t)\n\t\t}\n\t\t\n\t\texport const Tab = ({isVisible,id,content,doctype}) => {\n\t\t\n\t\t\tif(isVisible)\n\t\t\t{\n\t\t\treturn (\n\t\t\t\t<div id={id} className=\"tabcontent\" >\n\t\t\t\t\t<h3>{id}</h3>\n\t\t\t\t<SyntaxHighlighter language={doctype} style={docco}>\n\t\t\t\t\t{content}\n\t\t\t\t</SyntaxHighlighter>\n\t\t\t\t</div>\n\t\t\t)\n\t\t\t}\n\t\t\telse\n\t\t\treturn null;\n\t\t}\n\t\t\n\t\t\n\t\t\n\t\texport const Tabs = () => {\n\t\t\tconst [documents, setDocuments] = useState(\n\t\t\t\tdocs\n\t\t\t);\n\t\t\n\t\t\tfunction handleClick(e)\n\t\t\t{\n\t\t\t\tconst nextDocs = docs.map(doc => {\n\t\t\t\t\tif (doc.id === e.target.getAttribute('data')) {\n\t\t\t\t\t\t// No change\n\t\t\t\t\t\tdoc.isVisible=true;\n\t\t\t\t\t\treturn doc;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Return a new circle 50px below\n\t\t\t\t\t\tdoc.isVisible=false;\n\t\t\t\t\t\treturn doc;\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t// Re-render with the new array\n\t\t\t\tsetDocuments(nextDocs);\n\t\t\t\t\n\t\t\t}\n\t\t \n\t\t\tconst listItems = docs.map(doc => <TabButton key={doc.key} clickHandler={handleClick} id={doc.id}>{doc.id}</TabButton>);\n\t\t\treturn ( <>\n\t\t\t\t<div className=\"tab\">\n\t\t\t\t\t{listItems}\n\t\t\t\t</div>\n\t\t\t\t{documents.map(doc =>\n\t\t\t\t\t<Tab\tkey={doc.key} id={doc.id} isVisible={doc.isVisible} content={doc.content} doctype={doc.type} />\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t\t</>\n\t\t\t);\n\t\t}",type:"javascript"},
  {key:"main.jsx",id:"main.jsx",isVisible:false,content:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport {BrokenList} from './App.jsx'\nimport {FixedList} from './App.jsx'\nimport {ExpanmdedDeleteList} from './App.jsx'\nimport {ArrayTransformation} from './App.jsx'\nimport {ArrayMap} from './App.jsx'\nimport {ArrayInsert} from './App.jsx'\nimport {BucketList} from './App.jsx'\nimport {BucketListImmer} from './App.jsx'\nimport {Challenge1} from './App.jsx'\nimport {Challenge2} from './App.jsx'\nimport {Challenge3} from './App.jsx'\nimport {Challenge4} from './App.jsx'\nimport {Tabs} from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root1')).render(\n\t<React.StrictMode>\n\t\t<BrokenList />\n\t</React.StrictMode>,\n)\n\n\nReactDOM.createRoot(document.getElementById('root2')).render(\n\t<React.StrictMode>\n\t\t<FixedList />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root3')).render(\n\t<React.StrictMode>\n\t\t<ExpanmdedDeleteList />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root4')).render(\n\t<React.StrictMode>\n\t\t<ArrayTransformation />\n\t</React.StrictMode>,\n)\n\nReactDOM.createRoot(document.getElementById('root5')).render(\n\t<React.StrictMode>\n\t\t<ArrayMap />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root6')).render(\n\t<React.StrictMode>\n\t\t<ArrayInsert />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root7')).render(\n\t<React.StrictMode>\n\t\t<BucketList />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root8')).render(\n\t<React.StrictMode>\n\t\t<BucketListImmer />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root9')).render(\n\t<React.StrictMode>\n\t\t<Challenge1 />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root10')).render(\n\t<React.StrictMode>\n\t\t<Challenge2 />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root11')).render(\n\t<React.StrictMode>\n\t\t<Challenge3 />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById('root12')).render(\n\t<React.StrictMode>\n\t\t<Challenge4 />\n\t</React.StrictMode>\n)\n\nReactDOM.createRoot(document.getElementById(\"codeblock1\")).render(\n\t<React.StrictMode>\n\t\t<Tabs />\n\t</React.StrictMode>\n)",type:"javascript"},
  {key:"AddTodo.jsx",id:"data.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport default function AddTodo({ onAddTodo }) {\n\tconst [title, setTitle] = useState('');\n\treturn (\n\t\t<>\n\t\t\t<input\n\t\t\t\tplaceholder=\"Add todo\"\n\t\t\t\tvalue={title}\n\t\t\t\tonChange={e => setTitle(e.target.value)}\n\t\t\t/>\n\t\t\t<button onClick={() => {\n\t\t\t\tsetTitle('');\n\t\t\t\tonAddTodo(title);\n\t\t\t}}>Add</button>\n\t\t</>\n\t)\n}",type:"javascript"},
  {key:"TaskList.jsx",id:"data.jsx",isVisible:false,content:"import { useState } from 'react';\n\nexport default function TaskList({\n\ttodos,\n\tonChangeTodo,\n\tonDeleteTodo\n}) {\n\treturn (\n\t\t<ul>\n\t\t\t{todos.map(todo => (\n\t\t\t\t<li key={todo.id}>\n\t\t\t\t\t<Task\n\t\t\t\t\t\ttodo={todo}\n\t\t\t\t\t\tonChange={onChangeTodo}\n\t\t\t\t\t\tonDelete={onDeleteTodo}\n\t\t\t\t\t/>\n\t\t\t\t</li>\n\t\t\t))}\n\t\t</ul>\n\t);\n}\n\nfunction Task({ todo, onChange, onDelete }) {\n\tconst [isEditing, setIsEditing] = useState(false);\n\tlet todoContent;\n\tif (isEditing) {\n\t\ttodoContent = (\n\t\t\t<>\n\t\t\t\t<input\n\t\t\t\t\tvalue={todo.title}\n\t\t\t\t\tonChange={e => {\n\t\t\t\t\t\tonChange({\n\t\t\t\t\t\t\t...todo,\n\t\t\t\t\t\t\ttitle: e.target.value\n\t\t\t\t\t\t});\n\t\t\t\t\t}} />\n\t\t\t\t<button onClick={() => setIsEditing(false)}>\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t} else {\n\t\ttodoContent = (\n\t\t\t<>\n\t\t\t\t{todo.title}\n\t\t\t\t<button onClick={() => setIsEditing(true)}>\n\t\t\t\t\tEdit\n\t\t\t\t</button>\n\t\t\t</>\n\t\t);\n\t}\n\treturn (\n\t\t<label>\n\t\t\t<input\n\t\t\t\ttype=\"checkbox\"\n\t\t\t\tchecked={todo.done}\n\t\t\t\tonChange={e => {\n\t\t\t\t\tonChange({\n\t\t\t\t\t\t...todo,\n\t\t\t\t\t\tdone: e.target.checked\n\t\t\t\t\t});\n\t\t\t\t}}\n\t\t\t/>\n\t\t\t{todoContent}\n\t\t\t<button onClick={() => onDelete(todo.id)}>\n\t\t\t\tDelete\n\t\t\t</button>\n\t\t</label>\n\t);\n}",type:"javascript"},
  {key:"index.html",id:"index.html",isVisible:false,content:"<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<title>Vite + React</title>\n\t</head>\n\t<body>\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13a</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, the list is broken because the state is not correctly applied by using the array.push functions as opposed to the setArtists.<a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root1\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13b</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, the list add list function works because the state function has been adjusted to support the array modifications by using setArtists along with the spread ... syntax for previous array elements. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root2\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13c</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, array modification is expanded to include delete. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root3\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13d</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, array modification is expanded to include array transformations. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root4\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13e</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, arrays are modified using the map function . <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root5\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13f</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, arrays are modified by inserting new items. For the purposes of demonstration only items are added at index 1. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root6\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13f</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: In this example, arrays are modified by updating specific array element state ( checkbox ). <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root7\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13g</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: This is the same as the previous example but uses immer instead. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root8\"></div>\n\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13h</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: \n\t\t\t\tThis is the first tutorial challenge - this is an array update challenge where multiple buttons increase their own value based on an array. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root9\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13i</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: \n\t\t\t\tThis is the second tutorial challenge - this is an array update challenge where a \"shopping cart\" that allows changing quantities needs to have an item quantity removed.\n\t\t\t\tAs an added note: negative product quantities are not allowed. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root10\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13j</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: \n\t\t\t\tThis is the third tutorial challenge of which is a todolist that does not function properly.\n\t\t\t\tThe task is to allow edits to the todolist. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root11\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Tutorial 13k</h1>\n\t\t\t<p>This tutorial demonstrates component updating arrays in state: \n\t\t\t\tThis is the fourth tutorial challenge of which is a the same todolist that does not function properly from the previous challenge.\n\t\t\t\tThe task is to allow edits to the todolist using immer. <a href=\"https://react.dev/learn/updating-arrays-in-state\">please see</a> </p>\n\t\t\t<br />\n\t\t</div>\n\n\t\t<div id=\"root12\"></div>\n\n\t\t<div id=\"header\">\n\t\t\t<h1>Code Section</h1>\n\t\t\t<p>This section displays the code for the previous sections and has high probability for being slightly out of date.\n\t\t\t\tThe code is generated by taking the files replacing the \r\n sequence with \\n, a double space with a \\t, and any \" characters with \"\n\t\t\t\twhich should have the effect of serializing the code.\n\t\t\t</p>\n\t\t\t<br />\n\t\t</div>\n\t\t<hr />\n\t\t<div id=\"codeblock1\">\n\n\t\t</div>\n\n\t\t<script type=\"module\" src=\"/src/main.jsx\"></script>\n\n\t</body>\n</html>\n",type:"html"},
  {key:"index.css",id:"index.css",isVisible:false,content:":root {\n\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\tline-height: 1.5;\n\tfont-weight: 400;\n\n\tcolor-scheme: light dark;\n\tcolor: rgba(255, 255, 255, 0.87);\n\tbackground-color: #242424;\n\n\tfont-synthesis: none;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\na {\n\tfont-weight: 500;\n\tcolor: #646cff;\n\ttext-decoration: inherit;\n}\na:hover {\n\tcolor: #535bf2;\n}\n\nbody {\n\tmargin: 0;\n\tmin-width: 320px;\n\tmin-height: 100vh;\n}\n\nh1 {\n\tfont-size: 3.2em;\n\tline-height: 1.1;\n}\n\nbutton {\n\tborder-radius: 8px;\n\tborder: 1px solid transparent;\n\tpadding: 0.6em 1.2em;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tbackground-color: #1a1a1a;\n\tcursor: pointer;\n\ttransition: border-color 0.25s;\n}\nbutton:hover {\n\tborder-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n\toutline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\tcolor: #213547;\n\t\tbackground-color: #ffffff;\n\t}\n\ta:hover {\n\t\tcolor: #747bff;\n\t}\n\tbutton {\n\t\tbackground-color: #f9f9f9;\n\t}\n}\n\n#header{\n\twidth:100%;\n\tmin-height:100px;\n}\n\n#root4 { height: 300px; position:relative;}\n\n/* Style the tab */\n.tab {\n\toverflow: hidden;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f1f1f1;\n}\n\n/* Style the buttons that are used to open the tab content */\n.tab button {\n\tbackground-color: inherit;\n\tfloat: left;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n\tpadding: 14px 16px;\n\ttransition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\n.tab button:hover {\n\tbackground-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n.tab button.active {\n\tbackground-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n\tdisplay: block;\n\tpadding: 6px 12px;\n\tborder: 1px solid #ccc;\n\tborder-top: none;\n}\n\n.tabcontent {\n\tanimation: fadeEffect 1s; /* Fading effect takes 1 second */\n}\n\n/* Go from zero to full opacity */\n@keyframes fadeEffect {\n\tfrom {opacity: 0;}\n\tto {opacity: 1;}\n}",type:"css"},
  {key:"app.css",id:"app.css",isVisible:false,content:"#root {\n\tmax-width: 1280px;\n\tmargin: 0 auto;\n\tpadding: 2rem;\n\ttext-align: center;\n}\n\n.logo {\n\theight: 6em;\n\tpadding: 1.5em;\n\twill-change: filter;\n\ttransition: filter 300ms;\n}\n.logo:hover {\n\tfilter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.react:hover {\n\tfilter: drop-shadow(0 0 2em #61dafbaa);\n}\n\n@keyframes logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\ta:nth-of-type(2) .logo {\n\t\tanimation: logo-spin infinite 20s linear;\n\t}\n}\n\n.card {\n\tpadding: 2em;\n}\n\n.read-the-docs {\n\tcolor: #888;\n}\n",type:"css"}
];

let nextId = 0;

export const  BrokenList = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}


export const  FixedList = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];


export const ExpanmdedDeleteList = () => 
{
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export const ArrayTransformation = () => {

  const [shapes, setShapes] = useState(
    initialShapes
  );
  const [toggle,setToggle] = useState(true);
  const [message,setMessage]= useState("Move Circles Down!");

  function handleClick() {
    let finalToggle = toggle;
    setToggle(!toggle);
    const nextShapes = shapes.map(shape => {
      if(toggle)
      {
        setMessage("Move Circles Up!");
        if (shape.type === 'square') {
          // No change
          return shape;
        } else {
          // Return a new circle 50px below
          return {
            ...shape,
            y: shape.y + 50,
          };
        }
      }else{
        setMessage("Move Circles Down!");
        if (shape.type === 'square') {
          // No change
          return shape;
        } else {
          // Return a new circle 50px below
          return {
            ...shape,
            y: shape.y - 50,
          };
        }
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        {message}
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}

let initialCounters = [
  0, 0, 0
];

export const ArrayMap = () => 
{
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}

export const ArrayInsert = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}



const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export const BucketList = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if(artworkId == artwork.id)
        {
          return { ...artwork, seen: nextSeen};
        }
        else{
          return artwork;
        }
    }

    ))
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}


export const BucketListImmer = () =>
{

  const [myList, updateMyList] = useImmer(
    initialList
  );
  const [yourList, updateYourList] = useImmer(
    initialList
  );

  /*
  Updated From: 
  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }  
  */
  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a =>
        a.id === id
      );
      artwork.seen = nextSeen;
    });
  }

  /*
  Updated from : 
  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if(artworkId == artwork.id)
        {
          return { ...artwork, seen: nextSeen};
        }
        else{
          return artwork;
        }
    }

    ))
  }
  */
  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemListImmer
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemListImmer
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemListImmer({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

const challenge1InitialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export const Challenge1 = () =>
{
    const [
      products,
      setProducts
    ] = useState(challenge1InitialProducts)
  
    function handleIncreaseClick(productId) {
      setProducts(
        products.map(product => {
          if (product.id === productId) {
            // Increment the clicked counter
            return {...product,count: product.count + 1};
          } else {
            // The rest haven't changed
            return product;
          }
        })
      );
    }
  
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => {
              handleIncreaseClick(product.id);
            }}>
              +
            </button>
          </li>
        ))}
      </ul>
    );
  }

const challenge2InitialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export const Challenge2 = () =>
{
  const [
    products,
    setProducts
  ] = useState(challenge2InitialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count > 0 ?product.count -1 : 0
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={()=>{
            handleDecreaseClick(product.id);

          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

const challenge3InitialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export const Challenge3 = () =>
  {
    const [todos, setTodos] = useState(
      challenge3InitialTodos
    );
  
    function handleAddTodo(title) {
      setTodos(todos.concat({ id: todos.length+1,title: title, done:false}));
      /*
      Original Code:
      todos.push({
        id: nextId++,
        title: title,
        done: false
      });*/
    }
  
    function handleChangeTodo(nextTodo) {
      setTodos(todos.map(todo=>{
        if (todo.id === nextTodo.id)
          {
            return { ...todo, title: nextTodo.title, done: nextTodo.done};
          }
          else{
            return todo;
          }
      }));
      /* Original Code 
      const todo = todos.find(t =>
        t.id === nextTodo.id
      );
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;*/
    }
  
    function handleDeleteTodo(todoId) {
      setTodos(todos.filter(function(todo){
        if(todo.id != todoId)
          {
            return todo;
          }
      }));
      /* Original Code
        const index = todos.findIndex(t =>
        t.id === todoId
      );
      todos.splice(index, 1);*/
    }
  
    return (
      <>
        <AddTodo
          onAddTodo={handleAddTodo}
        />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </>
    );

  }


  const challenge4InitialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
  ];
  
  export const Challenge4 = () =>
    {
      const [todos, setTodos] = useImmer(
        challenge4InitialTodos
      );
    
      function handleAddTodo(title) {
        setTodos(todos => {
          todos.push({ id: todos.length+1,title: title, done:false});
        });
        /*
        Original Code:
        todos.push({
          id: nextId++,
          title: title,
          done: false
        });*/
      }
    
      function handleChangeTodo(nextTodo) {
        setTodos(draft => {
          const todoItem = draft.find(d =>d.id === nextTodo.id);
          todoItem.title = nextTodo.title
          todoItem.done = nextTodo.done;
          
        });
        /* Original Code 
        const todo = todos.find(t =>
          t.id === nextTodo.id
        );
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;*/
      }
    
      function handleDeleteTodo(todoId) {
        setTodos(
          draft=>{
            const draftItem = draft.find( d=> d.id===todoId);
            draft.pop(draftItem);
        });
        /* Original Code
          const index = todos.findIndex(t =>
          t.id === todoId
        );
        todos.splice(index, 1);*/
      }
    
      return (
        <>
          <AddTodo
            onAddTodo={handleAddTodo}
          />
          <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
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