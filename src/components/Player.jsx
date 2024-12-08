import { useState, useRef } from "react";


export default function Player() {

  // Refs
  const playerName = useRef();

  // States
  const[enteredPlayerName, setEnteredPlayername] =  useState('');

  // Functions
  function handleClick(){
    setEnteredPlayername(playerName.current.value);
  }

  // JSX
  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
