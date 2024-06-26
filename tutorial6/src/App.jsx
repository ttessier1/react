import { useState } from 'react'
import './App.css'
import { people2 } from './data.jsx';
import { getImageUrl } from './utils.jsx';

const people1 = [
  {id:1,content:'Creola Katherine Johnson: mathematician'},
  {id:2,content:'Mario José Molina-Pasquel Henríquez: chemist'},
  {id:3,content:'Mohammad Abdus Salam: physicist'},
  {id:4,content:'Percy Lavon Julian: chemist'},
  {id:5,content:'Subrahmanyan Chandrasekhar: astrophysicist'}
];

export const  List = () => {
  const listItems = people1.map(person =>
    <li key={person.id}>{person.content}</li>
  );
  return <ul>{listItems}</ul>;
}

export const FilterList = () =>  {
  const chemists = people2.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        id={person.id}
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}