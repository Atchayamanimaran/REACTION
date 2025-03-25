import './App.css';
import React from "react";
import MoodDisplay from "./MoodDisplay";
import { useState } from 'react';

function App() {
  const [mood,setMood] =useState("");
  return (
   <div className={`container ${mood}`}>
    <h1>How are you feeling today?</h1>
    <div className='buttons'>
      <button onClick={() => setMood("HAPPY")}>Happy😆</button>
      <button onClick={() => setMood("SAD")}>Sad😔</button>
      <button onClick={() => setMood("ANGRY")}>Angry😡</button>
      <button onClick={() => setMood("EXITED")}>Exited🤩</button>
    </div>
    <MoodDisplay mood={mood}/>
   </div>
  );
}

export default App;
