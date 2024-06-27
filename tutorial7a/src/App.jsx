import { useState } from 'react'
import Clock from './Clock.jsx'
import './App.css'

function today()
{
  let date = new Date();
  console.log("Today Function:" + typeof(date));
  let props = Object.getOwnPropertyNames(date);
  console.log(props);
  var index;
  for(index in props)
    {
      console.log(index);
    }
  return date;
}

export const App = () => {
  return (
    <Clock time={today()} />
  );
}

export default App;