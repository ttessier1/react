import { useState } from 'react'
import './App.css'

function double(number) {
  return 2 * number;
}

function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export const RecipeList = () => {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
let brokenguest=0;
let guest = 0;

function BrokenCup() {
  // Bad: changing a preexisting variable!
  brokenguest=brokenguest+1;
  return <h2>Tea cup for guest #{brokenguest}</h2>;
}

export const BrokenTeaSet = () => {
  return (
    <>
      <BrokenCup />
      <BrokenCup />
      <BrokenCup />
    </>
  );
}

function Cup({guest}) {
  // Bad: changing a preexisting variable!
  return <h2>Tea cup for guest #{guest}</h2>;
}

export const TeaSet = () => {
  return (
    <>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  );
}

export const TeaGathering = () => {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}