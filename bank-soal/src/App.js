import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" className="title" placeholder="Title"/>
      <input type="text" className="subtitle" placeholder="Subtitle"/> 
      <textarea rows="50" className="text" placeholder="Your text goes here..."/>
    </div>
  );
}

export default App;
