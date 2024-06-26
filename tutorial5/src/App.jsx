import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Item({ name, isPacked, isDamaged,isNew }) {

  if (isPacked) {
    return null;
  }
  return <li className="item {isDamaged?idDamaged:''}">{name} {isNew? '✔':''}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride&#39;s Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          isDamaged={true}
          isNew={false}
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          isDamaged={false}
          isNew={false}
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false}
          isDamaged={false}
          isNew={true}
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}